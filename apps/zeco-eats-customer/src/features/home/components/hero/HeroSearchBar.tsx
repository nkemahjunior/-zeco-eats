// components/HeroSearchBar.tsx
'use client'
import { useRef, useState } from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { MdLocationPin } from 'react-icons/md'
import { useDetectClickOutside, useDebounce } from '@zeco-eats-lib/utils-client'
import { useLocationStore } from '@/stores/globalStore'
import Link from 'next/link'

const fetchLocations = async (query: string) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
    )
    const results = await response.json()
    return results
  } catch (error) {
    console.error('Error fetching locations:', error)
    return []
  }
}

interface HeroSearchBarProps {
  showButton?: boolean // Optional prop to toggle search button
}

export default function HeroSearchBar({
  showButton = true,
}: HeroSearchBarProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)
  const [addresses, setAddresses] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  useDetectClickOutside(ref, () => setOpen(false), open)

  const { setLocation, userLocation } = useLocationStore()

  const handleInputChange = useDebounce(async (val) => {
    setLoading(true)
    const data = await fetchLocations(val)
    setAddresses(data)
    setLoading(false)
  }, 1000)

  const handleSelect = (el: any) => {
    const location = {
      name:
        el.address?.city ||
        el.address?.town ||
        el.address?.village ||
        el.name ||
        'Unknown',
      fullName: el.display_name,
      lat: parseFloat(el.lat),
      lon: parseFloat(el.lon),
    }
    setValue(location.name)
    setLocation(location)
    setOpen(false)
  }

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
        {showButton && (
          <Link
            href={`/browse?location=${encodeURIComponent(userLocation?.fullName || '')}`}
            className="-ml-10 block h-fit rounded-full bg-primary p-1"
          >
            <span className="text-secondary xl:hidden">
              <IoIosArrowDroprightCircle size={'48'} />
            </span>
            <span className="hidden px-8 py-2 text-white xl:block">search</span>
          </Link>
        )}
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

// 'use client'
// import { useRef, useState } from 'react'
// import { IoIosArrowDroprightCircle } from 'react-icons/io'
// import { useDetectClickOutside, useDebounce } from '@zeco-eats-lib/utils-client'
// import { useLocationStore } from '@/stores/globalStore'

// const fetchLocations = async (query: string) => {
//   try {
//     const response = await fetch(
//       `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
//     )
//     const results = await response.json()
//     return results
//   } catch (error) {
//     console.error('Error fetching locations:', error)
//   }
// }

// export default function HeroSearchBar() {

//   const { userLocation, setLocation } = useLocationStore((state) => ({
//     userLocation:state.userLocation,
//     setLocation:state.setLocation,
//   }))

//   const ref = useRef<HTMLDivElement | null>(null)
//   const [open, setOpen] = useState(false)
//   const [addresses, setAddresses] = useState<any[]>()
//   const [loading, setLoading] = useState(false)
//   const [value, setValue] = useState('')
//   useDetectClickOutside(ref, () => setOpen(false), open)

//   const handleInputChange = useDebounce(async (val) => {
//     console.log('fetching');
//     setLoading(true)
//     const data = await fetchLocations(val)
//     console.log(data);
//     setAddresses(data)
//     setLoading(false)
//   }, 1000)

//   const handleSelect = (locationData: any) => {
//     setValue(locationData.display_name)
//     setLocation(locationData.display_name)  //add lon lat
//     setOpen(false);
//   };

//   return (
//     <div ref={ref} className="relative w-full xl:w-[60%] 2xl:xl:w-[63%]">
//       <div className="flex h-fit md:justify-center xl:justify-start">
//         <input
//           className="w-full rounded-3xl border-2 border-solid border-backgroundBorder pl-6 focus:outline-none"
//           placeholder="Enter location"
//           type="text"
//           value={value}
//           onChange={(e) => {
//             setValue(e.currentTarget.value)
//             handleInputChange(e.currentTarget.value)
//           }}
//           onFocus={() => setOpen(true)}
//         />

//         <button className="-ml-10 h-fit rounded-full bg-primary p-1">
//           <span className="text-secondary xl:hidden">
//             <IoIosArrowDroprightCircle size={'48'} />
//           </span>
//           <span className="hidden px-8 py-2 text-white xl:block">search</span>
//         </button>
//       </div>

//       {open && (
//         <ul
//           className={`absolute top-14 z-[11] h-[8rem] w-full space-y-2 overflow-y-auto rounded-lg bg-white py-4 shadow-md shadow-black/30`}
//         >
//           {loading ? (
//             <li>Loading Addresses...</li>
//           ) : (
//             addresses?.map((el, i) => (
//               <li
//                 key={i}
//                 onClick={() => handleSelect(el)}
//                 className="cursor-pointer px-4 py-2 hover:bg-backgroundShade2"
//               >
//                 {el.name}
//               </li>
//             ))
//           )}
//         </ul>
//       )}
//     </div>
//   )
// }
