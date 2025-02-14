'use client'
import Rating from '@/shared/components/ratings/Rating'
import Heading from '@/shared/components/text/Heading'
import RatingLine from './RatingLine'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import { useState } from 'react'
import RatingCard from './RatingCard'
import { LayoutGroup } from 'motion/react'

const ratingLinesNums = [5, 4, 3, 2, 1]
const fakeArr = Array.from({ length: 5 })
export default function Reviews() {
  const [selectedRating, setSelectedRating] = useState('1+ stars')
  return (
    <div className="space-y-10">
      <Heading text="Customer reviews" />

      <div className="flex w-full items-center gap-x-8 xl:w-[40%]">
        <div className="flex flex-col justify-center space-y-1">
          <span className="inline-block text-5xl">4.3</span>
          <Rating rating={4.3} />
          <span className="inline-block">2,000</span>
        </div>
        <div className="w-full space-y-2">
          {ratingLinesNums.map((el, i) => (
            <RatingLine key={i} ratingNum={el} width="w-[60%]" />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-x-2 gap-y-4 md:flex-row md:gap-x-12 xl:w-[60%]">
        <CustomSelect
          inheritWidth
          width="w-full"
          height="h-[10rem]"
          className="justify-center"
          data={[
            { display: '1+ stars', value: '1' },
            { display: '2+ stars', value: '2' },
            { display: '3+ stars', value: '3' },
            { display: '4+ stars', value: '4' },
          ]}
          onchange={(rating: string) => setSelectedRating(rating)}
        />
        <CustomSelect
          inheritWidth
          width="w-full"
          height="h-[8rem]"
          className="justify-center"
          data={[
            { display: 'All', value: 'all' },
            { display: 'Replied', value: 'replied' },
            { display: 'Not replied', value: 'notreplied' },
          ]}
          onchange={(rating: string) => setSelectedRating(rating)}
        />
        <CustomSelect
          inheritWidth
          width="w-full"
          height="h-[8rem]"
          className="justify-center"
          data={[
            { display: 'Today', value: 'today' },
            { display: 'Last week', value: 'lweek' },
            { display: 'Last month', value: 'lmonth' },
          ]}
          onchange={(rating: string) => setSelectedRating(rating)}
        />
      </div>

      <div className="w-full space-y-6 xl:w-[60%]">
        <LayoutGroup>
          {' '}
          {fakeArr.map((_, i) => (
            <RatingCard key={i} rating={i} />
          ))}
        </LayoutGroup>
      </div>
    </div>
  )
}
