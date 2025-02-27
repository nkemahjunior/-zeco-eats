'use client'
import { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import Cart from '../cart/Cart'
import { useCartStore } from '@/stores/globalStore'

export default function CartNavBar({
  roundedBottom,
  mobile,
}: {
  roundedBottom: boolean
  mobile?: boolean
}) {
  const [open, setOpen] = useState(false)

  const numOfCartItems = useCartStore((state) => state.numOfItems)
  const subtotal = useCartStore((state) => state.subtotal)

  return (
    <>
      {' '}
      <div
        className={`flex cursor-pointer items-center justify-evenly ${roundedBottom && 'rounded-bl-xl'} h-full overflow-y-auto bg-[#028643] font-semibold text-white`}
        onClick={() => setOpen(true)}
      >
        <div className="flex h-full items-center border-solid px-4">
          <FaShoppingBasket size={44} />{' '}
        </div>
        <div className="flex h-full items-center text-nowrap border-l-[1px] border-solid border-white px-4 2xl:border-l-2">
          {numOfCartItems}&nbsp; {numOfCartItems === 1 ? 'Item' : 'Items'}
        </div>

        <div className="hidden h-full items-center border-l-[1px] border-solid border-white px-4 md:flex 2xl:border-l-2">
          XAF {subtotal}
        </div>
      </div>
      <Cart open={open} setOpen={setOpen} />
    </>
  )
}
