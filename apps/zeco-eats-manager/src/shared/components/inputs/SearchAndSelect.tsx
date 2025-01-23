'use client'
import { useEffect, useRef, useState } from 'react'
import TextInput from './TextInput'
import { useDetectClickOutside } from '@zeco-eats-lib/utils-client'

interface SearchData {
  display: string
  styleDisplay?: React.ReactNode
  data: any
}

interface fnProps {
  id: string
  getSelectedValue: (arg: any) => void
  filterCallback: (filter: string) => void
  placeholder?: string
  data: SearchData[]
  top?: string
  height?: string
  width?: string
  shadow?: string
  rounded?: string
  className?: string
}

export default function SearchAndSelect({
  id,
  getSelectedValue,
  filterCallback,
  data,
  placeholder,
  top = 'top-14',
  height = 'h-[10rem]',
  width = 'w-full',
  shadow = 'shadow-md shadow-black/30',
  rounded = 'rounded-lg',
  className = '',
}: fnProps) {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  //const [filteredData, setFilteredData] = useState<SearchData[]>(data)
  const ref = useRef<HTMLDivElement | null>(null)

  useDetectClickOutside(ref, () => setOpen(false), open)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    filterCallback(e.currentTarget.value)
  }

  const select = (el: SearchData) => {
    setValue(el.display)
    getSelectedValue(el)
    setOpen(false)
  }

  return (
    <div className="relative w-full" ref={ref}>
      <TextInput
        height="h-12"
        attributes={{ value: value }}
        events={{
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange(e),
          onFocus: () => setOpen(true),
        }}
        id={id}
        className=""
        placeHolder={placeholder}
      />

      <ul
        className={`absolute ${top} z-[11] ${height} ${width} ${className} space-y-2 overflow-y-auto ${rounded} bg-white py-4 ${shadow} ${open ? 'block' : 'hidden'} `}
      >
        {data.map((el, i) => (
          <li
            key={i}
            onClick={() => select(el)}
            className="hover:bg-backgroundShade2 cursor-pointer px-4 py-2"
          >
            {el.styleDisplay ? el.styleDisplay : el.display}
          </li>
        ))}
      </ul>
    </div>
  )
}
