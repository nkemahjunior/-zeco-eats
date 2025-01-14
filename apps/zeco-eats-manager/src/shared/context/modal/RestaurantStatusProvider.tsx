'use client'
import { RestaurantStatus } from '@/features/orders/types/restaurantStatus/restaurantStatusTypes'
import { createContext, useState } from 'react'

export interface RestaurantStatusContextTypes {
  restaurantStatus: RestaurantStatus
  changeRestaurantStatus: (arg: RestaurantStatus) => void
  busyTime: number
  changeBusyTime: (arg: number) => void
}

export const RestaurantStatusContext =
  createContext<RestaurantStatusContextTypes | null>(null)

export default function RestaurantStatusProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [restaurantStatus, setRestaurantStatus] =
    useState<RestaurantStatus>('open')

  const [busyTime, setBusyTime] = useState(0)

  const changeRestaurantStatus = (status: RestaurantStatus) =>
    setRestaurantStatus(status)

  const changeBusyTime = (time: number) => setBusyTime(time)
  return (
    <RestaurantStatusContext.Provider
      value={{
        restaurantStatus,
        changeRestaurantStatus,
        busyTime,
        changeBusyTime,
      }}
    >
      {children}
    </RestaurantStatusContext.Provider>
  )
}
