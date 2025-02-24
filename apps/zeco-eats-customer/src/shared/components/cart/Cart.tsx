'use client'
import ModalOverlayR from '../modal/ModalOverlayR'
import RestaurantTitleCart from './RestaurantTitleCart'
import Line from '../Line'
import CartItem from './CartItem'
import CloseClearCart from './CloseClearCart'
import { AnimatePresence, motion } from 'motion/react'
import { useCartStore } from '@/stores/globalStore'

interface fnProps {
  open: boolean
  setOpen: (arg: boolean) => void
}

export default function Cart({ open, setOpen }: fnProps) {
  const cart = useCartStore((state) => state.cart)
  const subtotal = useCartStore((state) => state.subtotal)
  const oderingRestaurant = useCartStore((state) => state.restaurant)
  return (
    <AnimatePresence>
      {open && (
        <ModalOverlayR open={open} setOpen={setOpen} controlChildren>
          <motion.div
            initial={{ translateX: '100%' }}
            animate={{ translateX: '0%' }}
            exit={{ translateX: '100%' }}
            transition={{ duration: 0.3, ease: 'linear' }}
            className="absolute right-0 h-full w-[30%] overflow-y-auto bg-white px-4 py-4"
          >
            <div className="relative h-full w-full space-y-4">
              <CloseClearCart setOpen={setOpen} />
              {oderingRestaurant && (
                <RestaurantTitleCart restaurant={oderingRestaurant} />
              )}
              <Line />
              <div className="space-y- divide-y-[1px] divide-backgroundBorder">
                {cart &&
                  cart.map((cartItem, i) => (
                    <CartItem key={i} item={cartItem} />
                  ))}
              </div>
              <Line />
              <div className="flex items-center justify-between font-semibold text-secondary">
                <span>SubTotal</span>
                <span>XAF {subtotal}</span>
              </div>
              <button className="absolute bottom-0 flex h-[3.5rem] w-full items-center justify-center rounded-lg bg-secondary font-semibold text-white transition-colors duration-300 hover:bg-secondaryTint">
                <span>Go to checkout</span>
              </button>
            </div>
          </motion.div>
        </ModalOverlayR>
      )}
    </AnimatePresence>
  )
}
