import CardTitle from '@/shared/components/text/CardTitle'
import Image from 'next/image'
import { useState } from 'react'
import ImageSkeleton from '../../../../shared/components/skeletons/ImageSkeleton'

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
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="w-full space-y-4 border-0 border-solid border-purple-600">
      <div className="relative h-[8rem] w-full overflow-hidden rounded-lg border-0 border-solid border-red-600">
        {isLoading && <ImageSkeleton />}
        <Image
          alt={`Image of ${name}`}
          src={image}
          fill
          quality={100}
          style={{
            objectFit: 'cover',
            display: isLoading ? 'none' : 'block',
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
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
