'use client'
import {
  ControlSelectedQtyContext,
  controlSelectedQtyTypes,
} from '@/features/store/contexts/ControlSelectedQtyProvider'
import { useContext, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

interface fnProps {
  max: number
  min: number
  onIncDecrease: (qty: number) => void
}

export default function DecreaseIncreaseQty({
  max,
  min,
  onIncDecrease,
}: fnProps) {
  const { SelectionMinMax, totalSelected, setTotalSelected } = useContext(
    ControlSelectedQtyContext
  ) as controlSelectedQtyTypes

  const [selectedQty, setSelectedQty] = useState(0)

  const increaseSelectedQty = () => {
    if (totalSelected >= SelectionMinMax.max) return
    if (selectedQty >= max) return

    const sQty = selectedQty + 1
    setSelectedQty(sQty)
    setTotalSelected(totalSelected + 1)
    onIncDecrease(sQty)
  }

  const decreaseSelectedQty = () => {
    if (totalSelected < SelectionMinMax.min) return
    if (selectedQty < min) return

    const sQty = selectedQty - 1
    setSelectedQty(sQty)
    setTotalSelected(totalSelected - 1)
    onIncDecrease(sQty)
  }

  return (
    <div className="flex items-center space-x-4">
      <button
        className={`flex items-center justify-center rounded-full bg-backgroundShade1 p-2 transition-colors duration-300 hover:bg-backgroundShade2 disabled:hidden disabled:cursor-not-allowed disabled:text-stone-400`}
        onClick={decreaseSelectedQty}
        disabled={selectedQty < min}
      >
        {' '}
        <span>
          <BiMinus />
        </span>
      </button>
      {selectedQty < min ? null : <p>{selectedQty}</p>}

      <button
        className={`flex items-center justify-center rounded-full bg-backgroundShade1 p-2 transition-colors duration-300 hover:bg-backgroundShade2 disabled:cursor-not-allowed disabled:bg-background disabled:text-stone-400`}
        onClick={increaseSelectedQty}
        disabled={totalSelected >= SelectionMinMax.max || selectedQty >= max}
      >
        <span>
          <BiPlus />
        </span>
      </button>
    </div>
  )
}
