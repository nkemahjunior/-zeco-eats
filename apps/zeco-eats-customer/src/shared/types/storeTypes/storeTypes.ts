import { Tables } from '@zeco-eats-lib/utils-client'

export interface CartCustomisation {
  customisationOption: Tables<'customisation_options'>
  qtyOdered: number
}
export interface CartItem {
  restaurant: Tables<'restaurant'>
  item: Tables<'restaurant_items'>
  qtyOdered: number
  customisationOptions: CartCustomisation[]
}

export interface CartStore {
  restaurant: Tables<'restaurant'> | null
  cart: CartItem[] | null
  subtotal: number
  addToCart: (cartItem: CartItem) => void
  changeItemQty: (itemId: number, action: 'inc' | 'dec') => void
  resetCart: () => void
}
