'use client'
import CardTitle from '@/shared/components/text/CardTitle'
import DishDescModal from './DishDescModal'
import TellRestaurantAboutAllergy from './TellRestaurantAboutAllergy'
import QuantityModal from './QuantityModal'
import ModalButtons from './ModalButtons'
import Line from '@/shared/components/Line'
import Selection from './Selection'
import ControSelectedQtyProvider from '@/features/store/contexts/ControlSelectedQtyProvider'
import { Item, SelectionType } from '@/features/store/types/storeTypes'
import { useDishInfoModal } from './provider/DishInfoModalProvider'
import { useEffect } from 'react'

interface fnProps {
  isModal: boolean | undefined
  item: Item
}

export default function DishInfoModal({ isModal, item }: fnProps) {
  const { selectCurItem } = useDishInfoModal()
  useEffect(() => selectCurItem(item.item), [])

  return (
    <div className="mt-96 flex h-full w-full flex-col justify-center space-y-6 px-4 lg:w-[50%] lg:px-0">
      <DishDescModal data={item.item} />
      <Line />

      <div className="space-y-4">
        {item.customisations &&
          item.customisations.length > 0 &&
          item.customisations.map((customisations, i) => (
            <ControSelectedQtyProvider key={i}>
              <Selection
                min={customisations.customisation.min_qty || 0}
                max={customisations.customisation.max_qty || 0}
                title={`${customisations.customisation.name}`}
                status={
                  customisations.customisation.min_qty! > 0
                    ? 'Required'
                    : 'Optional'
                }
                selectionType={
                  customisations.customisation.type as SelectionType
                }
                options={customisations.customisation_Options}
                id={customisations.customisation.id}
              />
            </ControSelectedQtyProvider>
          ))}
      </div>

      <div className="space-y-2">
        <CardTitle text="Special Instructions" />
        <TellRestaurantAboutAllergy />
        <QuantityModal />
      </div>

      <ModalButtons isModal={isModal} itemId={item.item.id || 0} />
    </div>
  )
}
