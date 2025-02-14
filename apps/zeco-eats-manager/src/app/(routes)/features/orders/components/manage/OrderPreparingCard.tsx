import Button from '@/shared/components/button/Button'

export default function OrderPreparingCard() {
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
          <span className="block">Ready in</span>
          <span className="text-textTint block">3 min</span>
        </div>
        <Button
          color="bg-backgroundShade1"
          hoverColor="hover:bg-backgroundShade2"
          py="py-2"
        >
          Ready
        </Button>
      </div>
    </div>
  )
}
