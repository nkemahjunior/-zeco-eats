'use client'
import { useCartStore } from '@/stores/globalStore'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

export default function CartIncreaseDecreaseQty({
  qty,
  itemId,
}: {
  qty: number
  itemId: number
}) {
  const changeItemQty = useCartStore((state) => state.changeItemQty)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  return (
    <div className="flex items-center space-x-4 rounded-3xl bg-backgroundShade1 px-3 py-2 hover:bg-backgroundShade2">
      <button
        onClick={() =>
          qty > 1 ? changeItemQty(itemId, 'dec') : removeFromCart(itemId)
        }
      >
        <span>{qty > 1 ? <BiMinus /> : <MdDelete />}</span>
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
