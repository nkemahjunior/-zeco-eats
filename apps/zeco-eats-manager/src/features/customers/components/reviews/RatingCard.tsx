'use client'
import Button from '@/shared/components/button/Button'
import ImageContainer from '@/shared/components/image/ImageContainer'
import Rating from '@/shared/components/ratings/Rating'
import { clipText } from '@/shared/utils/clipText'
import { useState } from 'react'
import { motion } from 'motion/react'

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, incidunt omnis doloremque neque maiores perferendis quas eveniet laudantium inventore molestiae. two three four five six seven eight nine ten eleven twelve thirteen fourtheen Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, incidunt omnis doloremque neque maiores perferendis quas eveniet laudantium inventore molestiae. two three four five six seven eight nine ten eleven twelve thirteen fourtheen Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, incidunt omnis doloremque neque maiores perferendis quas eveniet laudantium inventore molestiae. two three four five six seven eight nine ten eleven twelve thirteen fourtheen'

const opacityVariants = {
  visible: {
    opacity: [0, 1],
    transition: {
      opacity: { duration: 0.5, ease: 'linear' },
    },
  },
  hidden: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.5, ease: 'linear' },
    },
  },
}

export default function RatingCard({ rating }: { rating: number }) {
  const [expandReview, setExpandReview] = useState(false)
  const [expandReply, setExpandReply] = useState(false)

  return (
    <motion.div
      className="border-backgroundBorder space-y-4 rounded-lg border border-solid p-8"
      layout
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="space-y-4"
        layout="position"
        transition={{ duration: 0.3 }}
      >
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
      </motion.div>

      <motion.div
        initial="hidden"
        animate={expandReview ? 'visible' : 'hidden'}
        variants={opacityVariants}
        className="cursor-pointer"
        onClick={() => setExpandReview((prev) => !prev)}
      >
        {expandReview ? text : clipText(text, 220)}
      </motion.div>

      <motion.div
        initial="hidden"
        animate={expandReply ? 'visible' : 'hidden'}
        variants={opacityVariants}
        className="cursor-pointer space-y-2"
        onClick={() => setExpandReply((prev) => !prev)}
      >
        <p className="font-medium">Your reply</p>
        <p>{expandReply ? text : clipText(text, 220)}</p>
      </motion.div>

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
    </motion.div>
  )
}
