'use client'
import Heading2 from '@/shared/components/text/Heading2'
import { PayoutInfos, PayoutStat } from '../../types/payoutTypes'
import PayoutStatCard from './PayoutStatCard'
import PayoutBreakdownInfo from './PayoutBreakdownInfo'
import { useContext } from 'react'
import 'react-day-picker/style.css'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import SelectPayoutRange from './SelectPayoutRange'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'

import { useState } from 'react'
import { DateRange, DayPicker, getDefaultClassNames } from 'react-day-picker'
import DailyPayoutCard from './DailyPayoutCard'

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
    name: 'Marketing',
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
  const [selected, setSelected] = useState<DateRange | undefined>()
  const handleSelect = (newSelected: any) => {
    // Update the selected dates

    setSelected(newSelected)
    console.log('selected dates', newSelected)
  }
  const defaultClassNames = getDefaultClassNames()

  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes
  const choseDate = () => {
    openModal(<SelectPayoutRange />, {
      ...modalProps,
      height: 'h-fit',
      width: 'w-[94%] md:w-fit',
      className: ' rounded-lg overflow-hidden  p-8',
    })
  }
  return (
    <div className="space-y-12">
      {/* <DayPicker
                    mode="range"
                    min={7}
                    max={30}
                    selected={selected}
                    onSelect={handleSelect}
                    classNames={{
                      selected: `bg-secondary text-white rounded-full `,
                      range_start: `bg-secondary relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-[5rem] before:h-full before:bg-[#b91c1c] before:z-[-1] `,
          
                      range_end: `bg-secondary relative before:content-[""] before:absolute before:top-0 before:left-0 before:w-5 before:h-full before:bg-[#b91c1c]  before:z-[-1] `,
          
                      chevron: 'fill-secondary',
                      range_middle: `bg-[#e6e6e5] rounded-none  text-[#000000]`,
                      root: `${defaultClassNames.root}`,
                    }}
                  /> */}
      <div>
        <ButtonWithIcon
          width="w-fit"
          className="p-4"
          events={{ onClick: choseDate }}
        >
          <div className="flex items-center gap-x-1">
            <span>August 1</span>
            <span>-</span>
            <span>August 27</span>
          </div>
          <MdKeyboardArrowDown />
        </ButtonWithIcon>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
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

      <div className="space-y-8">
        <Heading2 text="Daily payouts" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 xl:gap-x-12 2xl:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <DailyPayoutCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
