import { useDishInfoModal } from './provider/DishInfoModalProvider'
export default function QuantityModal() {
  const { updateNumSelectedItems } = useDishInfoModal()
  const numbers = Array.from({ length: 50 }, (_, i) => i + 1)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const qty = Number(event.target.value)
    updateNumSelectedItems(qty)
  }

  return (
    <div className="space-y-2">
      <p className="text-storeTextColorTint">You may be charged for extras</p>

      <div className="flex w-[5rem] items-center justify-center rounded-lg bg-backgroundShade1">
        <select className="w-[85%] py-2 outline-none" onChange={handleChange}>
          {numbers.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
