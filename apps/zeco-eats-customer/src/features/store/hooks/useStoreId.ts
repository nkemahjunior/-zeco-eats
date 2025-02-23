'use client'

import { useParams } from 'next/navigation'

export function useStoreId(): number {
  const params = useParams<{ storeId: string }>()
  return Number(params.storeId)
}
