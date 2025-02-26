'use client'
import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import ModalOverlayR from '../modal/ModalOverlayR'
import TextInputWithIcon from '../input/TextInputWithIcon'
import { MdLocationPin } from 'react-icons/md'
import { clipText } from '@/shared/utils/clipText'
import { useSearchLocation } from '@/shared/hooks/useSearchLocation'

interface UserLocationProps {
  iconSize: number
}

export default function UserLocation({ iconSize }: UserLocationProps) {
  const [openLocationModal, setOpenLocationModal] = useState(false)

  const { userLocation, handleInputChange, loading, addresses, handleSelect } =
    useSearchLocation(() => setOpenLocationModal(false))

  return (
    <div>
      <div className="flex items-baseline space-x-4 font-medium">
        <span>
          <FaLocationDot size={iconSize} />
        </span>
        <p className="hidden 2xl:block">
          {clipText(userLocation?.fullName || 'Your location', 40)}
        </p>
        <p className="2xl:hidden">
          {clipText(userLocation?.name || 'Your location', 25)}
        </p>
        <button
          className="font-semibold text-primary underline"
          onClick={() => setOpenLocationModal(true)}
        >
          Change Location
        </button>
      </div>

      {openLocationModal && (
        <ModalOverlayR open={openLocationModal} setOpen={setOpenLocationModal}>
          <div className="mt-24 w-[25rem] space-y-4">
            <TextInputWithIcon
              icon={<MdLocationPin size={20} />}
              placeHolder="Search location"
              id="changeLocationModal"
              events={{
                onFocus: () => setOpenLocationModal(true),
                onChange: (e) => handleInputChange(e.currentTarget.value),
              }}
            />

            {openLocationModal && (
              <ul className="max-h-[25rem] w-full space-y-2 overflow-y-auto rounded-lg bg-white py-4">
                {loading ? (
                  <li className="px-4 py-2">Loading Addresses...</li>
                ) : addresses && addresses.length > 0 ? (
                  addresses.map((el, i) => (
                    <li
                      key={i}
                      onClick={() => handleSelect(el)}
                      className="flex cursor-pointer items-center gap-x-2 px-4 py-2 hover:bg-backgroundShade2"
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
                        <p className="text-sm text-gray-600">
                          {el.display_name}
                        </p>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2">No results found</li>
                )}
              </ul>
            )}
          </div>
        </ModalOverlayR>
      )}
    </div>
  )
}
