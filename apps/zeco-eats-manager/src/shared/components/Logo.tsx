interface fnProps {
  color1?: string
  color2?: string
}

export default function Logo({
  color1 = 'text-secondary',
  color2 = 'text-primary',
}: fnProps) {
  return (
    <div className="font-extrabold">
      <div className={`${color1} text-nowrap text-xl`}>
        Zeco <span className={`${color2}`}>Eats</span> Manager
      </div>
    </div>
  )
}
