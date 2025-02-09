'use client'
import Image from 'next/image'
import DragBtn from './DragBtn'
import ItemTitle from './ItemTitle'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Tables } from '@zeco-eats-lib/utils-client'
import { useModal } from '@/shared/context/modal/ModalProvider'
import EditItem from './EditItem'

interface fnProps {
  item: Tables<'restaurant_items'>
}

export default function Item({ item }: fnProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id.toString(),
    })

  const { openModal, modalProps } = useModal()

  const openModalAndSetContent = () => {
    openModal(<EditItem item={item} />, {
      ...modalProps,
      centerChildVer: false,
      childPos: 'justify-end',
      showCloseBtn: false,
      height: ' h-full',
      width: 'w-full md:w-[60%] xl:w-[40%] 2xl:w-[20%]',
      contentEntryDirection: 'right',
    })
  }

  return (
    <div
      className="flex cursor-pointer touch-none items-center justify-between"
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
      onClick={openModalAndSetContent}
    >
      <div className="flex items-center space-x-4">
        <DragBtn attributes={attributes} listeners={listeners} />
        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
          <Image src={item.image_url || ''} alt="" fill quality={90} />
        </div>
        <ItemTitle item={item.name || ''} />
      </div>

      <div className="bg-background rounded-lg px-6 py-4 md:px-8">
        {item.price}
      </div>
    </div>
  )
}
