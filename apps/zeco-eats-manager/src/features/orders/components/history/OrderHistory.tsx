'use client'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import { useState } from 'react'
import OrderHistoryCard from './OrderHistoryCard'

const fakeOrderHistory = Array.from({ length: 5 })

export default function OrderHistory() {
  const [orderFilter, setOrderFilter] = useState('All orders')

  return (
    <div className="w-full space-y-8">
      <div className="w-full items-center space-y-4 xl:flex xl:w-[65%] xl:gap-x-8 xl:space-y-0">
        <div className="flex w-full items-center gap-x-4">
          <CustomSelect
            inheritWidth
            width="w-full"
            data={[
              { display: 'All orders', value: 'allOders' },
              { display: 'Today', value: 'today' },
            ]}
            onchange={(arg: string) => setOrderFilter(arg)}
            height="h-[5rem]"
          />
          <CustomSelect
            inheritWidth
            width="w-full"
            data={[
              { display: 'Delivered', value: 'delivered' },
              { display: 'Failed Delivery', value: 'fDelivery' },
              { display: 'Delivery in progress', value: 'dip' },
            ]}
            onchange={(arg: string) => setOrderFilter(arg)} //correct this
            height="h-[7rem]"
          />
        </div>
        <TextInputWithIcon id="searchOrderHistory" />
      </div>

      <div className="w-full space-y-4 xl:w-[65%]">
        {fakeOrderHistory.map((el, i) => (
          <OrderHistoryCard key={i} />
        ))}
      </div>
    </div>
  )
}
