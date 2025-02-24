import { useStoreId } from '@/features/store/hooks/useStoreId'
import { VIEW_DISH } from '@/features/store/utils/modalUrlKeys'
import Link from 'next/link'
import { useDishInfoModal } from './provider/DishInfoModalProvider'

export default function ModalButtons({
  isModal,
  itemId,
}: {
  isModal: boolean | undefined
  itemId: number
}) {
  const storeId = useStoreId()
  const { numItemsSeleted, totalModalPrice, pushToCart } = useDishInfoModal()
  return (
    <div className="sticky bottom-0 -mx-4 bg-white px-2 py-4 lg:static lg:bottom-auto lg:-mx-0 lg:px-0 lg:py-0">
      {/* <div className="border-green-70 h-[0.5rem] w-full border-2 border-solid bg-[#03081f] blur-lg lg:hidden mb-8"></div> */}
      <div className="space-y-4 font-medium transition-colors duration-300">
        <button
          className="flex h-[4rem] w-full items-center justify-center rounded-lg bg-secondary text-white hover:bg-secondaryTint"
          onClick={pushToCart}
        >
          <span>
            Add {numItemsSeleted} to order &middot; XAF {totalModalPrice}
          </span>
        </button>

        {!isModal ? null : (
          <Link
            href={`${storeId}/dish-details?${VIEW_DISH}=${itemId}`}
            className="flex h-[4rem] w-full items-center justify-center rounded-lg bg-background text-secondary hover:bg-backgroundShade2"
          >
            <span>see details</span>
          </Link>
        )}
      </div>
    </div>
  )
}
