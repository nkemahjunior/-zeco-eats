import Link from 'next/link'

interface fnProps {
  text1Size?: string
  color?: string
}

export default function Logo({
  text1Size = 'text-xl',
  color = 'text-secondary',
}: fnProps) {
  return (
    <Link href={'/home'}>
      <div className={`p-2e font-extrabold ${color}`}>
        <div className={`${text1Size}`}>Zeco Eats</div>
        {/* <div
        className={`-rotate-90 bg-primary px-[0.20rem] ${padding} ${text2Size}`}
      >
        cm
      </div> */}
      </div>
    </Link>
  )
}
