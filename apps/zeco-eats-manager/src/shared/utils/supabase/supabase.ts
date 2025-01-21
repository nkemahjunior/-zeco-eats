import { createSupabaseClient } from '@zeco-eats-lib/utils/client'
import { createSupabaseServer } from '@zeco-eats-lib/utils/server'

export const supabaseClient = createSupabaseClient()
export const supabaseServer = createSupabaseServer()
