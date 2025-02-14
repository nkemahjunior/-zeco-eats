'use client'
import RadioBtn from '@/shared/components/inputs/RadioBtn'
import {
  RestaurantStatus,
  RestaurantStatusModalName,
} from '../../types/restaurantStatus/restaurantStatusTypes'
import { useContext } from 'react'
import {
  RestaurantStatusModalStackContext,
  RestaurantStatusProviderType,
} from '../../context/modalStack/RestaurantStatusModalStackProvider'

interface fnProps {
  icon: React.ReactNode
  status: RestaurantStatus
  desc: string
  id: string
  // activeStatus: RestaurantStatus
  // changeActiveStatus: (arg: RestaurantStatus) => void
}

export default function Status({
  icon,
  status,
  desc,
  id,
  // activeStatus,
  // changeActiveStatus,
}: fnProps) {
  const { changeCurModal } = useContext(
    RestaurantStatusModalStackContext
  ) as RestaurantStatusProviderType

  return (
    <label
      className={`flex cursor-pointer items-center space-x-4 rounded-lg border border-solid p-4 ${/*activeStatus === status ? 'border-black' : 'border-backgroundBorder'*/ ''}`}
      onClick={() => {
        const modalName: RestaurantStatusModalName =
          status === 'open'
            ? 'statusOpenContent1'
            : status === 'busy'
              ? 'statusBusyContent1'
              : 'statusPausedContent1'
        changeCurModal(modalName)
      }}
      // onClick={() => {
      //   open
      //   //changeActiveStatus(status)
      // }}
      htmlFor={id}
    >
      <span className="inline-block w-[10%]">{icon}</span>

      <div className="flex w-full flex-col justify-center gap-y-1">
        <span className="inline-block capitalize">{status}</span>
        <span className="text-textTint inline-block">{desc}</span>
      </div>

      <span className="inline-block w-[10%]">
        <RadioBtn id={id} name="selectStatus" />
      </span>
    </label>
  )
}
