'use client'

import { useBrowseMenus } from '../../context/BrowseMenusContext'

export default function FilterUnder30Min() {
  const { applyFilter, resetFilter, under30Min } = useBrowseMenus()

  const handleToggle = () => {
    if (under30Min) {
      resetFilter('under30Min')
    } else {
      applyFilter('under30Min', true)
    }
  }

  return (
    <div>
      <button
        className={`w-fit space-x-2 text-nowrap rounded-3xl ${under30Min ? 'bg-secondary bg-secondary/80 text-white' : 'bg-background hover:bg-stone-200'} px-4 py-2 font-medium transition-colors duration-200`}
        onClick={handleToggle}
      >
        Under 30 min
      </button>
    </div>
  )
}
