'use client'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import { useState } from 'react'

export default function OrderHistory() {
  const [orderFilter, setOrderFilter] = useState('All orders')

  return (
    <div>
      <div className="flex w-full items-center gap-x-8">
        <CustomSelect
          data={['All orders', 'Today']}
          onchange={(arg: string) => setOrderFilter(arg)}
        />
        <TextInputWithIcon id="searchOrderHistory" width="w-[20%]" />
      </div>
    </div>
  )
}
