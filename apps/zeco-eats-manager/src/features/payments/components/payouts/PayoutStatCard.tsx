import { GoArrowDown, GoArrowUp } from 'react-icons/go'
import { PayoutStat } from '../../types/payoutTypes'

// interface fnProps extends PayoutStats {

// }

export default function PayoutStatCard({
  name,
  trend,
  trendChange,
  amount,
}: PayoutStat) {
  return (
    <div className="w-full">
      <span className="text-textTint block">{name}</span>
      <div className="flex items-center gap-x-1 space-x-2">
        <span className="text-xl font-medium">{amount}</span>
        <div
          className={`flex items-center gap-x-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}
        >
          <span>{trend === 'up' ? <GoArrowUp /> : <GoArrowDown />}</span>
          <span>{trendChange}</span>
        </div>
      </div>
    </div>
  )
}
