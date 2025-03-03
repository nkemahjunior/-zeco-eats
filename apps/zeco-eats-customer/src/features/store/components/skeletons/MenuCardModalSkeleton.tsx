import { Shimmer } from '@zeco-eats-lib/utils-client'
import { DishInfoSkeleton } from './DishInfoSkeleton'

export function MenuCardModalSkeleton({ gapx = 'gap-x-8' }) {
  return (
    <div className="flex h-fit w-full justify-center bg-[#f7f7f7] lg:bg-white">
      <div className="w-full space-y-4 lg:min-h-[32rem] lg:w-[65rem]">
        <div className="hidden h-12 w-full lg:block">
          <Shimmer className="h-full w-full rounded-md" />
        </div>

        <div
          className={`grid h-full w-full grid-cols-1 gap-y-4 lg:grid-cols-[45fr,55fr] ${gapx}`}
        >
          {/* Image */}
          <div className="w-full">
            <Shimmer className="h-[12rem] w-full rounded-md lg:h-[35rem]" />
          </div>

          {/* Dish Info */}
          <div className="w-full">
            <DishInfoSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}
