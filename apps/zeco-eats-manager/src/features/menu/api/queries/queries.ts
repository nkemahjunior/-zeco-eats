import { getRestaurantId } from '@/shared/api/queries/server/serverQueriesRestaurant'
import { Tables } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export async function getRestaurantMenus(): Promise<
  Tables<'restaurant_menus'>[]
> {
  const supabase = await createSupabaseServer()
  const restaurant = await getRestaurantId()

  const { data, error } = await supabase
    .from('restaurant_menus')
    .select('*')
    .eq('restaurant_id', restaurant.id)

  if (error) {
    console.error('Error fetching menus:', error)
    throw error
  }

  return data
}

export async function getRestaurantMenusAndCategories() {
  const supabase = await createSupabaseServer()
  const restaurant = await getRestaurantId()

  const { data, error } = await supabase
    .from('restaurant_menu_categories')
    .select(
      `
      menu_id,
      category_id,
      restaurant_id,
      restaurant_categories(name)
      `
    )
    .eq('restaurant_id', restaurant.id)

  if (error) {
    console.error('Error fetching menus and categories:', error)
    throw error
  }

  return data.map((el) => ({
    menu_id: el.menu_id,
    category_id: el.category_id,
    restaurant_id: el.restaurant_id,
    category_name: el.restaurant_categories?.name || '',
  }))
}
