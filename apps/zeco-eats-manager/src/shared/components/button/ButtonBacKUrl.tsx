'use client'

import { useRouter } from 'next/navigation'
import { RxCross2 } from 'react-icons/rx'

export default function ButtonBackUrl() {
  const router = useRouter()
  return (
    <button
      className="bg-background hover:bg-backgroundShade1 flex items-center justify-center rounded-full p-2"
      onClick={() => router?.back()}
    >
      <span>
        <RxCross2 size={20} />
      </span>
    </button>
  )
}
