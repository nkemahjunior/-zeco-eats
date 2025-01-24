import { queryOptions } from '@tanstack/react-query'
import { getAllCuisines } from '../queries'

export const cuisineOptions = queryOptions({
  queryKey: ['zeco-eats-cuisines'],
  queryFn: getAllCuisines,
})
