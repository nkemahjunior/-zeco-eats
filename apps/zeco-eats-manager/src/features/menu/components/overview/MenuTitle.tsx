'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { useSuspenseQuery } from '@tanstack/react-query'
import { restaurantMenusOptions } from '@/features/menu/api/queries/options/menuOptions'
import { RxCaretSort } from 'react-icons/rx'
import { RiPencilFill } from 'react-icons/ri'
import Heading from '@/shared/components/text/Heading'
import Button from '@/shared/components/button/Button'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import MenuTitles from './MenuTitles'

export default function MenuTitle() {
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)
  const { modalProps, openModal } = useContext(
    ModalContext
  ) as modalContextTypes
  const [isEditing, setIsEditing] = useState(false)
  const [headingText, setHeadingText] = useState('San Siro Menu')

  const openMenus = () => {
    openModal(<MenuTitles menus={menus} />, {
      ...modalProps,

      className: ' rounded-lg pb-4 ',
      height: ' max-h-[20rem]  min-h-[5rem] ',
      width: 'w-full md:w-[60%] xl:w-[40%] 2xl:w-[20%]',
    })
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setHeadingText(e.target.value)

  const handleBlur = () => setIsEditing(false)

  // const updateMenuName = async () => {

  // }

  return (
    <div className="relative flex w-full items-center space-x-4">
      {isEditing ? (
        <input
          type="text"
          value={headingText}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="bg-background w-[60%] rounded-lg text-xl font-bold lg:text-2xl xl:w-[20%]"
          autoFocus
        />
      ) : (
        <div className="w-48">
          <Heading
            text={headingText}
            className="border-2 border-solid border-transparent"
          />
        </div>
      )}

      {isEditing ? (
        <button className="bg-background rounded-lg px-4 py-2">Save</button>
      ) : (
        <button
          onClick={handleEditClick}
          className="bg-background rounded-lg p-2"
        >
          <RiPencilFill size={20} />
        </button>
      )}

      {/* Dropdown Toggle Button */}
      <Button
        px="px-2"
        py="py-2"
        events={{
          onClick: openMenus,
        }}
        disable={isEditing} // Disable button when editing
        className={`${isEditing ? 'cursor-not-allowed opacity-50' : ''}`} // Style when disabled
      >
        <RxCaretSort size={20} />
      </Button>

      {/* Dropdown Menu */}
      {/* {dropdownOpen && menus.length > 0 && (
        <div className="absolute left-0 top-12 z-10 min-h-20 w-56 rounded-lg bg-white shadow-md">
          <ul>
            {menus.map((menu) => (
              <li key={menu.id} className="border-b last:border-none">
                <Link
                  href={`/menu/${menu.id}/overview`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  )
}
