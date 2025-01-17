import Heading2 from '@/shared/components/text/Heading2'
import { PayoutStat } from '../../types/payoutTypes'
import PayoutStatCard from './PayoutStatCard'

const stats: PayoutStat[] = [
  {
    name: 'Total payouts',
    trend: 'up',
    trendChange: '18%',
    amount: '£1255',
  },
  {
    name: 'Orders',
    trend: 'up',
    trendChange: '22%',
    amount: '£123',
  },
  {
    name: 'Customers',
    trend: 'down',
    trendChange: '16%',
    amount: '39',
  },
]
export default function Payouts() {
  return (
    <div className="space-y-8">
      <div className="flex gap-x-4">
        {stats.map((el, i) => (
          <PayoutStatCard
            key={i}
            name={el.name}
            trend={el.trend}
            trendChange={el.trendChange}
            amount={el.amount}
          />
        ))}
      </div>
      <div>
        <Heading2 text="Pay Breakdown" />
        <div></div>
      </div>
    </div>
  )
}
