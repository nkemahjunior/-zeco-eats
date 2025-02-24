'use client'
import { useCartStore } from '@/stores/globalStore'
import { BiMinus, BiPlus } from 'react-icons/bi'

export default function CartIncreaseDecreaseQty({
  qty,
  itemId,
}: {
  qty: number
  itemId: number
}) {
  const changeItemQty = useCartStore((state) => state.changeItemQty)
  return (
    <div className="flex items-center space-x-4 rounded-3xl bg-backgroundShade1 px-3 py-2 hover:bg-backgroundShade2">
      <button
        className={`disabled:cursor-not-allowed disabled:bg-background disabled:text-stone-400`}
        onClick={() => changeItemQty(itemId, 'dec')}
        disabled={qty <= 1}
      >
        {' '}
        <span>
          <BiMinus />
        </span>
      </button>
      {/* {selectedQty < min ? null : <p>{selectedQty}</p>} */}
      <p>{qty}</p>

      <button
        className={`disabled:cursor-not-allowed disabled:bg-background disabled:text-stone-400`}
        onClick={() => changeItemQty(itemId, 'inc')}
      >
        <span>
          <BiPlus />
        </span>
      </button>
    </div>
  )
}
