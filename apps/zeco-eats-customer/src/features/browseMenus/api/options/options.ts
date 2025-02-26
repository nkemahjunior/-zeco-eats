import { BrowseRestaurantsFilter } from '../../types/browseMenuTypes'
import { getRestaurants } from '../queries/queries'

export const getRestaurantsQueryOptions = (
  page: number,
  userLocation: string,
  filters: BrowseRestaurantsFilter
) => ({
  queryKey: ['restaurants', page, filters, userLocation],
  queryFn: () => getRestaurants(page, 20, userLocation, filters),
})
