'use client'
import { createContext, useState } from 'react'
import {
  RestaurantStatusModal,
  RestaurantStatusModalName,
  RestaurantStatusModals,
} from '../../types/restaurantStatus/restaurantStatusTypes'
import Statuses from '../../components/manage/modalsStack/Statuses'
import StatusOpenContent1 from '../../components/manage/modalsStack/StatusOpenContent1'
import StatusBusyContent1 from '../../components/manage/modalsStack/StatusBusyContent1'
import StatusBusyContent2 from '../../components/manage/modalsStack/StatusBusyContent2'
import StatusPausedContent1 from '../../components/manage/modalsStack/StatusPausedContent1'

export interface RestaurantStatusProviderType {
  curModal: RestaurantStatusModal
  changeCurModal: (arg: RestaurantStatusModalName) => void
}

export const RestaurantStatusModalStackContext =
  createContext<RestaurantStatusProviderType | null>(null)

const modals: RestaurantStatusModals = {
  mainModal: {
    mainModal: true,
    content: <Statuses />,
  },

  statusOpenContent1: {
    parent: 'mainModal',
    content: <StatusOpenContent1 />,
  },

  statusBusyContent1: {
    parent: 'mainModal',
    modalTitle: 'Select added time',
    content: <StatusBusyContent1 />,
  },

  statusBusyContent2: {
    parent: 'statusBusyContent2',
    modalTitle: 'Select added time',
    content: <StatusBusyContent2 />,
  },

  statusPausedContent1: {
    parent: 'mainModal',
    content: <StatusPausedContent1 />,
  },
}

export default function RestaurantStatusModalStackProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [curModal, setCurModal] = useState<RestaurantStatusModal>(
    modals['mainModal']
  )

  const changeCurModal = (curModalName: RestaurantStatusModalName) => {
    setCurModal(modals[curModalName])
  }

  return (
    <RestaurantStatusModalStackContext.Provider
      value={{ curModal, changeCurModal }}
    >
      {children}
    </RestaurantStatusModalStackContext.Provider>
  )
}
