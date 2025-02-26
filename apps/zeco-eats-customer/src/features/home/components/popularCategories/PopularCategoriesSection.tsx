'use client'
import Heading from '@/shared/components/text/Heading'
import PopularCategoriesCard from './PopularCategoriesCard'
import Link from 'next/link'
import { useLocationStore } from '@/stores/globalStore'

const popularCategories = [
  {
    name: 'Bakery',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/bakery.jpg',
    numRestaurants: 4,
  },
  {
    name: 'Fast Food',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/fast%20foods.jpg',
    numRestaurants: 2,
  },
  {
    name: 'Salad',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/salad.jpg',
    numRestaurants: 6,
  },
  {
    name: 'Smoothies',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/smoothies.jpg',
    numRestaurants: 3,
  },
  {
    name: 'Soup',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/soup.jpg',
    numRestaurants: 10,
  },
  {
    name: 'Dinner',
    image:
      'https://ihydizyhbzwvaidfdunn.supabase.co/storage/v1/object/public/zeco-eats/popular-categories/supper.jpg',
    numRestaurants: 8,
  },
]

export default function PopularCategoriesSection() {
  const userLocation = useLocationStore((state) => state.userLocation)
  return (
    <section className="mx-sm mt-Ysm bg-background md:mx-md lg:mx-lg lg:mt-Ylg xl:mx-xl xl:bg-white 2xl:mx-xxl 2xl:mt-YXl">
      <div className="mb-Ysm lg:mb-Ylg 2xl:mb-YXl">
        <Heading text="ZecoEats Popular Categories" />
      </div>

      <div className="grid grid-cols-2 gap-x-1 gap-y-4 md:grid-cols-3 md:gap-x-2 lg:gap-x-6 xl:gap-x-14 2xl:grid-cols-6 2xl:gap-x-4">
        {popularCategories.map((category, index) => (
          <Link
            key={index}
            href={`/browse/?cuisine=${category.name.replaceAll(' ', '+')}?location=${userLocation?.fullName}`}
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
