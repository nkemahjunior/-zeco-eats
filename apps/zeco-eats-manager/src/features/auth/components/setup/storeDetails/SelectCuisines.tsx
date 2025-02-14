'use client'
import { addRestaurantCuisines } from '@/features/auth/api/mutations/actions/setupActions'
import { cuisineOptions } from '@/shared/api/queries/options/cuisineOptions'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { useSuspenseQuery } from '@tanstack/react-query'
import {
  errorToastMsg,
  successToastMsg,
  useDetectClickOutside,
} from '@zeco-eats-lib/utils-client'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { HiX } from 'react-icons/hi'
import { IoSearchOutline } from 'react-icons/io5'
import { Tables } from '@zeco-eats-lib/utils-client'
import { toast } from 'sonner'

export default function SelectCuisines() {
  const { data: cuisines } = useSuspenseQuery(cuisineOptions)

  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  useDetectClickOutside(ref, () => setOpen(false), open)

  const [selectedItems, setSelectedItems] = useState<Tables<'cuisines'>[] | []>(
    []
  )
  const [loading, setLoading] = useState(false)

  const addToSelectedItems = (el: Tables<'cuisines'>) => {
    if (selectedItems.length > 2) return // max selected should be 3
    setSelectedItems((p) => {
      const s = [...p, el]

      if (s.length > 2) {
        setOpen(false)
      }
      return [...p, el]
    })
    //setOpen(false)
  }

  const removeItem = (el: Tables<'cuisines'>) => {
    setSelectedItems((p) => p.filter((cuisine) => cuisine != el))
  }

  const submitCuisines = async () => {
    try {
      setLoading(true)
      await addRestaurantCuisines(selectedItems)
      toast.success(...successToastMsg('Succesfully added cuisines'))
    } catch (error) {
      toast.error(...errorToastMsg('Failed to add cuisines'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      {' '}
      <div className="relative" ref={ref}>
        <div
          className="bg-background flex h-[5rem] w-full items-center gap-x-2 rounded-lg border border-solid border-transparent p-4 focus:border-black focus:bg-white"
          onFocus={() => setOpen(true)}
          tabIndex={0}
        >
          <span>
            <IoSearchOutline size={20} />
          </span>
          <div className="flex flex-wrap gap-x-2">
            {selectedItems.map((el, i) => (
              <div
                key={i}
                className="border-backgroundBorder bg-backgroundShade2 flex items-center gap-x-1 rounded-md border border-solid p-2"
              >
                <span>{el.cuisine_name}</span>
                <span className="cursor-pointer" onClick={() => removeItem(el)}>
                  <HiX />
                </span>
              </div>
            ))}
          </div>
        </div>
        {open && (
          <ul className="absolute top-[5.5rem] h-fit max-h-[15rem] w-[18rem] overflow-y-auto rounded-lg bg-white py-4 shadow-md shadow-black/30">
            {cuisines.map((el, i) => (
              <li
                key={i}
                className="hover:bg-background cursor-pointer px-4 py-2"
                onClick={() => addToSelectedItems(el)}
              >
                {el.cuisine_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex w-full items-center justify-end gap-x-4">
        <Link
          href={'/setup'}
          className="flex w-[6rem] items-center justify-center py-2 font-medium"
        >
          <span>Cancel</span>
        </Link>

        <ButtonWithIcon
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          textColor="text-white"
          width="w-[6rem]"
          events={{ onClick: submitCuisines }}
        >
          <span> Submit</span>
          {loading && (
            <span>
              <LoadingSpinner />
            </span>
          )}
        </ButtonWithIcon>
      </div>
    </div>
  )
}
