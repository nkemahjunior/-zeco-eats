'use server'
import {
  getRestaurantId,
  getUser,
} from '@/shared/api/queries/server/serverQueriesRestaurant'
import { MutationResponse } from '@/shared/types/apiTypes/MutationResponse'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export async function createMenuAction(
  prevState: unknown,
  formData: FormData
): Promise<MutationResponse> {
  try {
    const menuName = formData.get('menuName') as string
    if (!menuName) throw new Error('Menu name is required')
    const supabase = await createSupabaseServer()

    const user = await getUser()
    const restaurant = await getRestaurantId(user.id)

    const { error: insertError } = await supabase
      .from('restaurant_menus')
      .insert({
        name: menuName,
        restaurant_id: restaurant.id,
      })

    if (insertError) throw new Error(insertError.message)

    return { success: true, msg: 'Menu created successfully' }
  } catch (error) {
    console.log(error)
    return { success: false, msg: 'Error creating menu' }
  }
}
