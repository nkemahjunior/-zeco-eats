import { queryOptions } from '@tanstack/react-query'
import { getRestaurantMenus, getRestaurantMenusAndCategories } from '../queries'

export const KEYrestaurantMenus = ['restaurant-menus']
export const restaurantMenusOptions = queryOptions({
  queryKey: KEYrestaurantMenus,
  queryFn: getRestaurantMenus,
})

export const restaurantMenuCategoriesOPtions = queryOptions({
  queryKey: ['restaurant-menus-categories'],
  queryFn: getRestaurantMenusAndCategories,
})
