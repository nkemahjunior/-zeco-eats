export default function Option() {
  return (
    <div className="border-backgroundBorder flex flex-col justify-center rounded-lg border border-solid p-4">
      <span className="text-base font-medium">Option 1 Option</span>

      <div className="flex items-center gap-x-2">
        <span className="text-textTint">Min Qty: 1</span>
        <span className="text-textTint">Max Qty: 5</span>
      </div>
      <span className="text-textTint">Unit price: £2</span>
    </div>
  )
}
