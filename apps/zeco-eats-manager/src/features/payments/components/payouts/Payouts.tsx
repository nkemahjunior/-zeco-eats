import Heading2 from '@/shared/components/text/Heading2'
import { PayoutInfos, PayoutStat } from '../../types/payoutTypes'
import PayoutStatCard from './PayoutStatCard'
import PayoutBreakdownInfo from './PayoutBreakdownInfo'

const data: PayoutInfos = [
  {
    infoName: ' Earnings',
    totalPrice: '£200',
    subInfo: [
      {
        infoName: 'Ads',
        totalPrice: '+£120',
        subInfo: [],
      },
      {
        infoName: ' Offers',
        totalPrice: '+£80',
        subInfo: [],
      },
    ],
  },
  {
    infoName: 'Marketing',
    totalPrice: '-£50',
    subInfo: [
      {
        infoName: ' Ad spends',
        totalPrice: '-£30',
        subInfo: [],
      },
      {
        infoName: 'Offer spends',
        totalPrice: '-£20',
        subInfo: [],
      },
    ],
  },
  {
    infoName: ' main info',
    totalPrice: '£200',
    subInfo: [
      {
        infoName: ' main info 2',
        totalPrice: '£90',
        subInfo: [
          {
            infoName: ' main info 3',
            totalPrice: '£10',
            subInfo: [],
          },
        ],
      },
    ],
  },
  {
    infoName: ' main info',
    totalPrice: '£200',
    subInfo: [
      {
        infoName: ' main info 2',
        totalPrice: '£90',
        subInfo: [
          {
            infoName: ' main info 3',
            totalPrice: '£10',
            subInfo: [],
          },
        ],
      },
    ],
  },
]

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
    <div className="space-y-12">
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
      <div className="space-y-8">
        <Heading2 text="Pay Breakdown" />
        <div className="border-backgroundBorder rounded-lg border border-solid p-6">
          <div>
            {data.map((el, i) => (
              <PayoutBreakdownInfo key={i} info={[el]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
