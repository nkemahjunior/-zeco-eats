'use client'
import { cuisines, useDetectClickOutside } from '@zeco-eats-lib/utils-client'
import { useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'
import { IoSearchOutline } from 'react-icons/io5'

export default function SelectCuisines() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const [selectedItems, setSelectedItems] = useState<string[] | []>([])

  useDetectClickOutside(ref, () => setOpen(false), open)

  const addToSelectedItems = (el: string) => {
    if (selectedItems.length > 2) return // max selected should be 3
    setSelectedItems((p) => {
      const s = [...p, el]

      if (s.length > 2) {
        setOpen(false)
      }
      return [...p, el]
    })
    //setOpen(false)
  }

  const removeItem = (el: string) => {
    setSelectedItems((p) => p.filter((cuisine) => cuisine != el))
  }

  return (
    <div className="relative" ref={ref}>
      <div
        className="bg-background flex h-[5rem] w-full items-center gap-x-2 rounded-lg border border-solid border-transparent p-4 focus:border-black focus:bg-white"
        onFocus={() => setOpen(true)}
        tabIndex={0}
      >
        <span>
          <IoSearchOutline size={20} />
        </span>
        <div className="flex flex-wrap gap-x-2">
          {selectedItems.map((el, i) => (
            <div
              key={i}
              className="border-backgroundBorder flex items-center gap-x-1 rounded-md border border-solid p-2"
            >
              <span>{el}</span>
              <span className="cursor-pointer" onClick={() => removeItem(el)}>
                <HiX />
              </span>
            </div>
          ))}
        </div>
      </div>
      {open && (
        <ul className="absolute top-[5.5rem] h-fit max-h-[15rem] w-[18rem] overflow-y-auto rounded-lg bg-white py-4 shadow-md shadow-black/30">
          {cuisines.map((el, i) => (
            <li
              key={i}
              className="hover:bg-background cursor-pointer px-4 py-2"
              onClick={() => addToSelectedItems(el)}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
