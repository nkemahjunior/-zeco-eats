import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { BrowseRestaurantsFilter } from '../../types/browseMenuTypes'

export const getRestaurants = async (
  page = 1,
  limit = 20,
  userLocation: string,
  filters: BrowseRestaurantsFilter = {}
) => {
  const { deliveryFee, under30Min, sortHighestRated, rating, cuisine } = filters

  const supabase = createSupabaseClient()

  // Split the string into words and remove empty spaces
  const locationParts = userLocation
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)

  // Construct the OR condition dynamically
  const ilikeConditions = locationParts
    .map((part) => `location.ilike.%${part}%`)
    .join(',')

  let query = supabase
    .from('restaurant')
    .select('*', { count: 'exact' })
    .range((page - 1) * limit, page * limit - 1)
    .or(ilikeConditions)

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
