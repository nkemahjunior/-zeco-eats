'use server'
import {
  Category,
  Menu,
  MenuItem,
} from '@/app/(routes)/features/menu/types/MenuTypes'
import { deleteFile, uploadFile } from '@/shared/api/mutations/mutations'
import { getRestaurantId } from '@/shared/api/queries/server/serverQueriesRestaurant'
import { MutationResponse } from '@/shared/types/apiTypes/MutationResponse'
import { Tables } from '@zeco-eats-lib/utils-client'
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
  return start === end ? start : `${start}, ${end}`
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
      time: `${data.openTime}:00-${data.closeTime}:00`,
      active: true,
    })

    if (error) throw error
    return {
      success: true,
      msg: 'Menu created successfully',
    }
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
): Promise<MutationResponse<{ menuId: number } | undefined>> => {
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
          restaurant_id: restaurant.id,
        },
      ])

    if (categoryError) {
      throw new Error('Failed to associate item with categories')
    }

    return {
      success: true,
      msg: 'Menu item created successfully',
      data: {
        menuId: data.menuId,
      },
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

export const updateMenuNameAction = async (
  menuId: number,
  newName: string
): Promise<MutationResponse> => {
  try {
    const supabase = await createSupabaseServer()

    const { error } = await supabase
      .from('restaurant_menus')
      .update({ name: newName })
      .eq('id', menuId)

    if (error) throw error

    return { success: true, msg: 'Menu name updated successfully' }
  } catch (error) {
    console.error('Error updating menu name:', error)
    return { success: false, msg: 'Failed to update menu name' }
  }
}

export const updateMenuStatus = async (
  active: boolean,
  menuId: number
): Promise<MutationResponse<Tables<'restaurant_menus'>[]>> => {
  const supabase = await createSupabaseServer()
  try {
    const restaurant = await getRestaurantId()

    if (!active) {
      const { data: activeMenus, error: activeError } = await supabase
        .from('restaurant_menus')
        .select('id')
        .eq('restaurant_id', restaurant.id)
        .eq('active', true)

      if (activeError) throw activeError

      return {
        success: false,
        msg: 'At least one menu must remain active.',
      }
    }

    const { data, error } = await supabase
      .from('restaurant_menus')
      .update({ active: active })
      .eq('id', menuId)
      .select('*')
      .single()

    if (error || !data) {
      throw error
    }

    const { data: data2, error: error2 } = await supabase
      .from('restaurant_menus')
      .update({ active: false })
      .neq('id', menuId)
      .eq('restaurant_id', restaurant.id)
      .select('*')

    if (error2) throw error

    return {
      success: true,
      msg: 'Menu name updated successfully',
      data: [...data2, data],
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      msg: 'Error changing menu status',
      data: undefined,
    }
  }
}

export async function deleteCategoryFromItemAction(
  menuId: number,
  categoryId: number,
  itemId: number
): Promise<MutationResponse> {
  try {
    const supabase = await createSupabaseServer()
    const { error } = await supabase
      .from('restaurant_menus_categories_items')
      .delete()
      .match({ menu_id: menuId, category_id: categoryId, item_id: itemId })

    if (error) {
      throw error
    }

    return { success: true, msg: 'category removed' }
  } catch (error) {
    console.error('Error deleting menu category item:', error)
    return { success: false, msg: 'Failed to remove category' }
  }
}

export async function addItemToCategoryAction(
  menuId: number,
  categoryId: number,
  itemId: number
): Promise<MutationResponse> {
  try {
    const supabase = await createSupabaseServer()
    const restaurant = await getRestaurantId()
    const { error } = await supabase
      .from('restaurant_menus_categories_items')
      .insert([
        {
          menu_id: menuId,
          category_id: categoryId,
          item_id: itemId,
          restaurant_id: restaurant.id, // Ensure this column exists in your table
        },
      ])

    if (error) {
      throw error
    }

    return { success: true, msg: 'Item added to category' }
  } catch (error) {
    console.error('Error adding item to category:', error)
    return { success: false, msg: 'Failed to remove category' }
  }
}

export async function editMenuSchedule(
  startTime: string,
  endTime: string,
  schedule: string,
  menuId: number
): Promise<MutationResponse> {
  try {
    const supabase = await createSupabaseServer()

    const { error } = await supabase
      .from('restaurant_menus')
      .update({
        open_days: schedule,
        time: `${startTime} - ${endTime}`,
      })
      .eq('id', menuId)

    if (error) throw error

    return { success: true, msg: 'Menu schedule updated successfully' }
  } catch (error) {
    console.error('Error updating menu schedule:', error)
    return { success: false, msg: 'Failed to update menu schedule' }
  }
}
