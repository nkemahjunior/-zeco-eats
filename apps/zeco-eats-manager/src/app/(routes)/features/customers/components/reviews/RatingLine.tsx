export default function RatingLine({
  ratingNum,
  width,
}: {
  ratingNum: number
  width: string
}) {
  return (
    <div className="flex items-center gap-x-3">
      <span>{ratingNum}</span>
      <span className="bg-backgroundShade1 block h-2 w-full">
        <span className={`bg-primary block h-2 ${width}`}></span>
      </span>
    </div>
  )
}
