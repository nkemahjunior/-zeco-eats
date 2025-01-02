import { BiX } from 'react-icons/bi'

export default function ItemCategories({
  category,
  ItemCategoriesArr,
  setItemCategories,
}: {
  category: string
  ItemCategoriesArr: string[]
  setItemCategories: (arg: string[]) => void
}) {
  const deleteCategory = () => {
    const arr = ItemCategoriesArr.filter((el) => el !== category)
    setItemCategories(arr)
  }
  return (
    <div className="bg-background w-fit rounded-lg px-3 py-2 font-medium">
      <div className="flex items-center space-x-2">
        <span>{category}</span>
        <button
          className="hover:bg-backgroundShade2 transition-colors duration-300"
          onClick={deleteCategory}
        >
          <BiX size={20} />
        </button>
      </div>
    </div>
  )
}
