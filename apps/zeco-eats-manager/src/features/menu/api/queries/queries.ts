import { getRestaurantId } from '@/shared/api/queries/server/serverQueriesRestaurant'
import { Tables } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { MenuCategorieItem } from '../../types/MenuTypes'

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

export async function getRestaurantMenuCategoriesItems(
  menuId: number
): Promise<MenuCategorieItem[]> {
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase
    .from('restaurant_menus_categories_items')
    .select(
      `
      *,
      restaurant_menus (*),
      restaurant_items (*),
      restaurant_categories (*)
      `
    )
    .eq('menu_id', menuId)

  if (error) {
    console.error('Error fetching restaurant menu data:', error)
    throw error
  }

  /**
   * [
   *    {
   *        category: category object
   *         items: [item object, item obj]
   *     }
   * ]
   */

  const categorieItemsMap = new Map<number, MenuCategorieItem>()

  data.forEach((el) => {
    if (categorieItemsMap.has(el.category_id)) {
      categorieItemsMap.get(el.category_id)?.items.push(el.restaurant_items)
    } else {
      categorieItemsMap.set(el.category_id, {
        category: el.restaurant_categories,
        items: [el.restaurant_items],
      })
    }
  })

  return Array.from(categorieItemsMap.values())
}

export async function getRestaurantCategories(): Promise<
  Tables<'restaurant_categories'>[]
> {
  const supabase = await createSupabaseServer()
  const restaurant = await getRestaurantId()

  const { data, error } = await supabase
    .from('restaurant_categories')
    .select(` *`)
    .eq('restaurant_id', restaurant.id)

  if (error) {
    console.error('Error fetching  categories:', error)
    throw error
  }

  return data
}
