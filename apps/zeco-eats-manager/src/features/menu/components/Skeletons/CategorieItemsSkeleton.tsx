import { Shimmer } from '@zeco-eats-lib/utils-client'

export default function CategoryItemsSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      {/* <div className="space-y-2">
      <Shimmer className="h-6 w-48 rounded-md" />
      <Shimmer className="h-4 w-full max-w-[400px] rounded-md" />
    </div> */}

      {/* Categories Section */}
      <div className="space-y-4 md:mr-[12rem]">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="border-backgroundBorder space-y-4 rounded-xl border-[1px] border-solid p-4 md:p-8"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div className="flex w-full items-center space-x-2 md:space-x-4">
                <Shimmer className="h-6 w-6 rounded-md" />
                <Shimmer className="h-5 w-32 rounded-md" />
              </div>
              <Shimmer className="h-6 w-6 rounded-md" />
            </div>

            <Shimmer className="bg-backgroundBorder h-[1px] w-full" />

            {/* Items List */}
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between space-x-4"
                >
                  <div className="flex items-center space-x-4">
                    <Shimmer className="h-6 w-6 rounded-md" />
                    <Shimmer className="h-12 w-12 rounded-lg" />
                    <Shimmer className="h-5 w-24 rounded-md" />
                  </div>
                  <Shimmer className="h-6 w-12 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
