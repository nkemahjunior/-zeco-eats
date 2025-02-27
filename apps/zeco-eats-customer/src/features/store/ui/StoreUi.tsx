import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import Menu from '../components/menu/Menu'
import StoreHeader from '../components/storeHeader/StoreHeader'
import {
  getCompleteRestaurantMenuOption,
  getRestaurantCategoriesOption,
} from '../api/queries/options/options'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import StoreSkeleton from '../components/skeletons/StoreSkeleton'

export default function StoreUi({ storeId }: { storeId: string }) {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(getCompleteRestaurantMenuOption(Number(storeId)))
  queryClient.prefetchQuery(getRestaurantCategoriesOption(Number(storeId)))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<StoreSkeleton />}>
        <div className="space-y-8">
          <StoreHeader storeId={storeId} />{' '}
          <div className="mx-sm md:mx-md lg:mx-lg xl:mx-xl 2xl:mx-[14rem]">
            <Menu />
          </div>
        </div>
      </Suspense>
    </HydrationBoundary>
  )
}
