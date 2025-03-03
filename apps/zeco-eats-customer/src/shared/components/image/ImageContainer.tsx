'use client'
import Image from 'next/image'
import { MutableRefObject, useState } from 'react'
import ImageSkeleton from '../skeletons/ImageSkeleton'

interface FnProps {
  height: string
  width: string
  src: string
  imageAlt: string
  quality?: number
  sizes?: string
  priority?: boolean
  roundedCorners?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  events?: React.DOMAttributes<HTMLImageElement>
  ref?: MutableRefObject<HTMLImageElement | null>
  style?: React.CSSProperties
  className?: string
}

export default function ImageContainer({
  height,
  width,
  src,
  imageAlt,
  quality = 75,
  sizes,
  priority = false,
  events,
  roundedCorners,
  objectFit = 'cover',
  ref,
  style,
  className,
}: FnProps) {
  const [loading, setLoading] = useState(true)
  return (
    <div
      className={`relative ${height} ${width} overflow-hidden ${roundedCorners} transition-opacity duration-300 ${
        loading ? 'opacity-0' : 'opacity-100'
      } ${className} `}
    >
      {loading && <ImageSkeleton />}
      <Image
        ref={ref}
        {...events}
        src={src}
        alt={imageAlt}
        fill
        quality={quality}
        sizes={sizes}
        priority={priority}
        style={{
          objectFit: objectFit,
          ...style,
        }}
        onLoad={() => setLoading(false)}
      />
    </div>
  )
}
