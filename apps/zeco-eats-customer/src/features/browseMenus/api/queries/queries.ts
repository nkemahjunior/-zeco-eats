import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { FoodCategoryName } from '../../types/browseMenuTypes'

export interface BrowseRestaurantsFilter {
  deliveryFee?: number | null
  under30Min?: boolean
  sortHighestRated?: boolean
  rating?: number | null
  cuisine?: FoodCategoryName | null
}

export const getRestaurants = async (
  page = 1,
  limit = 20,
  filters: BrowseRestaurantsFilter = {}
) => {
  const { deliveryFee, under30Min, sortHighestRated, rating, cuisine } = filters

  const supabase = createSupabaseClient()

  let query = supabase
    .from('restaurant')
    .select('*', { count: 'exact' })
    //.range((page - 1) * limit, page * limit - 1)
    .range(0, page * limit - 1)

  // Apply delivery fee filter if selected
  if (deliveryFee !== null) {
    query = query.lte('delivery_fee', deliveryFee)
  }

  // Apply cook time filter if selected
  if (under30Min) {
    query = query.lte('max_avg_cook_time', 30)
  }

  if (sortHighestRated) {
    query = query.order('rating', { ascending: false })
  }

  if (rating) {
    query = query.gte('rating', rating)
  }

  // Apply cuisine filter
  if (cuisine) {
    const cuisineU = cuisine.toLocaleLowerCase()
    query = query.or(
      `cuisine1.eq.${cuisineU},cuisine2.eq.${cuisineU},cuisine3.eq.${cuisineU}`
    )
  }

  const { data, count, error } = await query

  if (error) throw new Error(error.message)
  return { data, count }
}
