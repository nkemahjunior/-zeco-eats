'use client'
import { Tables } from '@zeco-eats-lib/utils-client'
import StoreLocationItem from './StoreLocationItem'
import StoreMap from './StoreMap'
import StoreOpeningHours from './StoreOpeningHours'

export default function StoreLocationAndInfo({
  restaurant,
}: {
  restaurant: Tables<'restaurant'>
}) {
  return (
    <div className="hidden w-full grid-cols-[70fr,30fr] rounded-lg border-[1px] border-solid border-backgroundBorder lg:grid">
      <StoreMap
        restaurantLat={restaurant.lat || 0}
        restaurantLon={restaurant.long || 0}
      />

      <div>
        <StoreLocationItem location={restaurant.location || ''} />
        <StoreOpeningHours />
      </div>
    </div>
  )
}
