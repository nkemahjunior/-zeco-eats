import { queryOptions } from '@tanstack/react-query'
import {
  getCompleteRestaurantMenu,
  getItemAndCustomisations,
  getRestaurantById,
  getRestaurantCategories,
} from '../queries'

export const getRestaurantsByIdOption = (id: number) => {
  return queryOptions({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantById(id),
  })
}

export const getRestaurantCategoriesOption = (id: number) => {
  return queryOptions({
    queryKey: ['restaurant-categories', id],
    queryFn: () => getRestaurantCategories(id),
  })
}

export const getCompleteRestaurantMenuOption = (storeId: number) => {
  return queryOptions({
    queryKey: ['restaurant-menu-complete', storeId],
    queryFn: () => getCompleteRestaurantMenu(storeId),
  })
}

export const getItemsAndCustomisationOption = (itemId: number) => {
  return queryOptions({
    queryKey: ['restaurant-items', itemId],
    queryFn: () => getItemAndCustomisations(itemId),
  })
}
