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
  id: number
}

export default function Selection({
  title,
  status,
  selectionType,
  max,
  min,
  options,
  id,
}: fnProps) {
  const { setSelectionMinMax } = useContext(
    ControlSelectedQtyContext
  ) as controlSelectedQtyTypes

  useEffect(() => {
    setSelectionMinMax({
      max: max,
      min: min,
    })
  }, [max, min, setSelectionMinMax])

  return (
    <div>
      <SelectionTitle
        title={title}
        status={status}
        chooseAmt={max}
        min={min}
        parentCustomisationId={id}
      />

      <div className="space-y-4">
        {options.length &&
          options.map((option, i) => (
            <SelectionItem
              key={i}
              selectionType={selectionType}
              option={option}
              parentCustomisationId={id}
            />
          ))}
      </div>
    </div>
  )
}
