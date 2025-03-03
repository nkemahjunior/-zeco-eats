import { queryOptions } from '@tanstack/react-query'
import { getPopularRestaurants } from '../queries/queries'

export const popularRestaurantsOptions = () => {
  return queryOptions({
    queryKey: ['popular-restaurants'],
    queryFn: getPopularRestaurants,
  })
}
