'use client'
import ImageSkeleton from '@/shared/components/skeletons/ImageSkeleton'
import Image from 'next/image'
import { useState } from 'react'

export default function StoreHeaderImage({ image }: { image: string }) {
  const [loading, setLoading] = useState(true)
  return (
    <div className="w-full">
      <div className="relative h-[8rem] w-full lg:h-[20rem] lg:overflow-hidden lg:rounded-lg">
        {loading && <ImageSkeleton />}
        <Image
          src={`${image}`}
          alt="header picture of this restaurant"
          fill
          quality={100}
          style={{
            objectFit: 'cover',
          }}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  )
}
