interface fnProps {
  children: React.ReactNode
  roundedCorners?: string
  textColor?: string
  color?: string
  hoverColor?: string
  justify?: string
  height?: string
  width?: string
  font?: string
  gapX?: string
  className?: string
  events?: React.DOMAttributes<HTMLButtonElement>
  disable?: boolean
  disableColor?: string
  ariaAttributes?: React.HtmlHTMLAttributes<HTMLButtonElement>
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
}
export default function ButtonWithIcon({
  children,
  roundedCorners = 'rounded-lg',
  textColor = 'text-black',
  color = 'bg-background',
  hoverColor = 'hover:bg-backgroundShade1',
  justify = 'justify-center',
  height = 'h-[2.5rem]',
  width = 'w-full',
  font = 'font-medium',
  className = ' ',
  gapX = 'gap-x-2',
  events,
  disableColor = '',
  disable = false,
  ariaAttributes,
  attributes,
}: fnProps) {
  return (
    <button
      disabled={disable}
      {...attributes}
      role=""
      {...ariaAttributes}
      {...events}
      className={`${className} ${disable ? `${disableColor} pointer-events-none` : `${color} pointer-events-auto`} ${roundedCorners} ${font} ${hoverColor} ${height} ${width} flex items-center ${justify} ${gapX} ${textColor} transition-colors duration-300`}
    >
      {children}
    </button>
  )
}
