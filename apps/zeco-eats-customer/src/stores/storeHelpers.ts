import { CartItem } from '@/shared/types/storeTypes/storeTypes'

export const calculateSubtotal = (cart: CartItem[] | null): number => {
  if (!cart || cart.length === 0) return 0

  const subtotal = cart.reduce((acc, cartItem) => {
    const itemPrice = Number(cartItem.item.price) || 0
    const itemTotal = itemPrice * cartItem.qtyOdered

    const customisationsTotal = cartItem.customisationOptions.reduce(
      (sum, customisation) => {
        const customisationOptionPrice =
          Number(customisation.customisationOption.price) || 0
        return sum + customisationOptionPrice * customisation.qtyOdered
      },
      0
    )

    return acc + itemTotal + customisationsTotal
  }, 0)

  return Number(subtotal.toFixed(2))
}
