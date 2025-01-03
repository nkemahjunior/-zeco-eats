import { FaLocationDot } from 'react-icons/fa6'

interface fnProps {
  iconSize: number
}

export default function UserLocation({ iconSize }: fnProps) {
  return (
    <div>
      <div className="flex items-baseline space-x-4 font-medium">
        <span className=" ">
          <FaLocationDot size={iconSize} />
        </span>
        <p className="hidden 2xl:block">Regen Street, A4, A420K, London</p>
        <p className="2xl:hidden">Regen Street, A4...</p>
        <button className="font-semibold text-primary underline">
          Change Location
        </button>
      </div>
    </div>
  )
}
