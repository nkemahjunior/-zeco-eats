'use client'
import ImageSkeleton from '@/shared/components/skeletons/ImageSkeleton'
import Image from 'next/image'
import { useState } from 'react'
import { useStoreId } from '../../hooks/useStoreId'
import BookmarkStore from '@/features/store/components/storeBookmarks/BookmarkStore'

export default function StoreHeaderImage({ image }: { image: string }) {
  const [loading, setLoading] = useState(true)
  const storeId = useStoreId()
  return (
    <div className="w-full">
      <div className="relative h-[8rem] w-full lg:h-[20rem] lg:overflow-hidden lg:rounded-lg">
        <div className="absolute right-2 top-2 z-[2]">
          <BookmarkStore storeId={Number(storeId)} />
        </div>
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
          sizes="(max-width: 1023px) 100vw, (min-width: 1024px) 90vw"
          priority
        />
      </div>
    </div>
  )
}
