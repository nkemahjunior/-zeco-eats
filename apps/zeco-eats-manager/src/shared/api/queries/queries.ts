import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { getRestaurantId } from './server/serverQueriesRestaurant'

export async function getAllCuisines() {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from('cuisines').select('*')
  if (error) {
    console.log('Error fetching cuisines:', error)
    throw error
  }

  return data
}

export async function getActiveMenuId() {
  const supabase = createSupabaseClient()
  const restaurant = await getRestaurantId(true)
  const { data, error } = await supabase
    .from('restaurant_menus')
    .select(`id`)
    .eq('restaurant_id', restaurant.id)
    .eq('active', true)
    .single()

  if (error) {
    console.log(error)
    throw error
  }

  return data
}
