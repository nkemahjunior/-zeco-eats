'use client'
import DecreaseIncreaseQty from './DecreaseIncreaseQty'
import RadioBtn from './RadioBtn'
import CheckBox from './CheckBox'
import { SelectionType } from '@/features/store/types/storeTypes'
import { Tables } from '@zeco-eats-lib/utils-client'
import { useDishInfoModal } from './provider/DishInfoModalProvider'

interface fnProps {
  selectionType: SelectionType
  option: Tables<'customisation_options'>
}

export default function SelectionItem({ selectionType, option }: fnProps) {
  const {
    addSinglesCustomisation,
    updateMultipleMultiplesCustomisation,
    addMultipleSinglesCustomisation,
    removeMultipleSinglesCustomisation,
  } = useDishInfoModal()

  console.log('----------------')
  console.log(option)

  return (
    <div className="flex h-[3.5rem] items-center justify-between border-b-[1px] border-solid border-b-backgroundBorder font-medium lg:h-[4rem]">
      <div className="h-full">
        {' '}
        {selectionType === 'multipleSingles' || selectionType === 'single' ? (
          <label
            className="flex h-full cursor-pointer items-center justify-center"
            htmlFor={option.id.toString()}
          >
            {option.name}
          </label>
        ) : (
          <span className="flex h-full items-center justify-center">
            {option.name}
          </span>
        )}
      </div>

      <div>
        {selectionType === 'multiplesMultiples' && (
          <DecreaseIncreaseQty
            max={option.max_qty || 0}
            min={0}
            onIncDecrease={(qty) =>
              updateMultipleMultiplesCustomisation({
                qty,
                selectedOption: option,
              })
            }
          />
        )}

        {selectionType === 'single' && (
          <RadioBtn
            id={option.id.toString()}
            name="testradio"
            value={option.id.toString()}
            onSelect={(e) =>
              addSinglesCustomisation({
                qty: 1,
                selectedOption: option,
              })
            }
          />
        )}

        {selectionType === 'multipleSingles' && (
          <CheckBox
            id={option.id.toString()}
            name="testcheck"
            value={option.id.toString()}
            onSelect={(e) =>
              e.target.checked
                ? addMultipleSinglesCustomisation({
                    qty: 1,
                    selectedOption: option,
                  })
                : removeMultipleSinglesCustomisation({
                    qty: 1,
                    selectedOption: option,
                  })
            }
          />
        )}
      </div>
    </div>
  )
}
