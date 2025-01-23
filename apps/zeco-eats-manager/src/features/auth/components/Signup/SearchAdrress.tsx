'use client'
import TextInput from '@/shared/components/inputs/TextInput'
import { useRef, useState } from 'react'
import { useDetectClickOutside, useDebounce } from '@zeco-eats-lib/utils-client'

interface fnProps {
  id: string
  searchAddress: (arg: string) => Promise<any>
  placeholder?: string
}

export default function SearchAddress({ id, searchAddress }: fnProps) {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const [addresses, setAddresses] = useState<any[]>()
  const [loading, setLoading] = useState(false)

  useDetectClickOutside(ref, () => setOpen(false), open)

  const handleInputChange = useDebounce(async (val) => {
    setLoading(true)
    const data = await searchAddress(val)
    setAddresses(data)
    setLoading(false)
  }, 1000)

  const select = (el: any) => {
    setValue(el.name)
    setOpen(false)
  }

  return (
    <div className="relative w-full" ref={ref}>
      <TextInput
        height="h-12"
        attributes={{ value: value }}
        events={{
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
            handleInputChange(e.currentTarget.value)
          },
          onFocus: () => setOpen(true),
        }}
        id={id}
        className=""
        placeHolder={'Search address...'}
      />

      <ul
        className={`absolute top-14 z-[11] h-[10rem] w-full space-y-2 overflow-y-auto rounded-lg bg-white py-4 shadow-md shadow-black/30 ${open ? 'block' : 'hidden'} `}
      >
        {loading ? (
          <li>Loading Addresses...</li>
        ) : (
          addresses?.map((el, i) => (
            <li
              key={i}
              onClick={() => select(el)}
              className="hover:bg-backgroundShade2 cursor-pointer px-4 py-2"
            >
              {el.name}
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
