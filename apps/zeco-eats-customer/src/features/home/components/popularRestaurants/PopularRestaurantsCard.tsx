import CardTitle from '@/shared/components/text/CardTitle'
import { Shimmer } from '@zeco-eats-lib/utils-client'
import Image from 'next/image'
import { useState } from 'react'

type PopularRestaurantsCardProps = {
  name: string
  image: string
}

export default function PopularRestaurantsCard({
  name,
  image,
}: PopularRestaurantsCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg border-2 border-solid border-backgroundBorder">
      <div className="relative h-[12rem] w-full md:h-[13rem] lg:h-[20rem] xl:h-[18rem] 2xl:h-[14rem]">
        {isLoading && (
          <Shimmer className="absolute left-0 top-0 h-full w-full rounded-lg" />
        )}
        <Image
          alt={`Picture of ${name}`}
          src={image}
          quality={100}
          style={{
            objectFit: 'cover',
            display: isLoading ? 'none' : 'block',
          }}
          fill
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="flex h-[4rem] items-center bg-primary">
        <div className="ml-2 2xl:ml-4">
          <CardTitle text={name} textColor="text-white" />
        </div>
      </div>
    </div>
  )
}
