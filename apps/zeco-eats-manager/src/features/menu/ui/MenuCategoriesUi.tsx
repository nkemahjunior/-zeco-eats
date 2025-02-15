import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import Categories from '../components/categories/Categories'
import { restaurantItemsOptions } from '../api/queries/options/menuOptions'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Suspense } from 'react'

export default function MenuCategoriesUi() {
  const queryCleint = getQueryClient()
  queryCleint.prefetchQuery(restaurantItemsOptions)

  return (
    <HydrationBoundary state={dehydrate(queryCleint)}>
      <Suspense fallback={<div> loading categories</div>}>
        <Categories />
      </Suspense>
    </HydrationBoundary>
  )
}
