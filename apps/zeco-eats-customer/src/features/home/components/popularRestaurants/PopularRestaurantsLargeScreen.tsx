'use client'
import Link from 'next/link'
import { popularRestaurantsOptions } from '../../api/options/options'
import PopularRestaurantsCard from './PopularRestaurantsCard'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function PopularRestaurantLargeScreen() {
  const { data: restaurants } = useSuspenseQuery(popularRestaurantsOptions)

  return (
    <div className="grid grid-cols-2 gap-x-1 gap-y-4 md:grid-cols-3 md:gap-x-2 lg:gap-x-6 xl:grid-cols-4 2xl:grid-cols-6 2xl:gap-x-4">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.id} href={`/store/${restaurant.id}`}>
          <PopularRestaurantsCard
            name={restaurant.name || ''}
            image={restaurant.image || ''}
          />
        </Link>
      ))}
    </div>
  )
}
