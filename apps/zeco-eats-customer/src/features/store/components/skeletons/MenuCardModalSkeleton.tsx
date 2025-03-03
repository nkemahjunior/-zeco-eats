import { Shimmer } from '@zeco-eats-lib/utils-client'
import { DishInfoSkeleton } from './DishInfoSkeleton'

export function MenuCardModalSkeleton({ gapx = 'gap-x-8' }) {
  return (
    <div className="flex h-fit w-full justify-center bg-[#f7f7f7] lg:mt-2 lg:bg-white xl:mt-auto">
      <div className="w-full space-y-4 lg:h-[60rem] lg:w-[55rem] xl:h-[32rem] xl:w-[65rem]">
        <div className="hidden h-12 w-full lg:block">
          <Shimmer className="h-full w-full rounded-md" />
        </div>

        <div
          className={`grid h-full w-full grid-cols-1 gap-x-4 gap-y-4 lg:grid-cols-[45fr,55fr] xl:gap-x-8`}
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
