'use client'
import ImageContainer from '@/shared/components/image/ImageContainer'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import { useState } from 'react'
import OrderHistoryCard from './OrderHistoryCard'

const fakeOrderHistory = Array.from({ length: 5 })

export default function OrderHistory() {
  const [orderFilter, setOrderFilter] = useState('All orders')

  return (
    <div className="w-full space-y-8">
      <div className="flex w-[65%] items-center gap-x-8">
        <CustomSelect
          data={['All orders', 'Today']}
          onchange={(arg: string) => setOrderFilter(arg)}
          height="h-[5rem]"
        />
        <CustomSelect
          data={['Delivered', 'Failed Delivery', 'Delivery in progress']}
          onchange={(arg: string) => setOrderFilter(arg)} //correct this
          height="h-[7rem]"
        />
        <TextInputWithIcon id="searchOrderHistory" />
      </div>

      <div className="w-[65%] space-y-4">
        {fakeOrderHistory.map((el, i) => (
          <OrderHistoryCard key={i} />
        ))}
      </div>
    </div>
  )
}
