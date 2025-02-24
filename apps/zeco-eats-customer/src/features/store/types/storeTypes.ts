import { Tables } from '@zeco-eats-lib/utils-client'

export interface RestaurantCompleteMenuMap {
  category: { id: number; name: string }
  items: Map<number, ItemMap>
}

export interface ItemMap {
  item: Tables<'restaurant_items'>
  customisations: Map<number, Customisation>
}

export interface Customisation {
  customisation: Tables<'customisations'>
  customisation_Options: Tables<'customisation_options'>[]
}

export interface Item {
  item: Tables<'restaurant_items'>
  customisations: Customisation[]
}

export type SelectionType = 'single' | 'multipleSingles' | 'multiplesMultiples'

export interface SelectedCustomisation {
  parentCustomisationId: number
  qty: number
  selectedOption: Tables<'customisation_options'>
}
