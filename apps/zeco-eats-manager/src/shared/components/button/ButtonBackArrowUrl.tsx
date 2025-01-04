'use client'
import { useRouter } from 'next/navigation'
import { FaArrowLeftLong } from 'react-icons/fa6'

export default function ButtonBacKArrowUrl() {
  const router = useRouter()
  return (
    <button
      className="flex items-center justify-center"
      onClick={() => router?.back()}
    >
      <span>
        <FaArrowLeftLong size={20} />
      </span>
    </button>
  )
}
