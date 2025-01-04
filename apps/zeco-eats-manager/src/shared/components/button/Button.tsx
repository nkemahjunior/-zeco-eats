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
  events?: React.DOMAttributes<HTMLButtonElement>
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
  events,
}: fnProps) {
  return (
    <button
      {...events}
      className={`${className} ${roundedCorners} ${font} ${color} ${hoverColor} ${py} ${px} ${textColor} transition-colors duration-300`}
    >
      {children}
    </button>
  )
}
