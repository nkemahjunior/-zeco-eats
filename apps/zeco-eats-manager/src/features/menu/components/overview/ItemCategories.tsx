import { BiX } from 'react-icons/bi'
import { MenuCategorieItem } from '../../types/MenuTypes'

export default function ItemCategories({
  category,
  deleteCategory,
  disable,
}: {
  category: MenuCategorieItem
  deleteCategory: (arg: MenuCategorieItem) => void
  disable: boolean
}) {
  return (
    <div
      className={`${disable ? 'bg-background/50 pointer-events-none cursor-not-allowed' : 'bg-background pointer-events-auto cursor-auto'} w-fit rounded-lg px-3 py-2 font-medium`}
    >
      <div className="flex items-center space-x-2">
        <span>{category.category.name}</span>
        <button
          className={`hover:bg-backgroundShade2 transition-colors duration-300`}
          onClick={() => deleteCategory(category)}
        >
          <BiX size={20} />
        </button>
      </div>
    </div>
  )
}
