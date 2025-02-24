import { getRestaurantsByIdOption } from '@/features/store/api/queries/options/options'
import { useStoreId } from '@/features/store/hooks/useStoreId'
import {
  SelectedCustomisation,
  SelectionType,
} from '@/features/store/types/storeTypes'
import { CartItem } from '@/shared/types/storeTypes/storeTypes'
import { useCartStore } from '@/stores/globalStore'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Tables } from '@zeco-eats-lib/utils-client'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'sonner'

interface DishInfoModalCOntextTypes {
  numItemsSeleted: number
  updateNumSelectedItems: (qty: number) => void
  selectedCustomisations: Record<SelectionType, SelectedCustomisation[]>
  addMultipleSinglesCustomisation: (option: SelectedCustomisation) => void
  removeMultipleSinglesCustomisation: (option: SelectedCustomisation) => void
  addSinglesCustomisation: (option: SelectedCustomisation) => void
  updateMultipleMultiplesCustomisation: (option: SelectedCustomisation) => void
  totalModalPrice: number
  selectCurItem: (item: Tables<'restaurant_items'>) => void
  pushToCart: () => void
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

  const storeId = useStoreId()
  const { data: restaurant } = useSuspenseQuery(
    getRestaurantsByIdOption(Number(storeId))
  )
  const addToCart = useCartStore((state) => state.addToCart)

  const [selectedItem, setSelectedItem] =
    useState<Tables<'restaurant_items'> | null>(null)
  const [totalModalPrice, setTotalModalPrice] = useState(0)

  const selectCurItem = (item: Tables<'restaurant_items'>) =>
    setSelectedItem(item)

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
          (totalCustomisationPrice + Number(selectedItem?.price)) *
          numItemsSeleted
        ).toFixed(2)
      )
    )
  }, [numItemsSeleted, selectedCustomisations, selectedItem?.price])

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

  const gatherCustomisations = (key: SelectionType) => {
    return selectedCustomisations[key].map((el) => ({
      qtyOdered: el.qty,
      customisationOption: el.selectedOption,
    }))
  }

  const pushToCart = () => {
    if (!selectedItem) return
    if (!restaurant) return toast.error('An error happened, try again later')

    const singleCustomisations = gatherCustomisations('single')
    const multipleSingleCustomisations = gatherCustomisations('multipleSingles')
    const multipleMultipleCustomisations =
      gatherCustomisations('multiplesMultiples')

    const cartItem: CartItem = {
      restaurant: restaurant,
      item: selectedItem,
      qtyOdered: numItemsSeleted,
      customisationOptions: [
        ...singleCustomisations,
        ...multipleSingleCustomisations,
        ...multipleMultipleCustomisations,
      ],
    }

    addToCart(cartItem)
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
        selectCurItem,
        pushToCart,
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
