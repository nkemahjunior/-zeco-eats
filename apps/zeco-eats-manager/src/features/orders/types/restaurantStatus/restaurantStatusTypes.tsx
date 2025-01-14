export type RestaurantStatus = 'open' | 'busy' | 'paused'

export type RestaurantStatusModalName =
  | 'mainModal'
  | 'statusOpenContent1'
  | 'statusBusyContent1'
  | 'statusBusyContent2'
  | 'statusPausedContent1'

export interface RestaurantStatusModal {
  mainModal?: boolean
  parent?: RestaurantStatusModalName
  modalTitle?: string
  content: React.ReactNode
}

export type RestaurantStatusModals = Record<
  RestaurantStatusModalName,
  RestaurantStatusModal
>
