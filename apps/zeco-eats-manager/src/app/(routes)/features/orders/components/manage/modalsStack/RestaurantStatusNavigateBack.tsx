'use client'

import {
  RestaurantStatusModalStackContext,
  RestaurantStatusProviderType,
} from '@/app/(routes)/features/orders/context/modalStack/RestaurantStatusModalStackProvider'
import { useContext } from 'react'
import { BiArrowBack } from 'react-icons/bi'

export default function RestaurantStatusNavigateBack() {
  const { changeCurModal, curModal } = useContext(
    RestaurantStatusModalStackContext
  ) as RestaurantStatusProviderType

  const navigateBack = () => {
    changeCurModal(curModal?.parent || 'mainModal')
  }

  return (
    <button
      onClick={navigateBack}
      className={`bg-background hover:bg-backgroundShade1 flex items-center justify-center rounded-full p-2 transition-colors duration-300`}
    >
      <span>
        <BiArrowBack size={20} />
      </span>
    </button>
  )
}
