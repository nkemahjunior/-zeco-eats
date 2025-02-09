interface fnProps {
  children: React.ReactNode
  roundedCorners?: string
  textColor?: string
  color?: string
  hoverColor?: string
  py?: string
  px?: string
  font?: string
  className?: string
  disable?: boolean
  disableColor?: string
  events?: React.DOMAttributes<HTMLButtonElement>
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
}
export default function Button({
  children,
  roundedCorners = 'rounded-lg',
  textColor = 'text-black',
  color = 'bg-background',
  hoverColor = 'hover:bg-backgroundShade1',
  py = 'py-3',
  px = 'px-4',
  font = 'font-medium',
  className = ' ',
  disableColor = '',
  disable = false,
  events,
  attributes,
}: fnProps) {
  return (
    <button
      disabled={disable}
      {...attributes}
      {...events}
      className={`${className} ${roundedCorners} ${font} ${disable ? `${disableColor} pointer-events-none cursor-not-allowed` : `${color} pointer-events-auto cursor-auto`} ${color} ${hoverColor} ${py} ${px} ${textColor} transition-colors duration-300`}
    >
      {children}
    </button>
  )
}
