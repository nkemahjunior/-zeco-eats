'use client'
import Heading from '@/shared/components/text/Heading'
import PopularCategoriesCard from './PopularCategoriesCard'
import Link from 'next/link'
import { FoodCategoryName } from '@/shared/types/sharedTypes'

type FoodCategory = {
  name: FoodCategoryName
  image: string
  numRestaurants: number
}

const popularCategories: FoodCategory[] = [
  {
    name: 'Bakery',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/bakery.jpg',
    numRestaurants: 1,
  },
  {
    name: 'Fast Foods',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/fast%20foods.jpg',
    numRestaurants: 11,
  },
  {
    name: 'Vegan',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/salad.jpg',
    numRestaurants: 8,
  },
  {
    name: 'Fruit Juice',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/smoothies.jpg',
    numRestaurants: 4,
  },
  {
    name: 'Soup',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/soup.jpg',
    numRestaurants: 5,
  },
  {
    name: 'Supper',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/supper.jpg',
    numRestaurants: 1,
  },
]

export default function PopularCategoriesSection() {
  return (
    <section className="mx-sm mt-Ysm bg-background md:mx-md lg:mx-lg lg:mt-Ylg xl:mx-xl xl:bg-white 2xl:mx-xxl 2xl:mt-YXl">
      <div className="mb-Ysm lg:mb-Ylg 2xl:mb-YXl">
        <Heading text="ZecoEats Popular Categories" />
      </div>

      <div className="grid grid-cols-2 gap-x-1 gap-y-4 md:grid-cols-3 md:gap-x-2 lg:gap-x-6 xl:gap-x-14 2xl:grid-cols-6 2xl:gap-x-4">
        {popularCategories.map((category, index) => (
          <Link
            key={index}
            href={`/browse/?cuisine=${category.name.replaceAll(' ', '+')}`}
          >
            <PopularCategoriesCard
              name={category.name}
              image={category.image}
              numRestaurants={category.numRestaurants}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
