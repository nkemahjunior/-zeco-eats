'use client'
import { useCartStore } from '@/stores/globalStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileCartBtn() {
  const subtotal = useCartStore((state) => state.subtotal)
  const numItemsOnCart = useCartStore((state) => state.numOfItems)
  const pathname = usePathname()

  return numItemsOnCart > 0 && pathname !== '/cart-mobile' ? (
    <div className="fixed bottom-4 z-[102] flex w-screen justify-center lg:hidden">
      <Link
        href={'/cart-mobile'}
        className="inline-flex w-[90%] justify-center gap-x-2 rounded-lg bg-secondary py-4 text-white"
      >
        <span>{numItemsOnCart}&nbsp;items</span>
        <span>&middot;</span>
        <span>XAF &nbsp;{subtotal}</span>
      </Link>
    </div>
  ) : null
}
