'use client'
import {
  ControlSelectedQtyContext,
  controlSelectedQtyTypes,
} from '@/features/store/contexts/ControlSelectedQtyProvider'
import SelectionItem from './SelectionItem'
import SelectionTitle from './SelectionTitle'
import { useContext, useEffect } from 'react'
import { SelectionType } from '@/features/store/types/storeTypes'
import { Tables } from '@zeco-eats-lib/utils-client'
import { useDishInfoModal } from './provider/DishInfoModalProvider'

interface fnProps {
  title: string
  status: string
  // selectionType: 'qty' | 'radio' | 'checkBox'
  selectionType: SelectionType
  max: number
  min: number
  options: Tables<'customisation_options'>[]
}

export default function Selection({
  title,
  status,
  selectionType,
  max,
  min,
  options,
}: fnProps) {
  const { setSelectionMinMax } = useContext(
    ControlSelectedQtyContext
  ) as controlSelectedQtyTypes

  const {
    addMultipleSinglesCustomisation,
    removeMultipleSinglesCustomisation,
    addSinglesCustomisation,
  } = useDishInfoModal()

  useEffect(() => {
    setSelectionMinMax({
      max: max,
      min: min,
    })
  }, [max, min, setSelectionMinMax])

  return (
    <div>
      <SelectionTitle title={title} status={status} chooseAmt={max} />

      <div className="space-y-4">
        {options.length &&
          options.map((option, i) => (
            <SelectionItem
              key={i}
              selectionType={selectionType}
              option={option}
            />
          ))}
      </div>
    </div>
  )
}
