import { BsArrowRight } from 'react-icons/bs'
import ImageContainer from '../image/ImageContainer'
import CardTitle from '../text/CardTitle'
import { Tables } from '@zeco-eats-lib/utils-client'
import Link from 'next/link'

export default function RestaurantTitleCart({
  restaurant,
}: {
  restaurant: Tables<'restaurant'>
}) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center space-x-4">
        <ImageContainer
          height="h-[3rem]"
          width="w-[3rem]"
          imageAlt={`photo of ${restaurant.name}`}
          src={restaurant.image || '/devImages/profile.png'}
          className="rounded-full"
          sizes="3rem"
        />

        <div className="flex flex-col space-y-1">
          <CardTitle
            text={restaurant.name || ''}
            className="font-semibold text-secondary"
          />
          <span className="text-storeTextColorTint">{restaurant.location}</span>
        </div>
      </div>

      {/* <button className="flex items-center justify-center">
        <span className="text-stone-800">
          <BsArrowRight />
        </span>
      </button> */}

      <Link
        href={`/store/${restaurant.id}`}
        className="flex items-center justify-center"
      >
        <span className="text-stone-800">
          <BsArrowRight />
        </span>
      </Link>
    </div>
  )
}
