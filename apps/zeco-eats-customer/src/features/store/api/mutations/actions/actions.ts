'use server'

import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { Tables } from '@zeco-eats-lib/utils-client'
import { validateAndGetUserServer } from '@/shared/api/queries/server/serverQueries'

export const bookmarkStore = async (
  storeId: number
): Promise<Tables<'user_favourite_stores'>> => {
  const supabase = await createSupabaseServer()
  const user = await validateAndGetUserServer()

  const { data, error } = await supabase
    .from('user_favourite_stores')
    .insert({
      user_id: user.id,
      store_id: storeId,
    })
    .select('*')
    .single()

  if (error) {
    throw new Error('Failed to bookmark store')
  }

  return data
}

export const unBookmarkStore = async (
  storeId: number
): Promise<Tables<'user_favourite_stores'>> => {
  const supabase = await createSupabaseServer()
  const user = await validateAndGetUserServer()

  const { data, error } = await supabase
    .from('user_favourite_stores')
    .delete()
    .eq('user_id', user.id)
    .eq('store_id', storeId)
    .select('*')
    .single()

  if (error) {
    throw new Error('Failed to remove bookmark')
  }

  return data
}
