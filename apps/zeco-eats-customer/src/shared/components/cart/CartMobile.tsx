'use client'
import { useCartStore } from '@/stores/globalStore'
import RestaurantTitleCart from './RestaurantTitleCart'
import Line from '../Line'
import CartItem from './CartItem'
import CheckoutButton from './CheckoutButton'
import { BiTrash } from 'react-icons/bi'
import ButtonBackUrl from '../buttons/ButtonBacKUrl'

function CloseClearCartMobile() {
  const clearCart = useCartStore((state) => state.resetCart)

  return (
    <div className="flex w-full items-center justify-between pb-4">
      {/* <CloseBtn setOpen={setOpen} /> */}
      <ButtonBackUrl />

      <button
        className="flex h-[2rem] items-center justify-center space-x-2 rounded-lg bg-background px-4 font-medium text-red-600 transition-colors duration-300 hover:bg-backgroundShade2"
        onClick={clearCart}
      >
        <span>
          <BiTrash />
        </span>
        <span>Clear cart</span>
      </button>
    </div>
  )
}

export default function CartMobile() {
  const cart = useCartStore((state) => state.cart)
  const subtotal = useCartStore((state) => state.subtotal)
  const oderingRestaurant = useCartStore((state) => state.restaurant)
  return (
    <div className="relative h-fit w-full space-y-4">
      <CloseClearCartMobile />
      <Line />
      {oderingRestaurant && (
        <RestaurantTitleCart restaurant={oderingRestaurant} />
      )}
      <Line />

      {cart && cart.length > 0 ? (
        <div className="space-y- divide-y-[1px] divide-backgroundBorder">
          {cart.map((cartItem, i) => (
            <CartItem key={i} item={cartItem} />
          ))}
        </div>
      ) : (
        <div className="-mt-24 flex h-screen items-center justify-center">
          <p>Your card is empty</p>
        </div>
      )}

      <Line />
      <div className="flex items-center justify-between font-semibold text-secondary">
        <span>SubTotal</span>
        <span>XAF {subtotal}</span>
      </div>

      <div className="fixed inset-x-0 bottom-4 z-10 mx-sm md:mx-md">
        <CheckoutButton />
      </div>
    </div>
  )
}
