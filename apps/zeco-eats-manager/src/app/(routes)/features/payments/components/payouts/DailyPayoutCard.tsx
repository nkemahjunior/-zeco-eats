interface fnProps {
  live: boolean
  date: string
  sales: string
  salesAmt: string
  totalPayout: string
  totalPayoutAmt: string
}

export default function DailyPayoutCard() {
  return (
    <div className="border-backgroundBorder w-full space-y-3 rounded-lg border border-solid p-4">
      <div className="flex items-center justify-between">
        <span>Today</span>
        <div className="text-primary flex items-center gap-x-1">
          <span>Live</span>
          <span className="bg-primary block h-2 w-2 rounded-full"></span>
        </div>
      </div>

      <div>
        <span className="text-textTint block">Sales</span>
        <span className="block">£50</span>
      </div>

      <div>
        <span className="text-textTint block">TotalPayout</span>
        <span className="block">£20</span>
      </div>
    </div>
  )
}
