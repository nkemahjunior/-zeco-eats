'use server'
import { Menu } from '@/features/menu/types/MenuTypes'
import {
  getRestaurantId,
  getUser,
} from '@/shared/api/queries/server/serverQueriesRestaurant'
import { MutationResponse } from '@/shared/types/apiTypes/MutationResponse'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

const daysOfWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

function formatOpenDays(startDay: number, endDay: number): string {
  const start = daysOfWeek[startDay - 1]
  const end = daysOfWeek[endDay - 1]
  return start === end ? start : `${start}-${end}`
}

export async function createMenuAction(data: Menu): Promise<MutationResponse> {
  try {
    const supabase = await createSupabaseServer()
    const user = await getUser()
    const restaurant = await getRestaurantId(user.id)

    const { error } = await supabase.from('restaurant_menus').insert({
      name: data.menuName,
      restaurant_id: restaurant.id,
      open_days: formatOpenDays(
        Number(data.openDayStart),
        Number(data.openDayEnd)
      ),
      time: `${data.openTime}-${data.closeTime}`,
    })

    if (error) throw new Error(error.message)
    return { success: true, msg: 'Menu created successfully' }
  } catch (error) {
    console.error('Menu creation error:', error)
    return {
      success: false,
      msg: 'Failed to create menu',
    }
  }
}
