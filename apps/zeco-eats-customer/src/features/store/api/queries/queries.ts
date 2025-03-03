import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import {
  Item,
  ItemMap,
  RestaurantCompleteMenuMap,
} from '../../types/storeTypes'
import {
  validateAndGetUserClient,
  validateAndGetUserServer,
} from '@/shared/api/queries/server/serverQueries'

export const getRestaurantById = async (id: number) => {
  const supabase = await createSupabaseServer()

  const { data, error } = await supabase
    .from('restaurant')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching restaurant:', error)
    return null
  }

  return data
}

export const getRestaurantCategories = async (id: number) => {
  const supabase = await createSupabaseServer()

  const { data, error } = await supabase
    .from('restaurant_categories')
    .select('*')
    .eq('restaurant_id', id)

  if (error) {
    console.error('Error fetching restaurant categories:', error)
    return null
  }

  return data
}

export const getCompleteRestaurantMenu = async (restaurantId: number) => {
  const supabase = await createSupabaseServer()

  const { data, error } = await supabase
    .from('restaurant_menu_all')
    .select(
      `
        *,
        menu_id:restaurant_menus (id, name, time),
        category_id:restaurant_categories (id, name),
        item_id:restaurant_items (*),
        customisation_id:customisations (*),
        customisation_option_id:customisation_options (*)
      `
    )
    .eq('restaurant_id', restaurantId)

  if (error) throw error

  return transformRestaurantMenuData(data)
}

function transformRestaurantMenuData(data: any) {
  const categoriesMap: Map<number, RestaurantCompleteMenuMap> = new Map()

  for (const row of data) {
    if (!row?.category_id || !row?.item_id) continue
    const {
      category_id: curCategory,
      item_id: curItem,
      customisation_id: curCustomisation,
      customisation_option_id: curCustomisationOption,
    } = row

    if (!categoriesMap.has(curCategory.id)) {
      categoriesMap.set(curCategory.id, {
        category: {
          id: curCategory.id,
          name: curCategory.name || '',
        },
        items: new Map(),
      })
    }

    const curCategoryItems = categoriesMap.get(curCategory.id)?.items

    if (!curCategoryItems?.has(curItem.id)) {
      curCategoryItems?.set(curItem.id, {
        item: curItem,
        customisations: new Map(),
      })
    }

    const curCategoryItemCus = curCategoryItems?.get(curItem.id)?.customisations
    if (!curCustomisation || !curCustomisationOption) continue

    if (!curCategoryItemCus?.has(curCustomisation.id)) {
      curCategoryItemCus?.set(curCustomisation.id, {
        customisation: curCustomisation,
        customisation_Options: [],
      })
    }

    curCategoryItemCus
      ?.get(curCustomisation.id)
      ?.customisation_Options.push(curCustomisationOption)
  }

  return {
    menu: {
      id: data[0].menu_id.id,
      name: data[0].menu_id.name,
      time: data[0].menu_id.time,
    },
    categories: Array.from(categoriesMap.values()).map(
      ({ category, items }, i) => ({
        category: {
          id: category.id,
          name: category.name,
        },
        items: Array.from(items.values()).map(({ item, customisations }) => ({
          item: item,
          customisations: Array.from(customisations.values()),
        })),
      })
    ),
  }
}

export const getItemAndCustomisations = async (itemId: number) => {
  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from('restaurant_menu_all')
    .select(
      `
        item_id:restaurant_items (*),
        customisation_id:customisations (*),
        customisation_option_id:customisation_options (*)
      `
    )
    .eq('item_id', itemId)

  if (error) {
    console.log(error)
    throw error
  }

  return transformItemData(data)
}

function transformItemData(data: any): Item {
  const itemsMap: Map<number, ItemMap> = new Map()
  for (const row of data) {
    if (!row.item_id) throw new Error('no item')

    const {
      item_id: item,
      customisation_id: customisation,
      customisation_option_id: option,
    } = row

    if (!itemsMap.has(item.id)) {
      itemsMap.set(item.id, {
        item: item,
        customisations: new Map(),
      })
    }

    const curCustomisationMap = itemsMap.get(item.id)?.customisations
    if (!customisation || !option) continue

    if (!curCustomisationMap?.has(customisation.id)) {
      curCustomisationMap?.set(customisation.id, {
        customisation: customisation,
        customisation_Options: [],
      })
    }

    const optionArr = curCustomisationMap?.get(
      customisation.id
    )?.customisation_Options
    optionArr?.push(option)
  }

  const map = itemsMap.get(data[0].item_id?.id || -1)
  if (!map) throw new Error('no item map')

  return {
    item: map.item,
    customisations: Array.from(map.customisations.values()),
  }
}

export const getUserFavouriteStores = async (storeId: number) => {
  const supabase = createSupabaseClient()

  const user = await validateAndGetUserClient()

  const { data, error } = await supabase
    .from('user_favourite_stores')
    .select('*')
    .eq('user_id', user.id)
    .eq('store_id', storeId)
    .single()

  if (error) {
    throw error
  }

  return data
}
