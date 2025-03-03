import { validateAndGetUserServer } from '@/shared/api/queries/server/serverQueries'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { Tables } from '@zeco-eats-lib/utils-client'

export const getBookmarkedStores = async (): Promise<
  Tables<'restaurant'>[]
> => {
  const supabase = await createSupabaseServer()
  const user = await validateAndGetUserServer()

  const { data, error } = await supabase
    .from('user_favourite_stores')
    .select(
      `
        restaurant: restaurant(*)
        `
    )
    .eq('user_id', user.id)

  if (error) {
    throw error
  }

  return data
    .map((el) => el.restaurant)
    .filter(Boolean) as Tables<'restaurant'>[]
}
