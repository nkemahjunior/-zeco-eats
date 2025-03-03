'use client'

import { useState } from 'react'
import { BiLocationPlus } from 'react-icons/bi'
import { BsCopy } from 'react-icons/bs'
import { toast } from 'sonner'

export default function StoreLocationItem({ location }: { location: string }) {
  const [isCopying, setIsCopying] = useState(false)

  const handleCopy = async () => {
    try {
      setIsCopying(true)
      await navigator.clipboard.writeText(location)
      toast.success('Location copied!')
    } catch (error) {
      toast.error('Failed to copy')
    } finally {
      setIsCopying(false)
    }
  }

  return (
    <div className="flex">
      <div className="flex basis-[20%] items-center justify-center">
        <span>
          <BiLocationPlus size={20} />
        </span>
      </div>
      <div className="flex basis-[80%] border-b-[1px] border-solid border-backgroundBorder py-2">
        <div className="basis-[80%]">
          <p className="text-base font-medium">{location}</p>
          <p className="text-storeTextColorTint">{location}</p>
        </div>
        <div className="flex basis-[20%] items-center justify-center">
          <button
            onClick={handleCopy}
            disabled={isCopying}
            className="transition hover:text-gray-600"
          >
            <BsCopy size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
