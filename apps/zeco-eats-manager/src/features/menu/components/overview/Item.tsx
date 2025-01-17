'use client'
import Image from 'next/image'
import DragBtn from './DragBtn'
import ItemTitle from './ItemTitle'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface fnProps {
  el: string
}

export default function Item({ el }: fnProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: el,
    })
  return (
    <div
      className="flex touch-none items-center justify-between"
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      <div className="flex items-center space-x-4">
        <DragBtn attributes={attributes} listeners={listeners} />
        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
          <Image src={'/devImages/food1.webp'} alt="" fill quality={90} />
        </div>
        <ItemTitle item={`Fried Rice${el}`} />
      </div>

      <div className="bg-background rounded-lg px-6 py-4 md:px-8">£1200</div>
    </div>
  )
}
