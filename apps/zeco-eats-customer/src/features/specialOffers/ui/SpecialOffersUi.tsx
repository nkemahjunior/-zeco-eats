'use client'

import Link from 'next/link'
import { FaClock } from 'react-icons/fa'

export default function NoSpecialOffers() {
  return (
    <div className="-mt-20 flex h-screen items-center justify-center">
      <div className="mx-auto overflow-hidden rounded-lg p-8 text-center">
        <div className="mb-6">
          <FaClock className="mx-auto text-gray-400" size={48} />
        </div>

        <p className="text-lg">No Special Offers Yet</p>

        <p className="mb-4 text-stone-500">
          It looks like there are no special offers available right now.
        </p>

        <p className="mb-6 text-stone-500">
          Don’t worry—new deals are added all the time! Check back later for
          tasty savings.
        </p>

        <div>
          <Link href="/browse">
            <button className="rounded-lg bg-secondary px-8 py-3 text-white shadow-md transition-colors duration-300 hover:bg-secondaryTint">
              Explore Restaurants
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
