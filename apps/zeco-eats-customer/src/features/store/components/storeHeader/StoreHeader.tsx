'use client'
import StoreHeaderImage from './StoreHeaderImage'
import StoreTitleAndDesc from './StoreTitleAndDesc'
import StoreLocationAndInfo from './StoreLocationAndInfo'
import {
  getRestaurantCategoriesOption,
  getRestaurantsByIdOption,
} from '../../api/queries/options/options'
import { useSuspenseQuery } from '@tanstack/react-query'

export default function StoreHeader({ storeId }: { storeId: string }) {
  const { data: restaurant } = useSuspenseQuery(
    getRestaurantsByIdOption(Number(storeId))
  )
  const { data: categories } = useSuspenseQuery(
    getRestaurantCategoriesOption(Number(storeId))
  )

  return (
    <div className="space-y-8">
      <div className="-mt-[1.6rem] lg:mx-lg lg:mb-0 xl:mx-xl 2xl:mx-[14rem]">
        <StoreHeaderImage image={restaurant?.image || ''} />
      </div>
      <div className="mx-sm space-y-4 md:mx-md lg:mx-lg lg:space-y-8 xl:mx-xl 2xl:mx-[14rem]">
        <StoreTitleAndDesc restaurant={restaurant!} categories={categories!} />
        <StoreLocationAndInfo location={restaurant?.location || ''} />
        {/* <StoreRatings /> */}
      </div>
    </div>
  )
}
