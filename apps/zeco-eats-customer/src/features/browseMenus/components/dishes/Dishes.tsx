'use client'

import { useBrowseMenus } from '../../context/BrowseMenusContext'
import DishCard from './DishCard'
import { Shimmer } from '@zeco-eats-lib/utils-client'

// Component Using the Context
export default function Dishes() {
  const { restaurants, totalCount, page, isLoading, isFetching, setNextPage } =
    useBrowseMenus()

  const allDataLoaded = restaurants.length >= totalCount

  if (isLoading && page === 1) {
    return (
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Shimmer key={index} className="h-[12rem] w-full rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-8">
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
        {restaurants.map((restaurant, i) => (
          <DishCard
            key={i}
            name={restaurant.name || ''}
            image={restaurant.image || ''}
            minAvgCookTime={restaurant.min_avg_cook_time || 0}
            maxAvgCookTime={restaurant.max_avg_cook_time || 0}
            rating={restaurant.rating || 4.0}
          />
        ))}

        {isFetching &&
          Array.from({ length: 4 }).map((_, index) => (
            <Shimmer key={index} className="h-[12rem] w-full rounded-lg" />
          ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={setNextPage}
          className={`mt-4 rounded px-4 py-2 text-white ${
            isFetching || allDataLoaded
              ? 'pointer-events-none cursor-not-allowed bg-primary/20'
              : 'pointer-events-auto bg-primary'
          }`}
        >
          {isFetching ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  )
}

// const [isMobile, setIsMobile] = useState(true)
// useEffect(() => {
//   function checkScreenWidth() {
//     if (window.screen.width < 768) {
//       setIsMobile(true)
//     } else {
//       setIsMobile(false)
//     }
//     // window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false)
//   }
//   checkScreenWidth()
//   window.addEventListener('resize', checkScreenWidth)
//   return () => window.removeEventListener('resize', checkScreenWidth)
// }, [isMobile])
