'use client'
import CardTitle from '@/shared/components/text/CardTitle'
import ImageContainer from './image/ImageContainer'

interface DishCardProps {
  name: string
  image: string
  minAvgCookTime: number
  maxAvgCookTime: number
  rating: number
}

export default function DishCard({
  name,
  image,
  minAvgCookTime,
  maxAvgCookTime,
  rating,
}: DishCardProps) {
  return (
    <div className="w-full space-y-4 border-0 border-solid border-purple-600">
      <ImageContainer
        imageAlt={`Image of ${name} restaurant`}
        src={image}
        quality={100}
        height="h-[8rem]"
        width="w-full"
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, (min-width: 1024px) 25vw"
        roundedCorners="rounded-lg"
      />
      <div className="flex w-full items-center justify-between border-0 border-solid border-green-600">
        <div className="space-y-1">
          <CardTitle text={name} />
          <p className="text-stone-400">
            {minAvgCookTime}-{maxAvgCookTime} min
          </p>
        </div>

        <div className="rounded-full bg-backgroundShade2 p-2 text-xs">
          {rating}
        </div>
      </div>
    </div>
  )
}
