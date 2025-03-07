'use client'
import { BiTrash } from 'react-icons/bi'
import CloseBtn from '../buttons/CloseBtn'
import { useCartStore } from '@/stores/globalStore'

export default function CloseClearCart({
  setOpen,
}: {
  setOpen: (arg: boolean) => void
}) {
  const clearCart = useCartStore((state) => state.resetCart)

  return (
    <div className="flex w-full items-center justify-between pb-4">
      <CloseBtn setOpen={setOpen} />

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
