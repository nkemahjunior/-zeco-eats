import { DOMAttributes, InputHTMLAttributes } from 'react'
import { CiSearch } from 'react-icons/ci'

interface fnProps {
  id: string
  icon?: React.ReactNode
  attributes?: InputHTMLAttributes<HTMLInputElement>
  events?: DOMAttributes<HTMLInputElement>
  placeHolder?: string
  className?: string
  width?: string
  height?: string
  rounded?: string
  bg?: string
}

export default function TextInputWithIcon({
  id,
  icon = <CiSearch size={20} />,
  attributes,
  events,
  placeHolder = 'Search..',
  className,
  width = 'w-full',
  height = 'h-[2.5rem]',
  rounded = 'rounded-lg',
  bg = 'bg-background',
}: fnProps) {
  return (
    <div
      className={`has-[:focus]:border-secondary ${bg} flex ${width} ${height} items-center space-x-2 ${rounded} ${className} border-2 border-solid border-transparent px-4 has-[:focus]:bg-white`}
    >
      <span className="block">{icon}</span>
      <input
        id={id}
        {...attributes}
        placeholder={placeHolder}
        {...events}
        type="text"
        className={`w-full bg-inherit placeholder-black outline-none`}
      />
    </div>
  )
}
