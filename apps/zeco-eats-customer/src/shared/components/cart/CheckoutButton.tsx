'use client'

import { useCartStore } from '@/stores/globalStore'
import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export default function CheckoutButton() {
  const cart = useCartStore((state) => state.cart)
  const subtotal = useCartStore((state) => state.subtotal)
  const [loading, setLoading] = useState(false)
  const supabase = createSupabaseClient()
  const router = useRouter()

  const handleCheckout = async () => {
    const user = await supabase.auth.getUser()
    if (!user.data.user) return router.push('/auth/signin')
    if (!cart || cart.length === 0) return toast.error('Your cart is empty')
    if (subtotal < Number(cart.at(0)?.restaurant.min_order_price))
      return toast.error(
        `You need to add more items to reach the restaurant's minimum order price.`
      )
    setLoading(true)

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems: cart }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId })
      }
    } catch (error) {
      toast.error('Failed to initiate checkout')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      className={`absolute bottom-0 flex h-[3.5rem] w-full items-center justify-center rounded-lg font-semibold text-white transition-colors duration-300 ${loading || cart?.length === 0 ? 'pointer-events-none bg-secondary/30' : 'bg-secondary hover:bg-secondaryTint'} `}
      onClick={handleCheckout}
    >
      <span>{loading ? 'Processing...' : 'Go to checkout'}</span>
    </button>
  )
}
