export default function Stat({
  amount,
  stat,
  noBorder,
}: {
  amount: number
  stat: string
  noBorder?: boolean
}) {
  return (
    <div
      className={`flex w-full flex-col items-center py-8 xl:px-4 xl:py-0 ${!noBorder && 'border-b-2 border-solid border-white xl:border-b-0 xl:border-r-2'} text-white`}
    >
      <p className="text-6xle text-nowrap text-2xl font-light">{amount}+</p>
      <p className="text-nowrap text-lg font-medium">{stat}</p>
    </div>
  )
}
