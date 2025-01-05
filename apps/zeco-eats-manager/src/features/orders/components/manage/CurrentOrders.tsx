'use client'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import { useContext, useState } from 'react'
import StatusDot from './StatusDot'
import { PiCaretUpDownFill } from 'react-icons/pi'
import OrderPreparingCard from './OrderPreparingCard'
import OrderReadyCard from './OrderReadyCard'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import Status from './Status'
import { GoIssueOpened } from 'react-icons/go'
import { MdOutlineEventBusy } from 'react-icons/md'
import { IoPauseSharp } from 'react-icons/io5'
import CloseBtn from '@/shared/components/modal/CloseBtn'

const fakeOrders = Array.from({ length: 5 })
export default function CurrentOrders() {
  const [status, setStatus] = useState<'open' | 'busy' | 'paused'>('open')
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const changeRestaurantStatus = () => {
    openModal(
      <div className="h-full space-y-8 p-6">
        <div className="flex items-center gap-x-16">
          <CloseBtn />
          <Heading className="text-center" text="Store status" />
        </div>
        <Status
          icon={<GoIssueOpened size={20} />}
          id="selectStatus"
          status="Open"
          desc="Allow your restaurant to be open to customers"
        />
        <Status
          icon={<MdOutlineEventBusy size={20} />}
          id="selectStatus"
          status="Busy"
          desc="Add more time to the standard ready time for your dishes"
        />
        <Status
          icon={<IoPauseSharp size={20} />}
          id="selectStatus"
          status="Pause"
          desc="Your restaurant will be unavailable to customers"
        />
      </div>,
      {
        ...modalProps,
        height: 'h-[55%]',
        width: 'w-[25%]',
        className: ' rounded-lg overflow-hidden',
      }
    )
  }

  return (
    <div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Heading text="Orders" />

          <div className="flex gap-x-8">
            <TextInputWithIcon id="searchOrderNum" width="w-[20rem]" />
            <button
              className="bg-background hover:bg-backgroundShade2 flex h-[2.5rem] items-center justify-evenly gap-x-2 rounded-xl px-2"
              onClick={changeRestaurantStatus}
            >
              <StatusDot status={status} />
              <span>{status.toUpperCase()}</span>
              <span>
                <PiCaretUpDownFill />
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          <div className="space-y-4">
            <div className="space-x-2">
              <span className="text-base font-medium">Preparing</span>
              <span className="border-backgroundBorder inline-block rounded border border-solid px-2 py-1">
                3
              </span>
            </div>

            <div className="space-y-4">
              {fakeOrders.map((_, i) => (
                <OrderPreparingCard key={i} />
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <div className="space-x-2">
                <span className="text-base font-medium">Ready</span>
                <span className="border-backgroundBorder inline-block rounded border border-solid px-2 py-1">
                  3
                </span>
              </div>

              <div className="space-y-4">
                {fakeOrders.map((_, i) => (
                  <OrderReadyCard key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
