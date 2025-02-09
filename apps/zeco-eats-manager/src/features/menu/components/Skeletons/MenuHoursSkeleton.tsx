import { Shimmer } from '@zeco-eats-lib/utils-client'

export default function MenuHoursSkeleton() {
  return (
    <div>
      {/* Menu Hours Title Placeholder */}
      <Shimmer className="mb-2 h-6 w-24 rounded-md" />

      {/* Time and Days Placeholder */}
      <div className="flex items-center space-x-2">
        <Shimmer className="h-5 w-32 rounded-md" />
        <Shimmer className="h-5 w-24 rounded-md" />
      </div>
    </div>
  )
}
