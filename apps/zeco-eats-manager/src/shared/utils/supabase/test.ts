import { createSupabaseServer } from '@zeco-eats-lib/utils/server'
import { supabaseClient } from './supabase'

export function testsupabase() {
  console.log('testing supabase')

  supabaseClient
    .from('restaurant')
    .select('*')
    .then(({ data, error }) => {
      if (error) {
        console.error('Error fetching data:', error)
      } else {
        console.log('Data is here:', data)
      }
    })
}

export async function testsupabaseServer() {
  console.log('testing supabase server')

  const supabase = await createSupabaseServer()

  supabase
    .from('restaurant')
    .select('*')
    .then(({ data, error }) => {
      if (error) {
        console.error('Error fetching data:', error)
      } else {
        console.log('Data is here:', data)
      }
    })
}
