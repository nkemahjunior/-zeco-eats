'use client'

import { useParams } from 'next/navigation'

export function useMenuId(): number {
  const params = useParams<{ menuId: string }>()
  return Number(params.menuId)
}
