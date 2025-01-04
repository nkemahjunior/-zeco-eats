'use client'

import {
  ModalUrlContext,
  modalUrlContextTypes,
} from '@/shared/context/modal/ModalUrlProvider'
import { useUpdateUrlParams } from '@/shared/hooks/useUpdateUrlParams'
import { modalKey } from '@/shared/utils/modalKey'
import { useContext } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function Customisation() {
  const { setModalUrlContent, modalUrlProps, setModalUrlProps } = useContext(
    ModalUrlContext
  ) as modalUrlContextTypes

  const updateParam = useUpdateUrlParams()

  const openCustomisation = () => {
    setModalUrlContent(
      <div className="h-full w-full border-2 border-solid border-red-700"></div>
    )
    setModalUrlProps({
      ...modalUrlProps,
      childPos: 'justify-end',
      centerChildVer: false,
      height: 'h-full',
      width: 'w-[30%]',
    })
    updateParam(modalKey, 'true')
  }

  return (
    <div
      className="hover:bg-background border-backgroundBorder flex w-[40%] cursor-pointer items-center justify-between rounded-lg border border-solid px-4 py-2 transition-colors duration-300"
      onClick={openCustomisation}
    >
      <div className="flex flex-col justify-center space-y-2">
        <span className="font-medium">Bread</span>
        <span>0 options</span>
      </div>
      <MdKeyboardArrowRight size={20} />
    </div>
  )
}
