'use client'

import { useLocationStore } from '@/stores/globalStore'
import Link from 'next/link'
import { FaSadTear } from 'react-icons/fa'

export default function NoRestaurantUi() {
  const { userLocation, setToDefault } = useLocationStore()

  return (
    <div className="flex h-full items-center justify-center">
      <div className="mx-auto overflow-hidden rounded-lg p-8 text-center">
        <div className="mb-6">
          <FaSadTear className="mx-auto text-gray-400" size={48} />
        </div>

        <p className="text-lg">No restaurants found</p>

        <p className="mb-4 text-stone-500">
          We couldn’t find any restaurants in{' '}
          <span className="text-primary">
            {userLocation?.name || 'your location'}
          </span>
          .
        </p>

        <p className="mb-6 text-stone-500">
          Don’t worry—we’re expanding daily! Try a different location or explore
          other options.
        </p>

        <div onClick={setToDefault}>
          <Link href="/browse?location=Buea">
            <button className="rounded-lg bg-secondary px-8 py-3 text-white shadow-md transition-colors duration-300 hover:bg-secondaryTint">
              Check Out Other Restaurants
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
