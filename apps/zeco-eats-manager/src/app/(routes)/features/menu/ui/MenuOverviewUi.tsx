import Line from '@/shared/components/Line'
import MenuHours from '../components/overview/MenuHours'
import MenuTitle from '../components/overview/MenuTitle'
import MenuCategoryAndItems from '../components/overview/MenuCategoryAndItems'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import {
  restaurantCategoriesOptions,
  restaurantMenuCategoriesItemsOptions,
  restaurantMenusOptions,
} from '../api/queries/options/menuOptions'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'
import MenuTitleSkeleton from '../components/Skeletons/MenuTitleSkeleton'
import MenuHoursSkeleton from '../components/Skeletons/MenuHoursSkeleton'

export default function MenuOverviewUi({ menuId }: { menuId: string }) {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(
    restaurantMenuCategoriesItemsOptions(Number(menuId))
  )
  queryClient.prefetchQuery(restaurantCategoriesOptions)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y-8">
        <Suspense fallback={<MenuTitleSkeleton />}>
          <MenuTitle />
        </Suspense>
        <Suspense fallback={<MenuHoursSkeleton />}>
          <MenuHours />
        </Suspense>
        <Line />
        <MenuCategoryAndItems />
      </div>
    </HydrationBoundary>
  )
}
