import { queryOptions } from '@tanstack/react-query'
import { getBookmarkedStores } from '../queries/queries'

export const getBookmarkedStoresOption = () => {
  return queryOptions({
    queryKey: ['bookmarked-stores'],
    queryFn: getBookmarkedStores,
  })
}
