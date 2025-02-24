import { Shimmer } from '@zeco-eats-lib/utils-client'

export default function PopularRestaurantsCardLoading() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 2xl:grid-cols-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`mx-auto h-fit w-full overflow-hidden rounded-lg border-2 border-solid border-backgroundBorder ${
            index <= 1
              ? 'block'
              : index <= 3
                ? 'hidden md:block'
                : 'hidden 2xl:block'
          }`}
        >
          <div className="relative h-[12rem] w-full md:h-[13rem] lg:h-[20rem] xl:h-[18rem] 2xl:h-[14rem]">
            <Shimmer angle="90deg" className="h-full w-full rounded-lg" />
          </div>
          <div className="flex h-[4rem] items-center bg-primary">
            <div className="ml-2 w-1/2 2xl:ml-4">
              <Shimmer angle="90deg" className="h-4 rounded-md" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
