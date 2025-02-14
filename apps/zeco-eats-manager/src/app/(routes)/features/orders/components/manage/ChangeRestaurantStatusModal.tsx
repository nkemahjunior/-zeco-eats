'use client'
import {
  RestaurantStatusModalStackContext,
  RestaurantStatusProviderType,
} from '../../context/modalStack/RestaurantStatusModalStackProvider'
import { useContext } from 'react'
import RestaurantStatusNavigateBack from './modalsStack/RestaurantStatusNavigateBack'
import Heading from '@/shared/components/text/Heading'

export default function ChangeRestaurantStatusModal() {
  const { curModal } = useContext(
    RestaurantStatusModalStackContext
  ) as RestaurantStatusProviderType

  return (
    <div
      className={`${!curModal.mainModal && 'space-y-8 p-6'} flex h-full flex-col`}
    >
      {!curModal.mainModal && (
        <div className="flex items-center gap-x-16">
          <RestaurantStatusNavigateBack />
          <Heading className="text-center" text={curModal.modalTitle || ''} />
        </div>
      )}
      <div className="h-full">{curModal?.content}</div>
    </div>
  )
}
