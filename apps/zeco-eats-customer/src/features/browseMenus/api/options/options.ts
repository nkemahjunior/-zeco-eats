import { BrowseRestaurantsFilter } from '../../types/browseMenuTypes'
import { getRestaurants } from '../queries/queries'

export const getRestaurantsQueryOptions = (
  page: number,
  filters: BrowseRestaurantsFilter
) => ({
  queryKey: ['restaurants', page, filters],
  queryFn: () => getRestaurants(page, 20, filters),
})
