'use client'

import { Dispatch, SetStateAction } from 'react'

interface fnProps {
  filterName: string
  // toggleModal: (arg: void) => void
  toggleModal: Dispatch<SetStateAction<boolean>>
  btnIcon?: React.ReactNode
  active?: boolean
  iconPosition?: 'beforeText' | 'afterText'
}

export default function FilterBtn({
  filterName,
  toggleModal,
  btnIcon,
  iconPosition,
  active,
}: fnProps) {
  return (
    <button
      onClick={() => toggleModal((v) => !v)}
      className={`flex w-fit space-x-2 text-nowrap rounded-3xl ${active ? 'bg-secondary bg-secondary/80 text-white' : 'bg-background hover:bg-stone-200'} px-4 py-2 font-medium transition-colors duration-200`}
    >
      {btnIcon && iconPosition == 'beforeText' && <span>{btnIcon}</span>}
      {filterName}
      {btnIcon && iconPosition == 'afterText' && <span>{btnIcon}</span>}
    </button>
  )
}
