import CreateCategoryFirstTime from '../components/noMenu/CreateCategoryFirstTime'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { restaurantMenusOptions } from '../api/queries/options/menuOptions'

export default function FirstTimeCategoryUi() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(restaurantMenusOptions)
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateCategoryFirstTime />
      </HydrationBoundary>
    </div>
  )
}
