interface fnProps {
  paddingLeft: number
  infoName: string
  price: string
}
export default function PayoutBreakdownInfoLastRow({
  paddingLeft,
  infoName,
  price,
}: fnProps) {
  return (
    <div
      className="border-backgroundBorder ml-2 flex items-center justify-between border-b border-solid py-4"
      style={{ paddingLeft: `${paddingLeft}rem` }}
    >
      <span>{infoName}</span>
      <span>{price}</span>
    </div>
  )
}
