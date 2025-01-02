'use client'

import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

export default function BackToRestaurantModal() {
  const router = useRouter()

  return (
    <button
      className={`sticky mb-4 hidden w-full items-center space-x-2 font-medium lg:flex`}
      onClick={() => {
        router.back()
      }}
    >
      <span>
        <BiArrowBack />
      </span>
      <span>Back to restaurant name</span>
    </button>
  )
}
