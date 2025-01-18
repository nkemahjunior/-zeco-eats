import { MdKeyboardArrowRight } from 'react-icons/md'

interface fnProps {
  expand: boolean
  paddingLeft: number
  infoName: string
  price: string
}

export default function PayoutBreakdownInfoNestedRow({
  expand,
  paddingLeft,
  infoName,
  price,
}: fnProps) {
  return (
    <div
      className={`border-backgroundBorder flex items-center justify-between border-b border-solid py-4`}
      style={{ paddingLeft: `${paddingLeft}rem` }}
    >
      <div className="flex items-center gap-x-2">
        <span
          className={`transition-transform duration-200 ${expand ? 'rotate-90' : 'rotate-0'}`}
        >
          <MdKeyboardArrowRight size={20} />
        </span>
        <span>{infoName}</span>
      </div>
      <div>{price}</div>
    </div>
  )
}
