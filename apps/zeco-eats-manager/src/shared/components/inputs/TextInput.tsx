import { DOMAttributes, InputHTMLAttributes } from 'react'

interface fnProps {
  id: string
  name?: string
  attributes?: InputHTMLAttributes<HTMLInputElement>
  events?: DOMAttributes<HTMLInputElement>
  placeHolder?: string
  placeHolderColor?: string
  className?: string
  px?: string
  width?: string
  height?: string
  rounded?: string
  bg?: string
  focusBorderColor?: string
  focusBg?: string
  disable?: boolean
}

export default function TextInput({
  id,
  name,
  attributes,
  events,
  placeHolder = '',
  placeHolderColor = 'placeholder-stone-700',
  className,
  px = 'px-2',
  width = 'w-full',
  height = 'h-[2.5rem]',
  rounded = 'rounded-lg',
  bg = 'bg-background',
  focusBorderColor = 'focus:border-secondary',
  focusBg = 'focus:bg-white',
  disable = false,
}: fnProps) {
  return (
    <input
      disabled={disable}
      id={id}
      name={name}
      {...attributes}
      placeholder={placeHolder}
      {...events}
      type="text"
      className={`${focusBorderColor} ${disable ? `pointer-events-none` : 'pointer-events-auto'} ${focusBg} ${width} ${height} ${rounded} border-2 border-solid border-transparent ${bg} ${px} ${className} ${placeHolderColor}`}
    />
  )
}
