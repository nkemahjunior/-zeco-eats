'use server'

import {
  getRestaurantId,
  getUser,
} from '@/shared/api/queries/server/serverQueriesRestaurant'
import { Tables } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export const addRestaurantCuisines = async (
  selectedCuisines: Tables<'cuisines'>[]
) => {
  try {
    const supabase = await createSupabaseServer()
    const user = await getUser()
    const restaurantData = await getRestaurantId(user.id)

    const restaurantId = restaurantData.id

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

    await Promise.all(insertPromises)
  } catch (error) {
    throw new Error(`Error submitting cuisines: ${error}`)
  }
}

export async function uploadRestaurantProfilePic(file: File) {
  try {
    const supabase = await createSupabaseServer()
    const user = await getUser()
    const restaurantData = await getRestaurantId(user.id)

    const restaurantId = restaurantData.id

    const filePath = `restaurant-profiles/${restaurantId}${file.name}`
    const { data: storageData, error: storageError } = await supabase.storage
      .from('zeco-eats')
      .upload(filePath, file)

    if (storageError || !storageData?.path) {
      throw new Error(
        'Failed to upload the file to Supabase Storage.--' +
          storageError?.message
      )
    }

    const { data: publicUrlData } = supabase.storage
      .from('zeco-eats')
      .getPublicUrl(storageData.path)

    if (!publicUrlData?.publicUrl) {
      throw new Error(
        'Failed to retrieve the public URL for the uploaded file.'
      )
    }

    const fileUrl = publicUrlData.publicUrl

    const { error: updateError } = await supabase
      .from('restaurant')
      .update({ profile_pic: fileUrl })
      .eq('id', restaurantId)

    if (updateError) {
      throw new Error(
        'Failed to update the restaurant table with the file URL.'
      )
    }

    return {
      success: true,
      msg: 'Succesfully uploaded picture',
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      success: false,
      msg: 'Failed to upload picture',
    }
  }
}
