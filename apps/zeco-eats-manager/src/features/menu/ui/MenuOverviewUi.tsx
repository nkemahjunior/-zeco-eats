import Line from '@/shared/components/Line'
import MenuHours from '../components/overview/MenuHours'
import MenuTitle from '../components/overview/MenuTitle'
import MenuCategoryAndItems from '../components/overview/MenuCategoryAndItems'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { restaurantMenusOptions } from '../api/queries/options/menuOptions'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default function MenuOverviewUi() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(restaurantMenusOptions)
  return (
    <div className="space-y-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {' '}
        <MenuTitle />
        <MenuHours />
        <Line />
        <MenuCategoryAndItems />
      </HydrationBoundary>
    </div>
  )
}
