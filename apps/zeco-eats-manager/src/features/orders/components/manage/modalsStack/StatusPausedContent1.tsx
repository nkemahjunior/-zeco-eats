'use client'

import Button from '@/shared/components/button/Button'
import RadioBtn from '@/shared/components/inputs/RadioBtn'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import {
  RestaurantStatusContext,
  RestaurantStatusContextTypes,
} from '@/shared/context/modal/RestaurantStatusProvider'
import { useContext, useState } from 'react'

export default function StatusPausedContent1() {
  const pauseTime = [15, 30, 45, 60]
  const { changeBusyTime, changeRestaurantStatus } = useContext(
    RestaurantStatusContext
  ) as RestaurantStatusContextTypes

  const { closeModal } = useContext(ModalContext) as modalContextTypes

  const [selectedTime, setSelectedTime] = useState(10)

  const updateTimeAndCloseModal = () => {
    changeRestaurantStatus('paused')
    changeBusyTime(selectedTime)
    //closeModal()
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="divide-background divide-y">
        {pauseTime.map((el, i) => (
          <label
            htmlFor={`${i}busyTime`}
            key={i}
            className="flex cursor-pointer items-center justify-between py-6"
            onClick={() => setSelectedTime(el)}
          >
            <div>+{el} min</div>
            <RadioBtn id={`${i}pauseTime`} name="addPauseTime" />
          </label>
        ))}
      </div>

      <Button
        px="w-full"
        py="py-4"
        events={{
          onClick: updateTimeAndCloseModal,
        }}
      >
        Pause orders
      </Button>
    </div>
  )
}
