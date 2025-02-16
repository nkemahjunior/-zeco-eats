'use client'
import { useState } from 'react'
import CardTitle from '@/shared/components/text/CardTitle'
import Image from 'next/image'

interface fnProps {
  name: string
  image: string
  numRestaurants: number
}

export default function PopularCategoriesCard({
  name,
  image,
  numRestaurants,
}: fnProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg border-2 border-solid border-backgroundBorder">
      <div className="relative h-[12rem] w-full md:h-[13rem] lg:h-[20rem] xl:h-[18rem] 2xl:h-[14rem]">
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute left-0 top-0 h-full w-full animate-pulse bg-gray-300" />
        )}

        <Image
          alt={`Picture of ${name}`}
          src={image}
          quality={100}
          style={{
            objectFit: 'cover',
          }}
          fill
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="flex h-[4rem] items-center bg-inherit md:h-[5rem] xl:bg-background">
        <div className="ml-2 2xl:ml-4">
          <CardTitle text={name} textColor="text-secondary " />
          <p className="text-primary">{numRestaurants} Restaurants</p>
        </div>
      </div>
    </div>
  )
}
