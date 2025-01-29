import { User } from '@supabase/supabase-js'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const getUser = async (): Promise<User> => {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    throw new Error('User not authenticated')
  }

  return user
}

export const getRestaurantId = async (
  userId: string
): Promise<{
  id: number
}> => {
  const supabase = await createSupabaseServer()
  const { data: restaurantData, error: restaurantError } = await supabase
    .from('restaurant')
    .select('id')
    .eq('user_id', userId)
    .single()

  if (restaurantError || !restaurantData) {
    throw new Error('Restaurant not found for this user')
  }

  return restaurantData
}
