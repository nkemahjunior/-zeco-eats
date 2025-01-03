import { BiMinus, BiPlus } from 'react-icons/bi'

export default function CartIncreaseDecreaseQty() {
  return (
    <div className="flex items-center space-x-4 rounded-3xl bg-backgroundShade1 px-3 py-2 hover:bg-backgroundShade2">
      <button
        className={`disabled:hidden disabled:cursor-not-allowed disabled:text-stone-400`}
        //   onClick={decreaseSelectedQty}
        //   disabled={selectedQty < min}
      >
        {' '}
        <span>
          <BiMinus />
        </span>
      </button>
      {/* {selectedQty < min ? null : <p>{selectedQty}</p>} */}
      <p>1</p>

      <button
        className={`disabled:cursor-not-allowed disabled:bg-background disabled:text-stone-400`}
        //   onClick={increaseSelectedQty}
        //   disabled={totalSelected >= SelectionMinMax.max || selectedQty >= max}
      >
        <span>
          <BiPlus />
        </span>
      </button>
    </div>
  )
}
