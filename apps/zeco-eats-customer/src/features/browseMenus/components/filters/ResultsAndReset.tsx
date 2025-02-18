'use client'

import { useBrowseMenus } from '../../context/BrowseMenusContext'

export default function ResultsAndReset() {
  const { restaurants, resetAllFilters } = useBrowseMenus()

  return (
    <div className="flex items-center justify-between font-medium">
      <span className="text-bases">{restaurants.length} Results</span>
      <button
        className="rounded-3xl bg-background p-2 hover:bg-backgroundShade2"
        onClick={resetAllFilters}
      >
        Reset
      </button>
    </div>
  )
}
