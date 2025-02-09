import { Tables } from '@zeco-eats-lib/utils-client'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { MenuCategorieItem } from '../types/MenuTypes'
import { useMenuId } from './menuHooks'
import {
  addItemToCategoryAction,
  deleteCategoryFromItemAction,
} from '../api/mutations/actions/menuActions'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { KEYRestaurantMenuCategoriesItems } from '../api/queries/options/menuOptions'
import { toast } from 'sonner'

export function useCategories(
  allCategories: Tables<'restaurant_categories'>[],
  curItem: Tables<'restaurant_items'>
) {
  const [searchCategories, setSearchCategories] = useState(allCategories)

  const [hideNewCategoryInput, setHideNewCategoryInput] = useState(true)
  const [createNew, setCreateNew] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const categoryInputRef = useRef<HTMLInputElement | null>(null)

  const [isMutating, setIsMutating] = useState(false)

  const menuId = useMenuId()
  const queryClient = getQueryClient()

  useEffect(() => {
    //using effect because the motherfucking input does not autofocus when rendering it conditionally
    if (categoryInputRef.current) {
      categoryInputRef.current.focus()
    }
  }, [createNew, hideNewCategoryInput])

  const deleteCategoryFromItem = async (category: MenuCategorieItem) => {
    setIsMutating(true)
    const res = await deleteCategoryFromItemAction(
      menuId,
      category.category.id,
      curItem.id
    )

    if (res.success) {
      //update cache
      queryClient.setQueryData(
        [KEYRestaurantMenuCategoriesItems, menuId],
        (oldData: MenuCategorieItem[]) => {
          return oldData.filter((el) => {
            if (el.category.id === category.category.id) {
              el.items = el.items.filter((item) => item.id !== curItem.id)
              return el.items.length > 0 // Keep only if there are remaining items
            }
            return true // Keep other categories
          })
        }
      )
      toast.success(res.msg)
    } else {
      toast.error(res.msg)
    }

    setIsMutating(false)
  }

  const searchForCategories = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase()

    if (query.length === 0) {
      setSearchCategories(allCategories)
      return
    }

    setSearchCategories(
      allCategories.filter((el) => el.name?.toLowerCase().includes(query))
    )
  }

  const addItemToCategory = (newCategory: string) => {
    if (!newCategory.length) return
    //add to db and return the data and store in arr
    // const arr = [...ItemCategoriesArr, newCategory]
    // setItemCategoriesArr(arr)
    // setHideNewCategoryInput(true)
    // if (createNew) setCreateNew(false)
  }

  const addItemToExistingCategory = async (
    newCategory: Tables<'restaurant_categories'>
  ) => {
    if (!newCategory) return
    setIsMutating(true)

    const res = await addItemToCategoryAction(
      menuId,
      newCategory.id,
      curItem.id
    )

    if (res.success) {
      const category: MenuCategorieItem = {
        category: newCategory,
        items: [curItem],
      }

      //update cache
      queryClient.setQueryData(
        [KEYRestaurantMenuCategoriesItems, menuId],
        (oldData: MenuCategorieItem[]) => {
          return [...oldData, category]
        }
      )

      toast.success(res.msg)
    } else {
      toast.error(res.msg)
    }

    setIsMutating(false)
    setHideNewCategoryInput(true)
    if (createNew) setCreateNew(false)
  }

  const hideAddNewCategory = () => {
    setHideNewCategoryInput(true)
    setCreateNew(false)
  }

  const wantsToCreateNewCategory = () => {
    setCreateNew(true)
  }

  const setNewCategoryOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value)
  }

  return {
    categoryInputRef,
    newCategory,
    hideNewCategoryInput,
    createNew,
    searchCategories,
    deleteCategoryFromItem,
    searchForCategories,
    addItemToCategory,
    addItemToExistingCategory,
    hideAddNewCategory,
    wantsToCreateNewCategory,
    setNewCategoryOnChange,
    setHideNewCategoryInput,
    isMutating,
  }
}
