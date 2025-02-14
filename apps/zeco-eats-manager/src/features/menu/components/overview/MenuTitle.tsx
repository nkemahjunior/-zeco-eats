'use client'

import { useContext, useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import {
  KEYrestaurantMenus,
  restaurantMenusOptions,
} from '@/features/menu/api/queries/options/menuOptions'
import { RxCaretSort } from 'react-icons/rx'
import { RiPencilFill } from 'react-icons/ri'
import Heading from '@/shared/components/text/Heading'
import Button from '@/shared/components/button/Button'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import MenuTitles from './MenuTitles'
import { useMenuId } from '../../hooks/menuHooks'
import { updateMenuNameAction } from '../../api/mutations/actions/menuActions'
import { toast } from 'sonner'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { Tables } from '@zeco-eats-lib/utils-client'

export default function MenuTitle() {
  const queryClient = getQueryClient()
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)

  const curMenuId = useMenuId()
  const { modalProps, openModal } = useContext(
    ModalContext
  ) as modalContextTypes

  const [isEditing, setIsEditing] = useState(false)
  const [curMenuName, setCurMenuName] = useState(
    menus.find((el) => el.id === curMenuId)?.name
  )

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
    setCurMenuName(e.target.value)

  //const handleBlur = () => setIsEditing(false)

  const updateMenuName = async () => {
    if (!curMenuName) return
    const prevName = curMenuName
    setIsEditing(false)

    const res = await updateMenuNameAction(curMenuId, curMenuName)
    if (res.success) {
      toast.success(res.msg)
      setCurMenuName(curMenuName)
      queryClient.setQueryData(
        KEYrestaurantMenus,
        (oldData: Tables<'restaurant_menus'>[]) =>
          oldData.map((menu) =>
            menu.id === curMenuId ? { ...menu, name: curMenuName } : menu
          )
      )
    } else {
      toast.error(res.msg)
      setCurMenuName(prevName)
    }
  }

  return (
    <div className="relative flex w-full items-center space-x-4">
      {isEditing ? (
        <input
          type="text"
          value={curMenuName || ''}
          onChange={handleInputChange}
          //onBlur={handleBlur}
          className="bg-background w-[60%] rounded-lg px-4 py-2 text-xl font-bold lg:text-2xl xl:w-[20%]"
          autoFocus
        />
      ) : (
        <div className="w-48">
          <Heading
            text={curMenuName || ''}
            className="border-2 border-solid border-transparent py-2"
          />
        </div>
      )}

      {isEditing ? (
        <Button events={{ onClick: updateMenuName }}>Save</Button>
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
    </div>
  )
}
