import { User } from '@supabase/supabase-js'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const getUser = async (): Promise<User> => {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    throw authError
  }

  return user
}

export const getRestaurantId = async (): Promise<{
  id: number
}> => {
  const user = await getUser()
  const supabase = await createSupabaseServer()
  const { data: restaurantData, error: restaurantError } = await supabase
    .from('restaurant')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (restaurantError || !restaurantData) {
    throw restaurantError
  }

  return restaurantData
}
