import { createSupabaseClient } from '@zeco-eats-lib/utils-client'

//deliveryFee: number | null = null,
// maxCookTime: number | null = null // in minutes

export interface BrowseRestaurantsFilter {
  deliveryFee?: number | null
  under30Min?: boolean
  sortHighestRated?: boolean
  rating?: number | null
}

export const getRestaurants = async (
  page = 1,
  limit = 20,
  filters: BrowseRestaurantsFilter = {}
) => {
  const { deliveryFee, under30Min, sortHighestRated, rating } = filters

  const supabase = createSupabaseClient()

  console.log('innnnnnnnnnnnnnnnnnnnnnnnn')
  console.log(filters)

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

  const { data, count, error } = await query

  if (error) throw new Error(error.message)
  return { data, count }
}
