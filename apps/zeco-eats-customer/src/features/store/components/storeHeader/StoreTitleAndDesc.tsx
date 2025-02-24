'use client'
import Heading from '@/shared/components/text/Heading'
import { Tables } from '@zeco-eats-lib/utils-client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BiRightArrow, BiStar } from 'react-icons/bi'

export default function StoreTitleAndDesc({
  restaurant,
  categories,
}: {
  restaurant: Tables<'restaurant'>
  categories: Tables<'restaurant_categories'>[]
}) {
  const [numOfRatings, setNumOfRatings] = useState(0)
  useEffect(() => {
    setNumOfRatings(Math.floor(Math.random() * 295) + 5)
  }, [])

  return (
    <div className="flex w-full flex-col justify-between space-y-4 text-storeTextColorTint lg:flex-row lg:space-y-0">
      <div className="space-y-2 lg:max-w-[70%]">
        <Heading
          text={restaurant.name || ''}
          style=" text-center lg:text-start"
        />

        <div className="">
          <p className="flex flex-wrap items-center justify-center space-x-1 lg:justify-normal">
            <span className="font-medium text-black">{restaurant.rating}</span>{' '}
            <span>
              {' '}
              <BiStar />
            </span>
            <span className="lg:hidden">
              <Link href={' link to ratings'}>
                <BiRightArrow />
              </Link>
            </span>
            <span className="hidden text-nowrap lg:inline">
              XAF&nbsp; {restaurant.delivery_fee} Delivery fee &middot;
            </span>
            {categories.map((el, i) => (
              <span key={i} className="hidden text-nowrap lg:inline">
                {el.name}&nbsp;&middot;
              </span>
            ))}
          </p>
        </div>
        <p className="hidden lg:block">
          {' '}
          Min Order value for this store is XAF&nbsp;
          {restaurant.min_order_price}
        </p>
      </div>

      <div className="flex h-fit w-full text-nowrap rounded-lg border-[1px] border-solid border-backgroundBorder px-2 py-3 md:justify-center lg:w-auto lg:justify-normal lg:py-1">
        <div className="h-fit border-r-2 border-solid border-backgroundBorder px-8 lg:py-2">
          <p className="font-medium text-black">
            XAF&nbsp;{restaurant.delivery_fee} Delivery fee
          </p>{' '}
          <p>Pricing & fees</p>
        </div>
        <div className="h-fit px-8 lg:py-2">
          <p className="font-medium text-black">
            {restaurant.min_avg_cook_time} - {restaurant.max_avg_cook_time} min
          </p>{' '}
          <p>Delivery Time</p>
        </div>
      </div>
    </div>
  )
}
