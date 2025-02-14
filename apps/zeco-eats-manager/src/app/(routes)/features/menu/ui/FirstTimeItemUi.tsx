import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import CreateItemFirstTime from '../components/noMenu/CreateItemFirstTime'
import {
  restaurantMenuCategoriesOPtions,
  restaurantMenusOptions,
} from '../api/queries/options/menuOptions'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default function FirstTimeItemUi() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(restaurantMenuCategoriesOPtions)
  queryClient.prefetchQuery(restaurantMenusOptions)

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CreateItemFirstTime />
      </HydrationBoundary>
    </div>
  )
}
