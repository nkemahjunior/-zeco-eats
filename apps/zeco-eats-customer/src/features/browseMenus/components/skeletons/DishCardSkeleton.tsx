import { Shimmer } from '@zeco-eats-lib/utils-client'

export default function DishCardSkeleton() {
  return (
    <div className="w-full space-y-4">
      {/* Image Placeholder */}
      <div className="relative h-[8rem] w-full overflow-hidden rounded-lg">
        <Shimmer className="absolute left-0 top-0 h-full w-full rounded-lg" />
      </div>

      {/* Text & Rating Placeholder */}
      <div className="flex w-full items-center justify-between">
        <div className="space-y-2">
          <Shimmer className="h-4 w-32 rounded-md" />
          <Shimmer className="h-3 w-20 rounded-md" />
        </div>

        <div className="h-6 w-6 rounded-full bg-backgroundShade2">
          <Shimmer className="h-full w-full rounded-full" />
        </div>
      </div>
    </div>
  )
}
