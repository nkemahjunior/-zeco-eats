import { Shimmer } from '@zeco-eats-lib/utils-client'

export default function StoreSkeleton() {
  return (
    <div className="mx-sm space-y-8 md:mx-md lg:mx-lg xl:mx-xl 2xl:mx-[14rem]">
      <StoreHeaderSkeleton />
      <MapSkeleton />
      <div className="">
        <MenuSkeleton />
      </div>
    </div>
  )
}

function StoreHeaderSkeleton() {
  return (
    <div className="space-y-8">
      <HeaderImageSkeleton />
      <HeaderTextSkeleton />
    </div>
  )
}

function HeaderImageSkeleton() {
  return <Shimmer className="h-[8rem] rounded-lg lg:h-[20rem]" />
}

function HeaderTextSkeleton() {
  return (
    <div className="space-y-4 lg:space-y-8">
      <Shimmer className="h-6 w-3/4" />
      <Shimmer className="h-4 w-1/2" />
      <Shimmer className="h-4 w-1/3" />
    </div>
  )
}

function MapSkeleton() {
  return (
    <div className="grid grid-cols-[70fr,30fr] gap-x-2 rounded-lg">
      <Shimmer className="h-[7rem] lg:h-[10rem]" />
      <Shimmer className="h-[7rem] lg:h-[10rem]" />
    </div>
  )
}

function MenuSkeleton() {
  return (
    <div className="space-y-6">
      <Shimmer className="h-6 w-1/3" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <MenuItemSkeleton key={i} />
          ))}
      </div>
    </div>
  )
}

function MenuItemSkeleton() {
  return (
    <div className="flex h-[10rem] w-full space-x-4 rounded-lg border border-gray-300 p-4">
      <MenuItemTextSkeleton />
      <Shimmer className="h-full w-2/5 rounded-lg" />
    </div>
  )
}

function MenuItemTextSkeleton() {
  return (
    <div className="flex w-3/5 flex-col justify-center space-y-2">
      <Shimmer className="h-6 w-3/4" />
      <Shimmer className="h-4 w-1/2" />
      <Shimmer className="hidden h-4 w-full lg:block" />
    </div>
  )
}
