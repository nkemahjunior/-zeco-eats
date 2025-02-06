'use server'
import { Category, Menu, MenuItem } from '@/features/menu/types/MenuTypes'
import { deleteFile, uploadFile } from '@/shared/api/mutations/mutations'
import { getRestaurantId } from '@/shared/api/queries/server/serverQueriesRestaurant'
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
    const restaurant = await getRestaurantId()

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

export async function createCategoryAction(
  data: Category
): Promise<MutationResponse> {
  let categoryId: number | null = null
  const supabase = await createSupabaseServer()

  try {
    const restaurant = await getRestaurantId()

    const { data: category, error: categoryError } = await supabase
      .from('restaurant_categories')
      .insert({
        name: data.name,
        restaurant_id: restaurant.id,
      })
      .select('id')
      .single()

    if (categoryError) throw categoryError

    categoryId = category.id

    const { error: joinError } = await supabase
      .from('restaurant_menu_categories')
      .insert({
        menu_id: data.menuId,
        category_id: categoryId,
        restaurant_id: restaurant.id,
      })

    if (joinError) throw joinError
    return { success: true, msg: 'Category created successfully' }
  } catch (error) {
    if (categoryId) {
      //rollback
      await supabase.from('restaurant_categories').delete().eq('id', categoryId)
    }

    console.error('Category creation error:', error)
    return {
      success: false,
      msg: 'Failed to create category',
    }
  }
}

export const createMenuItemAction = async (
  data: MenuItem,
  image: File
): Promise<MutationResponse> => {
  let insertedItem: any = null
  let imageUrl: string | null = null
  const supabase = await createSupabaseServer()
  const restaurant = await getRestaurantId()

  try {
    // Upload the image
    imageUrl = await uploadFile(
      image,
      'zeco-eats',
      'item-pictures',
      `${restaurant.id}-${image.name}`
    )
    if (!imageUrl) {
      throw new Error('Failed to upload image', {
        cause: 'imageUpload',
      })
    }

    // Insert item into restaurant_items table
    const { data: insertedItemData, error: insertError } = await supabase
      .from('restaurant_items')
      .insert([
        {
          name: data.name,
          desc: data.description,
          restaurant_id: restaurant.id,
          price: data.price,
          vat: data.vat,
          image_url: imageUrl,
        },
      ])
      .select()
      .single()

    if (insertError) {
      throw new Error('Failed to insert item into restaurant_items table')
    }

    insertedItem = insertedItemData

    // Insert into restaurant_menus_categories_items table
    const { error: categoryError } = await supabase
      .from('restaurant_menus_categories_items')
      .insert([
        {
          menu_id: data.menuId,
          category_id: data.categoryId,
          item_id: insertedItem.id,
        },
      ])

    if (categoryError) {
      throw new Error('Failed to associate item with categories')
    }

    return {
      success: true,
      msg: 'Menu item created successfully',
    }
  } catch (error) {
    console.error('Error creating menu item:', error)

    // If image URL was generated, delete the file from storage
    if (imageUrl) {
      await deleteFile(
        'zeco-eats',
        `item-pictures`,
        `${restaurant.id}-${image.name}`
      )
    }

    // If item was inserted, delete it from the restaurant_items table
    if (insertedItem) {
      const { error: deleteItemError } = await supabase
        .from('restaurant_items')
        .delete()
        .eq('id', insertedItem.id)

      if (deleteItemError) {
        console.error('Failed to delete the inserted item:', deleteItemError)
      }
    }

    return {
      success: false,
      msg: 'An error occurred while creating the menu item',
    }
  }
}
