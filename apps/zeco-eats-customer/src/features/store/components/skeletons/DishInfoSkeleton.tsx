import { Shimmer } from '@zeco-eats-lib/utils-client'

export function DishInfoSkeleton() {
  return (
    <div className="h-[12rem] w-full space-y-6 px-4 lg:h-[35rem]">
      {/* Price */}
      <div className="h-4 w-[30%]">
        <Shimmer className="h-full w-full rounded-md" />
      </div>
      {/* name */}
      <div className="h-4 w-[30%]">
        <Shimmer className="h-full w-full rounded-md" />
      </div>

      {/* Description*/}
      <div className="space-y-2">
        <div className="h-6 w-[80%]">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
        <div className="h-6 w-[80%]">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
        <div className="h-6 w-[80%]">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
      </div>

      {/* instructions */}
      <div className="space-y-2">
        <div className="h-4 w-[30%]">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
        <div className="h-[8rem] w-full">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
      </div>

      {/* Customizations */}
      {/* <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-12 w-full">
            <Shimmer className="h-full w-full rounded-md" />
          </div>
        ))}
      </div> */}

      {/* Buttons */}
      <div className="space-y-4">
        <div className="h-12 w-full">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
        <div className="h-12 w-full">
          <Shimmer className="h-full w-full rounded-md" />
        </div>
      </div>
    </div>
  )
}
