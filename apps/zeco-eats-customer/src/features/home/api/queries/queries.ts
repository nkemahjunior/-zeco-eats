import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const getPopularRestaurants = async () => {
  const supabase = await createSupabaseServer()

  const { data, error } = await supabase
    .from('restaurant')
    .select('id, name, image')
    .in('id', [5, 10, 8, 9, 25, 16])

  if (error) {
    console.error('Error fetching popular restaurants:', error)
    return []
  }

  return data
}
