import { getRestaurantsByIdOption } from '@/features/store/api/queries/options/options'
import StoreModalUrl from '@/features/store/components/menu/modal/StoreModalUrl'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { ReactNode } from 'react'

export default async function StoreLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ storeId: string }>
}) {
  const storeId = (await params).storeId
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(getRestaurantsByIdOption(Number(storeId)))

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <StoreModalUrl />
        {children}
      </HydrationBoundary>
    </>
  )
}
