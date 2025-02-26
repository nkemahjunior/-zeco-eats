import { CartStore, LocationStore } from '@/shared/types/storeTypes/storeTypes'
import { toast } from 'sonner'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { calculateSubtotal } from './storeHelpers'

const initialCartState = {
  restaurant: null,
  cart: null,
  subtotal: 0,
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
            subtotal: calculateSubtotal(updatedCart),
          }
        })
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
      userLocation: null,
      setLocation: (location) => set({ userLocation: location }),
      setToDefault: () =>
        set({
          userLocation: {
            name: 'Buea',
            fullName: 'Buea',
            lat: 4.1567895,
            lon: 9.2315915,
          },
        }),
    }),
    {
      name: 'location-storage',
    }
  )
)
