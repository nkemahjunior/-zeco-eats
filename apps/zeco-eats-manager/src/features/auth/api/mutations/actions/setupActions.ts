'use server'

import { Tables } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const addRestaurantCuisines = async (
  selectedCuisines: Tables<'cuisines'>[]
) => {
  const supabase = await createSupabaseServer()

  try {
    // Step 1: Get the current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      throw new Error('User not authenticated')
    }

    // Step 2: Get the restaurant associated with the user
    const { data: restaurantData, error: restaurantError } = await supabase
      .from('restaurant')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (restaurantError || !restaurantData) {
      throw new Error('Restaurant not found for this user')
    }

    const restaurantId = restaurantData.id

    // Step 3: Insert selected cuisines into restaurant_cuisines table
    const insertPromises = selectedCuisines.map(async (cuisine) => {
      const { data: cuisineData, error: cuisineError } = await supabase
        .from('cuisines')
        .select('id')
        .eq('cuisine_name', cuisine.cuisine_name!)
        .single()

      if (cuisineError || !cuisineData) {
        throw new Error(`Cuisine ${cuisine.cuisine_name} not found`)
      }

      const cuisineId = cuisineData.id

      const { error: insertError } = await supabase
        .from('restaurant_cuisines')
        .insert([{ restaurant_id: restaurantId, cuisine_id: cuisineId }])

      if (insertError) {
        throw new Error(
          `Error inserting into restaurant_cuisines: ${insertError.message}`
        )
      }
    })

    // Wait for all insert operations to complete
    await Promise.all(insertPromises)
  } catch (error) {
    throw new Error(`Error submitting cuisines: ${error}`)
  }
}
