import { ChangeEvent, useEffect, useRef, useState } from 'react'

export function useCategories(categories: string[]) {
  const [ItemCategoriesArr, setItemCategoriesArr] = useState<string[]>([
    ...categories,
  ])

  const [searchCategories, setSearchCategories] = useState([...categories])

  const [hideNewCategoryInput, setHideNewCategoryInput] = useState(true)
  const [createNew, setCreateNew] = useState(false)
  const [newCategory, setNewCategory] = useState('')
  const categoryInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    //using effect because the motherfucking input does not autofocus when rendering it conditionally
    if (categoryInputRef.current) {
      categoryInputRef.current.focus()
    }
  }, [createNew, hideNewCategoryInput])

  const deleteCategoryFromItem = (category: string) => {
    const arr = ItemCategoriesArr.filter((el) => el !== category)
    setItemCategoriesArr(arr)
  }

  const searchForCategories = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setSearchCategories([...ItemCategoriesArr])
      return
    }
    const arr = searchCategories.filter((el) =>
      el.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchCategories(arr)
  }

  const addItemToCategory = (newCategory: string) => {
    if (newCategory.length <= 0) return
    const arr = [...ItemCategoriesArr, newCategory]
    setItemCategoriesArr(arr)
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
    ItemCategoriesArr,
    deleteCategoryFromItem,
    searchForCategories,
    addItemToCategory,
    hideAddNewCategory,
    wantsToCreateNewCategory,
    setNewCategoryOnChange,
    setItemCategoriesArr,
    setHideNewCategoryInput,
  }
}
