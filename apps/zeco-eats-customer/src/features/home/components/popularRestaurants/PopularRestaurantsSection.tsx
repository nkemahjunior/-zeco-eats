import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import Carousel from '@/shared/components/carousel/Carousel'
import Heading from '@/shared/components/text/Heading'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import PopularRestaurantLargeScreen from './PopularRestaurantsLargeScreen'
import { popularRestaurantsOptions } from '../../api/options/options'
import { Suspense } from 'react'
import PopularRestaurantsCardLoading from '../skeletons/PopularRestaurantsCardLoading'

export default function PopularRestaurantsSection() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(popularRestaurantsOptions)

  return (
    <section className="mx-sm mt-Ysm md:mx-md lg:mx-lg lg:mt-Ylg xl:mx-xl 2xl:mx-xxl 2xl:mt-YXl">
      <div className="mb-Ysm lg:mb-Ylg 2xl:mb-YXl">
        <Heading text="ZecoEats Popular Restaurants" />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<PopularRestaurantsCardLoading />}>
          {' '}
          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <Carousel />
          </div>
          {/* Desktop Grid */}
          <div className="hidden md:block">
            <PopularRestaurantLargeScreen />
          </div>
        </Suspense>
      </HydrationBoundary>
    </section>
  )
}
