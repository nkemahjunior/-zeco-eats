import { queryOptions } from '@tanstack/react-query'
import { getRestaurantMenus, getRestaurantMenusAndCategories } from '../queries'

export const restaurantMenusOptions = queryOptions({
  queryKey: ['restaurant-menus'],
  queryFn: getRestaurantMenus,
})

export const restaurantMenuCategoriesOPtions = queryOptions({
  queryKey: ['restaurant-menus-categories'],
  queryFn: getRestaurantMenusAndCategories,
})
