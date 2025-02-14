import { Shimmer } from '@zeco-eats-lib/utils-client'

export default function MenuTitleSkeleton() {
  return (
    <div className="relative flex w-full items-center space-x-4">
      {/* Title Placeholder */}
      <Shimmer className="h-8 w-48 rounded-md" />

      {/* Edit Button Placeholder */}
      <div className="bg-background rounded-lg p-2">
        <Shimmer className="h-6 w-6 rounded-md" />
      </div>

      {/* Dropdown Button Placeholder */}
      <div className="bg-background rounded-lg p-2">
        <Shimmer className="h-6 w-6 rounded-md" />
      </div>
    </div>
  )
}
