import { queryOptions } from '@tanstack/react-query'
import {
  getRestaurantCategories,
  getRestaurantMenuCategoriesItems,
  getRestaurantMenus,
  getRestaurantMenusAndCategories,
} from '../queries'

export const KEYrestaurantMenus = ['restaurant-menus']
export const restaurantMenusOptions = queryOptions({
  queryKey: KEYrestaurantMenus,
  queryFn: getRestaurantMenus,
})

export const restaurantMenuCategoriesOPtions = queryOptions({
  queryKey: ['restaurant-menus-categories'],
  queryFn: getRestaurantMenusAndCategories,
})

export const KEYRestaurantMenuCategoriesItems =
  'restaurant-menus-categories-items'

export const restaurantMenuCategoriesItemsOptions = (menuId: number) =>
  queryOptions({
    queryKey: [KEYRestaurantMenuCategoriesItems, menuId],
    queryFn: () => getRestaurantMenuCategoriesItems(menuId),
  })

export const KEYRestaurantCategories = ['restaurant-categories']
export const restaurantCategoriesOptions = queryOptions({
  queryKey: KEYRestaurantCategories,
  queryFn: getRestaurantCategories,
})
