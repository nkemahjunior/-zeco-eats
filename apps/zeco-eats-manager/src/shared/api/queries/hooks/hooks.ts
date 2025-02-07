import { useQuery } from '@tanstack/react-query'
import { getActiveMenuId } from '../queries'

export const KEYmenuIds = ['menu-ids']
export function useActiveMenuId() {
  return useQuery({
    queryKey: KEYmenuIds,
    queryFn: getActiveMenuId,
  })
}
