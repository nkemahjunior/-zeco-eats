import { User } from '@supabase/supabase-js'
import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const getUser = async (client?: boolean): Promise<User> => {
  const supabase = client
    ? createSupabaseClient()
    : await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()
  if (authError || !user) {
    console.log(authError)
    throw authError
  }

  return user
}

export const getRestaurantId = async (
  client?: boolean
): Promise<{
  id: number
}> => {
  const user = await getUser(client)
  const supabase = client
    ? createSupabaseClient()
    : await createSupabaseServer()

  const { data: restaurantData, error: restaurantError } = await supabase
    .from('restaurant')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (restaurantError || !restaurantData) {
    console.log('restaurant error')
    console.log(restaurantError)
    throw restaurantError
  }

  return restaurantData
}
