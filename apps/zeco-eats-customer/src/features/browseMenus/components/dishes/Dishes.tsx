'use client'

import Link from 'next/link'
import { useBrowseMenus } from '../../context/BrowseMenusContext'
import DishCardSkeleton from '../skeletons/DishCardSkeleton'
import DishCard from '../../../../shared/components/DishCard'

export default function Dishes() {
  const { restaurants, totalCount, page, isLoading, isFetching, setNextPage } =
    useBrowseMenus()

  const allDataLoaded = restaurants.length >= totalCount

  if (isLoading && page === 1) {
    return (
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <DishCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-8">
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
        {restaurants.map((restaurant, i) => (
          <Link href={`/store/${restaurant.id}`} key={i}>
            <DishCard
              name={restaurant.name || ''}
              image={restaurant.image || ''}
              minAvgCookTime={restaurant.min_avg_cook_time || 0}
              maxAvgCookTime={restaurant.max_avg_cook_time || 0}
              rating={restaurant.rating || 4.0}
            />
          </Link>
        ))}

        {isFetching &&
          Array.from({ length: 4 }).map((_, index) => (
            <DishCardSkeleton key={index} />
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
