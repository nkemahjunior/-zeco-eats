import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const validateAndGetUserServer = async () => {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error('unauthenticated user')

  return user
}

export const validateAndGetUserClient = async () => {
  const supabase = createSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw new Error('unauthenticated user')

  return user
}
