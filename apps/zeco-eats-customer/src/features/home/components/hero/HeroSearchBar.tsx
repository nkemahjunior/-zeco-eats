'use client'
import { useRef, useState } from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { MdLocationPin } from 'react-icons/md'
import { useDetectClickOutside } from '@zeco-eats-lib/utils-client'
import Link from 'next/link'
import { useSearchLocation } from '@/shared/hooks/useSearchLocation'

export default function HeroSearchBar() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  useDetectClickOutside(ref, () => setOpen(false), open)

  const {
    userLocation,
    loading,
    addresses,
    handleSelect,
    handleInputChange,
    value,
    setValue,
  } = useSearchLocation(() => setOpen(false))

  return (
    <div ref={ref} className="relative w-full xl:w-[60%] 2xl:xl:w-[63%]">
      <div className="flex h-fit">
        <input
          className="w-full rounded-3xl border-2 border-solid border-backgroundBorder pl-6 focus:outline-none"
          placeholder="Enter location"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value)
            handleInputChange(e.currentTarget.value)
          }}
          onFocus={() => setOpen(true)}
        />

        <Link
          href={`/browse?location=${encodeURIComponent(userLocation?.fullName || '')}`}
          className="-ml-10 block h-fit rounded-full bg-primary p-1"
        >
          <span className="text-secondary xl:hidden">
            <IoIosArrowDroprightCircle size={'48'} />
          </span>
          <span className="hidden px-8 py-2 text-white xl:block">search</span>
        </Link>
      </div>

      {open && value.length > 0 && (
        <ul className="absolute top-14 z-[11] h-[10rem] w-full space-y-2 overflow-y-auto rounded-lg bg-white py-4 shadow-md shadow-black/30">
          {loading ? (
            <li className="px-4 py-2">Loading Addresses...</li>
          ) : addresses && addresses.length > 0 ? (
            addresses.map((el, i) => (
              <li
                key={i}
                onClick={() => handleSelect(el)}
                className="cursor-pointer items-start px-4 py-2 hover:bg-backgroundShade2"
              >
                <Link
                  href={`/browse?location=${encodeURIComponent(
                    el.display_name || ''
                  )}`}
                  className="inline-flex items-center gap-x-2"
                >
                  <MdLocationPin size={20} />
                  <div>
                    <span className="font-semibold">
                      {el.address?.city ||
                        el.address?.town ||
                        el.address?.village ||
                        el.name ||
                        'Unknown'}
                    </span>
                    <p className="text-sm text-gray-600">{el.display_name}</p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2">No results found</li>
          )}
        </ul>
      )}
    </div>
  )
}
