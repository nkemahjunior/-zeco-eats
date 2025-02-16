import { getPopularRestaurants } from '../queries/queries'

export const popularRestaurantsOptions = {
  queryKey: ['popular-restaurants'],
  queryFn: getPopularRestaurants,
}
