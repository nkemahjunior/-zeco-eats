import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import Menu from '../components/menu/Menu'
import StoreHeader from '../components/storeHeader/StoreHeader'
import { getCompleteRestaurantMenuOption } from '../api/queries/options/options'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default function StoreUi({ storeId }: { storeId: string }) {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(getCompleteRestaurantMenuOption(Number(storeId)))

  return (
    <div className="space-y-8">
      <StoreHeader storeId={storeId} />

      <HydrationBoundary state={dehydrate(queryClient)}>
        {' '}
        <div className="mx-sm md:mx-md lg:mx-lg xl:mx-xl 2xl:mx-[14rem]">
          <Menu />
        </div>
      </HydrationBoundary>
    </div>
  )
}
