'use client'

import { useState } from 'react'
import { DateRange, DayPicker, getDefaultClassNames } from 'react-day-picker'

export default function SelectPayoutRange() {
  const [selected, setSelected] = useState<DateRange | undefined>()
  const handleSelect = (newSelected: any) => {
    // Update the selected dates

    setSelected(newSelected)
    console.log('selected dates', newSelected)
  }
  const defaultClassNames = getDefaultClassNames()
  return (
    <DayPicker
      mode="range"
      min={7}
      max={30}
      selected={selected}
      onSelect={handleSelect}
      classNames={{
        selected: `bg-secondary text-white rounded-full  `,
        range_start: `bg-secondary relative before:content-[""] before:absolute before:top-0 before:right-0 before:w-5 before:h-full before:bg-[#b91c1c] before:z-[1] z-[10] boder-2 border-solid border-green-600 `,
        day_button: 'boder-2 border-solid border-blue-600 ',

        range_end: `bg-secondary relative before:content-[""]  before:absolute before:top-0 before:left-0 before:w-5 before:h-full before:bg-[#b91c1c]  before:z-[-1] z-[10]`,

        chevron: 'fill-secondary',
        range_middle: `bg-[#e6e6e5] rounded-none  text-[#000000]`,
        root: `${defaultClassNames.root}`,
      }}
    />
  )
}
