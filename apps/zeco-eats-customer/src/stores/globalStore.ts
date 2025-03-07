import { CartStore, LocationStore } from '@/shared/types/storeTypes/storeTypes'
import { toast } from 'sonner'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { calculateNumItems, calculateSubtotal } from './storeHelpers'

const initialCartState = {
  restaurant: null,
  cart: null,
  numOfItems: 0,
  subtotal: 0,
}

const defaultLocation = {
  name: 'Buea',
  fullName: 'Buea',
  lat: 4.1567895,
  lon: 9.2315915,
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      ...initialCartState,

      addToCart: (cartItem) => {
        const state = get()

        if (!state.restaurant && !state.cart) {
          const newCart = [cartItem]
          set(() => ({
            restaurant: cartItem.restaurant,
            cart: newCart,
            numOfItems: calculateNumItems(newCart),
            subtotal: calculateSubtotal(newCart),
          }))
          toast.success('Item added to cart')
          return
        }

        if (
          state.restaurant &&
          state.restaurant.id !== cartItem.restaurant.id
        ) {
          toast.error(
            'You can`t order from multiple restaurants at the same time'
          )
          return
        }

        if (
          state.cart &&
          state.cart.some((el) => el.item.id === cartItem.item.id)
        ) {
          toast.error('Item is already in cart')
          return
        }

        const c = state.cart
        if (c) {
          const updatedCart = [...c, cartItem]
          set({
            restaurant: cartItem.restaurant,
            cart: updatedCart,
            numOfItems: calculateNumItems(updatedCart),
            subtotal: calculateSubtotal(updatedCart),
          })
          toast.success('Item added to cart')
        }
      },

      changeItemQty: (itemId, action) => {
        set((state) => {
          if (!state.cart) return state
          const updatedCart = state.cart?.map((item) =>
            item.item.id === itemId
              ? {
                  ...item,
                  qtyOdered:
                    action === 'inc'
                      ? item.qtyOdered + 1
                      : Math.max(1, item.qtyOdered - 1),
                }
              : item
          )

          return {
            cart: updatedCart,
            numOfItems: calculateNumItems(updatedCart),
            subtotal: calculateSubtotal(updatedCart),
          }
        })
      },

      removeFromCart: (itemId) => {
        const state = get()
        if (!state.cart) return

        const updatedCart = state.cart.filter(
          (cartItem) => cartItem.item.id !== itemId
        )

        if (updatedCart.length < 1) {
          set(initialCartState)
          toast.success('Item removed, cart is now empty')
        } else {
          set({
            cart: updatedCart,
            numOfItems: calculateNumItems(updatedCart),
            subtotal: calculateSubtotal(updatedCart),
          })
          toast.success('Item removed from cart')
        }
      },

      resetCart: () => {
        set(initialCartState)
        toast.success('Cart cleared')
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)

export const useLocationStore = create<LocationStore>()(
  persist(
    (set) => ({
      userLocation: defaultLocation,
      setLocation: (location) => set({ userLocation: location }),
      setToDefault: () =>
        set({
          userLocation: defaultLocation,
        }),
    }),
    {
      name: 'location-storage',
    }
  )
)
