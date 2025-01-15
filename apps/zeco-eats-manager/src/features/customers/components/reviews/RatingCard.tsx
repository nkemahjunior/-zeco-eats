'use client'
import Button from '@/shared/components/button/Button'
import ImageContainer from '@/shared/components/image/ImageContainer'
import Rating from '@/shared/components/ratings/Rating'
import { clipText } from '@/shared/utils/clipText'
import { useState } from 'react'

export default function RatingCard({ rating }: { rating: number }) {
  const [expand, setExpand] = useState(false)

  return (
    <div className="border-backgroundBorder h-[22rem] space-y-4 rounded-lg border border-solid p-8">
      <div className="flex items-center gap-x-4">
        <ImageContainer
          imageAlt="picture of customer ---"
          src="/devImages/pic.avif"
          roundedCorners="rounded-full"
          height="h-10"
          width="w-10"
        />

        <span className="font-medium">Lauren Daniels</span>
      </div>
      <div className="flex items-center gap-x-4">
        <Rating rating={rating} />
        <span className="text-textTint">53 people liked</span>
      </div>
      <div className="cursor-pointer">
        {clipText(
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, incidunt omnis doloremque neque maiores perferendis quas eveniet laudantium inventore molestiae. two three four five six seven eight nine ten eleven twelve thirteen fourtheen',
          220
        )}
      </div>

      <div className="space-y-4">
        <textarea
          className="border-backgroundBorder h-20 w-full resize-none rounded-lg border border-solid px-4 py-4"
          placeholder="reply"
        />
        <div className="flex items-center justify-end">
          <Button
            color="bg-secondary"
            hoverColor="hover:bg-secondaryTint"
            textColor="text-white"
            px="px-16"
          >
            Reply
          </Button>
        </div>
      </div>
    </div>
  )
}
