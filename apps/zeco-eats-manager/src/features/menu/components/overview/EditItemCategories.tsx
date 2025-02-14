'use client'
import Button from '@/shared/components/button/Button'
import ItemCategories from './ItemCategories'
import { CiSearch } from 'react-icons/ci'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { BiPlus, BiX } from 'react-icons/bi'
import { useCategories } from '../../hooks/useCategories'
import { useSuspenseQuery } from '@tanstack/react-query'
import {
  restaurantCategoriesOptions,
  restaurantMenuCategoriesItemsOptions,
} from '../../api/queries/options/menuOptions'
import { useMenuId } from '../../hooks/menuHooks'
import { Tables } from '@zeco-eats-lib/utils-client'

export default function EditItemCategories({
  item,
}: {
  item: Tables<'restaurant_items'>
}) {
  const menuId = useMenuId()
  const { data: allCategories } = useSuspenseQuery(restaurantCategoriesOptions)
  const { data: itemCategoriesArr } = useSuspenseQuery(
    restaurantMenuCategoriesItemsOptions(menuId)
  )

  const itemCategories = itemCategoriesArr.filter((el) =>
    el.items.some((elm) => elm.id === item.id)
  )

  const {
    deleteCategoryFromItem,
    setHideNewCategoryInput,
    hideNewCategoryInput,
    hideAddNewCategory,
    createNew,
    categoryInputRef,
    setNewCategoryOnChange,
    searchForCategories,
    addItemToCategory,
    addItemToExistingCategory,
    newCategory,
    searchCategories,
    wantsToCreateNewCategory,
    isMutating,
  } = useCategories(allCategories, item)

  return (
    <div className="space-y-2">
      <p className="font-medium">Categories</p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        {itemCategories.map((el, i) => (
          <ItemCategories
            key={i}
            category={el}
            deleteCategory={deleteCategoryFromItem}
            disable={isMutating}
          />
        ))}

        <Button
          events={{
            onClick: hideNewCategoryInput
              ? () => setHideNewCategoryInput(false)
              : hideAddNewCategory,
          }}
          px="px-3"
          py="py-2"
          disable={isMutating}
        >
          {hideNewCategoryInput ? <BiPlus size={20} /> : <BiX size={20} />}
        </Button>

        {!hideNewCategoryInput && (
          <div className="w-full- relative">
            <div className="flex w-full items-center gap-x-2">
              {' '}
              <div className="has-[:focus]:border-secondary bg-background flex h-[2.5rem] w-full items-center space-x-2 rounded-lg border-2 border-solid border-transparent px-4 has-[:focus]:bg-white">
                {!createNew && (
                  <label htmlFor="itemName">
                    <CiSearch />
                  </label>
                )}

                <input
                  ref={categoryInputRef}
                  autoFocus
                  id="itemName"
                  type="text"
                  placeholder={
                    createNew ? 'Add new category' : 'Search category'
                  }
                  className="w-full bg-inherit outline-none"
                  onChange={
                    createNew ? setNewCategoryOnChange : searchForCategories
                  }
                />
              </div>
              {createNew && (
                <Button
                  events={{ onClick: () => addItemToCategory(newCategory) }}
                >
                  Add
                </Button>
              )}
            </div>

            {!createNew && (
              <div className="shadow-secondary absolute inset-x-0 top-14 h-auto max-h-[11rem] overflow-y-auto rounded-lg bg-white px-4 pt-4 shadow-2xl">
                <ul className="divide-backgroundBorder divide-y-2 rounded-lg px-2">
                  {searchCategories.map((el, i) => (
                    <li
                      className={`py-3 ${itemCategories.some((elm) => elm.category.id === el.id) || isMutating ? 'pointer-events-none cursor-not-allowed text-stone-600' : 'pointer-events-auto cursor-pointer'}`}
                      key={i}
                      onClick={() => addItemToExistingCategory(el)}
                    >
                      {el.name}
                    </li>
                  ))}
                </ul>
                <div className="sticky bottom-0 bg-white py-2">
                  <ButtonWithIcon
                    events={{
                      onClick: wantsToCreateNewCategory,
                    }}
                  >
                    <span>
                      <BiPlus size={20} />{' '}
                    </span>
                    <span>Create new</span>
                  </ButtonWithIcon>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
