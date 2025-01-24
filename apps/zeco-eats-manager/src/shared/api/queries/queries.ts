import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export async function getAllCuisines() {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.from('cuisines').select('*')
  if (error) {
    console.log('Error fetching cuisines:', error)
    throw error
  }

  return data
}
