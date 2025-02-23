import {
  SelectedCustomisation,
  SelectionType,
} from '@/features/store/types/storeTypes'
import { createContext, useContext, useEffect, useState } from 'react'

interface DishInfoModalCOntextTypes {
  numItemsSeleted: number
  updateNumSelectedItems: (qty: number) => void
  selectedCustomisations: Record<SelectionType, SelectedCustomisation[]>
  addMultipleSinglesCustomisation: (option: SelectedCustomisation) => void
  removeMultipleSinglesCustomisation: (option: SelectedCustomisation) => void
  addSinglesCustomisation: (option: SelectedCustomisation) => void
  updateMultipleMultiplesCustomisation: (option: SelectedCustomisation) => void
  totalModalPrice: number
  updateItemPrice: (price: number) => void
}

const DishInfoModalContext = createContext<DishInfoModalCOntextTypes | null>(
  null
)

export default function DishInfoModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [numItemsSeleted, setNumItemsSelected] = useState(1)
  const [selectedCustomisations, setSelectedCustomisations] = useState<
    Record<SelectionType, SelectedCustomisation[]>
  >({
    single: [],
    multipleSingles: [],
    multiplesMultiples: [],
  })

  const [selectedItemPrice, setSelectedItemPrice] = useState(0)
  const [totalModalPrice, setTotalModalPrice] = useState(0)

  const updateItemPrice = (price: number) => setSelectedItemPrice(price)

  useEffect(() => {
    const singlesPrice = Number(
      selectedCustomisations.single.at(0)?.selectedOption.price || 0
    )

    const multipleMultiplesPrice =
      selectedCustomisations.multiplesMultiples.reduce(
        (acc, el, i) => acc + Number(el.selectedOption.price) * el.qty,
        0
      )

    const multipleSinglesPrice = selectedCustomisations.multipleSingles.reduce(
      (acc, el, i) => acc + Number(el.selectedOption.price) * el.qty,
      0
    )

    const totalCustomisationPrice =
      singlesPrice + multipleMultiplesPrice + multipleSinglesPrice

    setTotalModalPrice(
      Number(
        (
          (totalCustomisationPrice + selectedItemPrice) *
          numItemsSeleted
        ).toFixed(2)
      )
    )
  }, [numItemsSeleted, selectedCustomisations, selectedItemPrice])

  const updateNumSelectedItems = (qty: number) => setNumItemsSelected(qty)

  const addMultipleSinglesCustomisation = (option: SelectedCustomisation) => {
    setSelectedCustomisations((p) => {
      return {
        ...p,
        multipleSingles: [...p.multipleSingles, option],
      }
    })
  }

  const removeMultipleSinglesCustomisation = (
    option: SelectedCustomisation
  ) => {
    setSelectedCustomisations((p) => {
      return {
        ...p,
        multipleSingles: p.multipleSingles.filter(
          (el) => el.selectedOption.id != option.selectedOption.id
        ),
      }
    })
  }

  const addSinglesCustomisation = (option: SelectedCustomisation) => {
    setSelectedCustomisations((p) => {
      return {
        ...p,
        single: [option],
      }
    })
  }

  const updateMultipleMultiplesCustomisation = (
    option: SelectedCustomisation
  ) => {
    setSelectedCustomisations((p) => {
      return {
        ...p,
        multiplesMultiples:
          option.qty === 0
            ? p.multiplesMultiples.filter(
                (el) => el.selectedOption.id !== option.selectedOption.id
              ) // Remove if qty is 0
            : [
                ...p.multiplesMultiples.filter(
                  (el) => el.selectedOption.id !== option.selectedOption.id
                ),
                option,
              ], //remove existing option then Add if qty > 0
      }
    })
  }

  return (
    <DishInfoModalContext.Provider
      value={{
        numItemsSeleted,
        updateNumSelectedItems,
        selectedCustomisations,
        addMultipleSinglesCustomisation,
        removeMultipleSinglesCustomisation,
        addSinglesCustomisation,
        updateMultipleMultiplesCustomisation,
        totalModalPrice,
        updateItemPrice,
      }}
    >
      {children}
    </DishInfoModalContext.Provider>
  )
}

export function useDishInfoModal() {
  const context = useContext(DishInfoModalContext) as DishInfoModalCOntextTypes
  return context
}
