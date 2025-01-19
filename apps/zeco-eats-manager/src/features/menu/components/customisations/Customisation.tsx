'use client'

import {
  ModalUrlContext,
  modalUrlContextTypes,
} from '@/shared/context/modal/ModalUrlProvider'
import { useUpdateUrlParams } from '@/shared/hooks/useUpdateUrlParams'
import { modalKey } from '@/shared/utils/modalKey'
import { useContext } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import CustomisationOptions from './CustomisationOptions'
import CreateOption from './CreateOption'
import CustomisationAddtoItem from './CustomisationAddToItem'

export default function Customisation() {
  const { setModalUrlContent, modalUrlProps, setModalUrlProps } = useContext(
    ModalUrlContext
  ) as modalUrlContextTypes
  const updateParam = useUpdateUrlParams()

  const openCustomisation = () => {
    setModalUrlContent(
      <div className="h-full px-6 py-8">
        {/* TODO, open each based on param, we will surely use ids */}
        {/* <CustomisationsMain /> */}
        {/* <CustomisationOptions/> */}
        {/* <CreateOption /> */}
        {/* <CustomisationAddtoItem /> */}
      </div>
    )
    setModalUrlProps({
      ...modalUrlProps,
      childPos: 'justify-end',
      centerChildVer: false,
      height: 'h-full',
      width: 'w-[25%]',
    })
    updateParam(modalKey, 'true')
  }

  return (
    <div
      className="hover:bg-background border-backgroundBorder flex w-full cursor-pointer items-center justify-between rounded-lg border border-solid px-4 py-2 transition-colors duration-300 md:w-[60%] xl:w-[40%]"
      onClick={openCustomisation}
    >
      <div className="flex flex-col justify-center space-y-2">
        <span className="font-medium">Chose Bread type</span>
        <span>0 options</span>
      </div>
      <MdKeyboardArrowRight size={20} />
    </div>
  )
}
