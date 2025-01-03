import { DOMAttributes, InputHTMLAttributes } from 'react'

interface fnProps {
  id: string
  attributes?: InputHTMLAttributes<HTMLInputElement>
  events?: DOMAttributes<HTMLInputElement>
  placeHolder?: string
  className?: string
  px?: string
  width?: string
  height?: string
  rounded?: string
  bg?: string
  focusBorderColor?: string
  focusBg?: string
}

export default function TextInput({
  id,
  attributes,
  events,
  placeHolder = '',
  className,
  px = 'px-2',
  width = 'w-full',
  height = 'h-[2.5rem]',
  rounded = 'rounded-lg',
  bg = 'bg-background',
  focusBorderColor = 'focus:border-secondary',
  focusBg = 'focus:bg-white',
}: fnProps) {
  return (
    <input
      id={id}
      {...attributes}
      placeholder={placeHolder}
      {...events}
      type="text"
      className={`${focusBorderColor} ${focusBg} ${width} ${height} ${rounded} border-2 border-solid border-transparent ${bg} ${px} ${className}`}
    />
  )
}
