import { z } from 'zod'
import { categorySchema, itemSchema, menuSchema } from './schemas/menuSchemas'
import { Tables } from '@zeco-eats-lib/utils-client'

export type Menu = z.infer<typeof menuSchema>
export type Category = z.infer<typeof categorySchema>
export type MenuItem = z.infer<typeof itemSchema>
// export type MenuCategorieItem = Tables<'restaurant_menus_categories_items'> & {
//   restaurant_menus: Tables<'restaurant_menus'>
//   restaurant_items: Tables<'restaurant_items'>
//   restaurant_categories: Tables<'restaurant_categories'>
// }

export interface MenuCategorieItem {
  category: Tables<'restaurant_categories'>
  items: Tables<'restaurant_items'>[]
}
