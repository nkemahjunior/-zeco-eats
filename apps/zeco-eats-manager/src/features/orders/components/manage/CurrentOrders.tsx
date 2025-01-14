'use client'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import { useContext } from 'react'
import StatusDot from './StatusDot'
import { PiCaretUpDownFill } from 'react-icons/pi'
import OrderPreparingCard from './OrderPreparingCard'
import OrderReadyCard from './OrderReadyCard'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import ChangeRestaurantStatusModal from './ChangeRestaurantStatusModal'
import RestaurantStatusModalStackProvider from '../../context/modalStack/RestaurantStatusModalStackProvider'
import {
  RestaurantStatusContext,
  RestaurantStatusContextTypes,
} from '@/shared/context/modal/RestaurantStatusProvider'
import BusyTimer from './BusyTimer'

const fakeOrders = Array.from({ length: 5 })
export default function CurrentOrders() {
  const { restaurantStatus, busyTime } = useContext(
    RestaurantStatusContext
  ) as RestaurantStatusContextTypes

  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const changeRestaurantStatus = () => {
    openModal(
      <RestaurantStatusModalStackProvider>
        <ChangeRestaurantStatusModal />
      </RestaurantStatusModalStackProvider>,
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
              <StatusDot status={restaurantStatus} />
              <span>{restaurantStatus.toUpperCase()}</span>
              <span>
                {restaurantStatus === 'busy' && (
                  <BusyTimer busyTime={busyTime} />
                )}
              </span>
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
