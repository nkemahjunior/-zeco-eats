export interface PayoutStat {
  name: string
  trend: 'up' | 'down'
  trendChange: string
  amount: string
}

interface PayoutInfo {
  infoName: string
  totalPrice: string
  subInfo: [] | PayoutInfos
}

export type PayoutInfos = PayoutInfo[]
