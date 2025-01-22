'use client'
import { useEffect, useRef, useState } from 'react'
import TextInput from './TextInput'

interface SearchData {
  display: string
  id: string
}

interface fnProps {
  id: string
  getSelectedValue: (arg: string) => void
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
  const [filteredData, setFilteredData] = useState<SearchData[]>(data)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function detectClickOutside(e: MouseEvent) {
      if (ref.current && open && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', detectClickOutside)

    return () => {
      document.removeEventListener('mousedown', detectClickOutside)
    }
  }, [open, ref])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
    const filtered = data.filter((item) =>
      item.display.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    )
    setFilteredData(filtered)
  }

  const select = (el: SearchData) => {
    setValue(el.display)
    getSelectedValue(el.id)
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
        className={`absolute ${top} z-[11] ${height} ${width} ${className} space-y-2 overflow-y-auto ${rounded} bg-white p-4 ${shadow} ${open ? 'block' : 'hidden'} `}
      >
        {filteredData.map((el, i) => (
          <li
            key={i}
            onClick={() => select(el)}
            className="hover:bg-backgroundShade2 cursor-pointer px-2 py-2"
          >
            {el.display}
          </li>
        ))}
      </ul>
    </div>
  )
}
