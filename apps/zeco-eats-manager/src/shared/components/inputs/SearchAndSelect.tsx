'use client'
import { useEffect, useRef, useState } from 'react'
import TextInput from './TextInput'

interface searchData {
  display: string
  id: string
}

interface fnProps {
  id: string
  getSelectedValue: (arg: string) => void
  placeholder?: string
  data: searchData[]
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

  const select = (el: searchData) => {
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
          onChange: (e) => setValue(e.currentTarget.value),
          onFocus: () => setOpen(true),
        }}
        id={id}
        className=""
        placeHolder={placeholder}
      />

      <ul
        className={`absolute ${top} z-[11] ${height} ${width} ${className} space-y-2 overflow-y-auto ${rounded} bg-white p-4 ${shadow} ${open ? 'block' : 'hidden'} `}
      >
        {data.map((el, i) => (
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
