'use client'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import { useState } from 'react'
import { fakeItem, Item } from './CampaignModal'

interface fnProps {
  data: fakeItem
  addToSelectedItem: (arg: Item) => void
}

export default function CampaignModalRow({ data, addToSelectedItem }: fnProps) {
  const [selectedItem, setSelectedItem] = useState(data.at(0))
  return (
    <div className="flex">
      <div className="w-full p-4">
        <div className="w-[90%]">
          {' '}
          <CustomSelect
            inheritWidth
            width="w-full"
            data={data.map((el) => ({
              display: el.item,
              value: el.id.toString(),
            }))}
            onchange={(itemId: string) => {
              const item = data.find((el) => el.id === Number(itemId))
              if (item) {
                setSelectedItem(item)
                addToSelectedItem(item)
              }
            }}
          />
        </div>
      </div>
      <div className="w-full p-4">{selectedItem?.item}</div>
    </div>
  )
}
