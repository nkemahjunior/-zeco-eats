import { BiX } from 'react-icons/bi'

export default function ItemCategories({
  category,
  deleteCategory,
}: {
  category: string
  deleteCategory: (arg: string) => void
}) {
  return (
    <div className="bg-background w-fit rounded-lg px-3 py-2 font-medium">
      <div className="flex items-center space-x-2">
        <span>{category}</span>
        <button
          className="hover:bg-backgroundShade2 transition-colors duration-300"
          onClick={() => deleteCategory(category)}
        >
          <BiX size={20} />
        </button>
      </div>
    </div>
  )
}
