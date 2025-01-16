'use client'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading2 from '@/shared/components/text/Heading2'
import { useState } from 'react'
import CampaignModalRow from './CampaignModalRow'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { BiPlus } from 'react-icons/bi'

export type Item = {
  id: number
  item: string
  price: string
}

export type fakeItem = Item[]

export default function CampaignModal() {
  const data = [
    { id: 1, item: 'item 1', price: '£23' },
    { id: 2, item: 'item 2', price: '£15' },
    { id: 3, item: 'item 3', price: '£12' },
    { id: 4, item: 'item 4', price: '£30' },
    { id: 5, item: 'item 5', price: '£8' },
    { id: 6, item: 'item 6', price: '£18' },
    { id: 7, item: 'item 7', price: '£22' },
    { id: 8, item: 'item 8', price: '£10' },
  ]

  const [selectedRows, setSelectedRows] = useState([1])
  const [selectedItems, setSelectedItems] = useState<fakeItem | []>([])
  const [filteredData, setFilteredData] = useState(data)

  const addNewRow = () => {
    setSelectedRows((prev) => [...prev, 1])
  }

  const addToSelectedItems = (newItem: Item) => {
    setSelectedItems((p) => [...p, newItem])
    setFilteredData((p) => p.filter((el) => el.id !== newItem.id))
  }

  return (
    <div className="h-full w-full space-y-8 p-8">
      <div className="flex items-center gap-x-12">
        <CloseBtn />
        <div className=" ">
          <Heading2 text="Ad Campaign" />
          <span className="text-textTint block">Select up to 10 items</span>
        </div>
      </div>

      <div className="w-full">
        <div className="flex w-full items-center">
          <span className="border-backgroundBorder block w-full rounded-tl-md border border-solid p-4">
            Item
          </span>
          <span className="border-backgroundBorder block w-full rounded-tr-md border border-solid p-4">
            Price
          </span>
        </div>
        <div className="border-backgroundBorder w-full rounded-b-md border border-solid">
          {selectedRows.map((_, i) => (
            <CampaignModalRow
              key={i}
              data={filteredData}
              addToSelectedItem={addToSelectedItems}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <ButtonWithIcon
          width="w-fit"
          className="p-2"
          color="bg-white"
          hoverColor="hover:bg-white"
          events={{ onClick: addNewRow }}
        >
          <span>
            <BiPlus size={20} />
          </span>
          <span>Add</span>
        </ButtonWithIcon>
        <p>{selectedItems.length + 1} selected</p>
      </div>
    </div>
  )
}
