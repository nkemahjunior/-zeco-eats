'use client'
import { useBrowseMenus } from '../../context/BrowseMenusContext'

export default function FilterHighestRated() {
  const { applyFilter, resetFilter, sortHighestRated } = useBrowseMenus()

  const handleToggle = () => {
    if (sortHighestRated) {
      resetFilter('sortHighestRated')
    } else {
      applyFilter('sortHighestRated', true)
    }
  }

  return (
    <div>
      <button
        className={`w-fit space-x-2 text-nowrap rounded-3xl ${sortHighestRated ? 'bg-secondary bg-secondary/80 text-white' : 'bg-background hover:bg-stone-200'} px-4 py-2 font-medium transition-colors duration-200`}
        onClick={handleToggle}
      >
        Highest rated
      </button>
    </div>
  )
}
