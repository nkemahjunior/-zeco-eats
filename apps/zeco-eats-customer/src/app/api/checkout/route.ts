import { CartItem } from '@/shared/types/storeTypes/storeTypes'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { NextResponse } from 'next/server'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServer()
    const user = await supabase.auth.getUser()
    if (!user.data.user) throw new Error('unauthenticated user')

    const url = new URL(request.url)
    const origin = url.origin

    const { cartItems }: { cartItems: CartItem[] } = await request.json()

    // Map cart items to Stripe line items
    const lineItems = createLineItems(cartItems)

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: user.data.user?.email,
      line_items: lineItems,
      mode: 'payment',
      automatic_tax: { enabled: true },
      success_url: `${origin}/payment-succesful`,
      cancel_url: `${origin}/store/${cartItems.at(0)?.restaurant.id}`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

function createLineItems(cartItems: CartItem[]) {
  const lineItems = cartItems.map((item: CartItem) => {
    const customizationsTotalPrice = item.customisationOptions.reduce(
      (sum, customization) => {
        const customizationPrice =
          Number(customization.customisationOption.price) || 0
        return sum + customizationPrice * customization.qtyOdered
      },
      0
    )

    const unitAmount = Math.round(
      Number(item.item.price) + customizationsTotalPrice
    )

    return {
      price_data: {
        currency: 'xaf',
        product_data: {
          name: item.item.name,
          images: item.item.image_url ? [item.item.image_url] : [],
        },
        unit_amount: unitAmount,
      },
      quantity: item.qtyOdered,
    }
  })

  return lineItems
}
