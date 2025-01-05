import ImageContainer from '@/shared/components/image/ImageContainer'

export default function OrderReadyCard() {
  return (
    <div className="border-backgroundBorder flex cursor-pointer items-center justify-between rounded-lg border border-solid bg-stone-50 p-4">
      <div className="flex flex-col justify-center">
        <span className="block">Driver&apos;s Name</span>
        <div className="text-textTint space-x-1">
          <span className="inline-block">00012</span>
          <span className="inline-block">&middot;</span>
          <span className="inline-block">2 items</span>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <div>
          <span className="text-primary block">Arriving now</span>
          <span className="text-textTint block">Handoff order</span>
        </div>
        <ImageContainer
          imageAlt="picture of driver name"
          src="/devImages/pic.avif"
          roundedCorners="rounded-full"
          height="h-10"
          width="w-10"
        />
      </div>
    </div>
  )
}
