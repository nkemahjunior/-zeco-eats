'use client'

import Line from '@/shared/components/Line'
import Heading from '@/shared/components/text/Heading'
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
      <div className="h-full px-6 py-8">
        <div className="h-full w-full space-y-6">
          <Heading text="Customisations" />
          <div className="space-y-6">
            <div>
              <p className="font-medium">Customer Instructions</p>
              <p>Chose Bread type</p>
            </div>

            <Line />

            <div className="border-backgroundBorder flex cursor-pointer justify-between space-y-2 border-b border-solid py-6">
              <div>
                <p className="font-medium">Edit options</p>
                <p>
                  Manage which options are available to customers in this set
                </p>
              </div>
              <MdKeyboardArrowRight size={20} />
            </div>

            <div className="border-backgroundBorder flex cursor-pointer justify-between space-y-2 border-b border-solid py-6">
              <div>
                <p className="font-medium">Add to items</p>
              </div>
              <MdKeyboardArrowRight size={20} />
            </div>

            <div className="flex cursor-pointer justify-between space-y-2 py-6">
              <div>
                <p className="font-medium">Customisation rules</p>
                <p>Set limits for the options in this customisation</p>
              </div>
              <MdKeyboardArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
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
        <span className="font-medium">Chose Bread type</span>
        <span>0 options</span>
      </div>
      <MdKeyboardArrowRight size={20} />
    </div>
  )
}
