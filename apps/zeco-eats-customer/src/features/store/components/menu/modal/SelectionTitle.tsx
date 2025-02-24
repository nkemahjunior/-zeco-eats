'use client'
import CardTitle from '@/shared/components/text/CardTitle'

export default function SelectionTitle({
  title,
  status,
  chooseAmt,
}: {
  title: string
  status: string
  chooseAmt: number
  min: number
  parentCustomisationId: number
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <CardTitle text={`${title}`} className="font-semibold" />
        {/* <SelectionStatus
          status={status}
          color={customisationQtyError ? 'bg-red-200' : 'bg-background'}
        /> */}
      </div>
      <p className="bgre text-storeTextColorTint">
        Choose up to {chooseAmt} option(s)
      </p>
    </div>
  )
}
