import Heading from '@/shared/components/text/Heading'
import Heading2 from '@/shared/components/text/Heading2'
import SelectCuisines from './SelectCuisines'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { cuisineOptions } from '@/shared/api/queries/options/cuisineOptions'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default function StoreDetails() {
  const queryClient = getQueryClient()
  queryClient.prefetchQuery(cuisineOptions)

  return (
    <div className="w-[40%] space-y-4">
      <Heading text="Enter store details" />
      <div className="border-backgroundBorder rounded-lg border border-solid p-8">
        <div className="space-y-3">
          <Heading2 text=" What kinds of food do you offer at your store?" />
          <div className="space-y-3">
            <p className="text-textTint">Select up to 3</p>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <SelectCuisines />
            </HydrationBoundary>
          </div>
        </div>
      </div>
    </div>
  )
}
