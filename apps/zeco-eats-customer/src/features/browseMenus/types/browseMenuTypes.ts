import { FoodCategoryName } from '@/shared/types/sharedTypes'

export interface BrowseRestaurantsFilter {
  deliveryFee?: number | null
  under30Min?: boolean
  sortHighestRated?: boolean
  rating?: number | null
  cuisine?: FoodCategoryName | null
}
