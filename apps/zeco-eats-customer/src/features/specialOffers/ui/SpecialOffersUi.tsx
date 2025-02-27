// components/NoSpecialOffers.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaClock, FaSadTear } from 'react-icons/fa' // Added FaClock for "check later" vibe

export default function NoSpecialOffers() {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  }

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="flex h-full items-center justify-center">
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
