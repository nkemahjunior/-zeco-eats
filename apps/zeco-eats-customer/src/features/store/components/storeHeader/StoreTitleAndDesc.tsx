import Heading from '@/shared/components/text/Heading'
import Link from 'next/link'
import { BiRightArrow, BiStar } from 'react-icons/bi'

export default function StoreTitleAndDesc() {
  const restaurantKeywords = [
    // use this info to search for restaurants on the platform
    'Pizza',
    'American',
    'Italian',
    'Pasta',
    'Burgers',
    'Kebab',
    'Chicken',
    'Fried Chicken',
    'Halal',
    'Vegetarian',
    'Vegan Friendly',
    'Kids Friendly',
    'Sandwich',
    'Wraps',
    'Wings',
    'Salads',
    'Drinks',
    'Desserts',
    'Family Meals',
    'Children',
  ]

  return (
    <div className="flex w-full flex-col justify-between space-y-4 text-storeTextColorTint lg:flex-row lg:space-y-0">
      <div className="space-y-2 lg:max-w-[70%]">
        <Heading
          text="My Place Restaurant"
          style=" text-center lg:text-start"
        />

        <div className="">
          <p className="flex flex-wrap items-center justify-center space-x-1 lg:justify-normal">
            <span className="font-medium text-black">4.0</span>{' '}
            <span>
              {' '}
              <BiStar />
            </span>
            <span>(86)</span>
            <span className="lg:hidden">
              <Link href={' link to ratings'}>
                <BiRightArrow />
              </Link>
            </span>
            <span className="hidden text-nowrap lg:inline">
              £2 Delivery fee &middot;
            </span>
            {restaurantKeywords.map((el, i) => (
              <span key={i} className="hidden text-nowrap lg:inline">
                {el}&nbsp;&middot;
              </span>
            ))}
          </p>
        </div>
        <p className="hidden lg:block">
          {' '}
          Min Order value for this store is £15
        </p>
      </div>

      <div className="flex h-fit w-full text-nowrap rounded-lg border-[1px] border-solid border-backgroundBorder px-2 py-3 md:justify-center lg:w-auto lg:justify-normal lg:py-1">
        <div className="h-fit border-r-2 border-solid border-backgroundBorder px-8 lg:py-2">
          <p className="font-medium text-black">£2 Delivery fee</p>{' '}
          <p>Pricing & fees</p>
        </div>
        <div className="h-fit px-8 lg:py-2">
          <p className="font-medium text-black">20-40 min</p>{' '}
          <p>Delivery Time</p>
        </div>
      </div>
    </div>
  )
}
