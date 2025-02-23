'use client'
import ModalOverlayUrl from '@/shared/components/modal/ModalOverlayUrl'
import { VIEW_DISH } from '@/features/store/utils/modalUrlKeys'
import { usePathname, useSearchParams } from 'next/navigation'
import MenuCardModal from '../MenuCardModal'

export default function StoreModalUrl() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const viewDish = searchParams.get(VIEW_DISH)

  if (pathname.includes('dish-details')) {
    return null
  }

  return (
    <div className={`${viewDish ? 'block' : 'hidden'} h-full w-full`}>
      <ModalOverlayUrl disableScrolling={viewDish} className="mt-[10%]">
        <MenuCardModal isModal />
      </ModalOverlayUrl>
    </div>
  )
}
