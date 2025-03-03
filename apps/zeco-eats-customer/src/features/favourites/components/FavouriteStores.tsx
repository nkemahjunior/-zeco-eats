import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { getBookmarkedStoresOption } from '../api/options/options'
import Link from 'next/link'
import DishCard from '@/shared/components/DishCard'

export default async function FavouriteStores() {
  const queryClient = getQueryClient()
  const data = await queryClient.fetchQuery(getBookmarkedStoresOption())

  return (
    <div>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
          {data.map((restaurant, i) => (
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
        </div>
      ) : (
        <div className="-mt-28 flex h-screen flex-col items-center justify-center space-y-8">
          <p> no favourite stores yet!</p>
          <div>
            <Link href="/browse">
              <button className="rounded-lg bg-secondary px-8 py-3 text-white shadow-md transition-colors duration-300 hover:bg-secondaryTint">
                Browse stores
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
