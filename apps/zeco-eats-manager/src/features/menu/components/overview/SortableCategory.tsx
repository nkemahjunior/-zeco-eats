'use client'
import Line from '@/shared/components/Line'
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DragBtn from './DragBtn'
import CategoryTitle from './CategoryTitle'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import Item from './Item'
import { MouseEvent, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { MenuCategorieItem } from '../../types/MenuTypes'

interface fnProps {
  category: MenuCategorieItem
}

export default function SortableCategory({ category }: fnProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: category.category.id.toString(),
    })

  const [close, setClose] = useState(false)
  const [items, setItems] = useState(
    category.items.map((el) => el.id.toString())
  )

  const reorderItems = (e: DragEndEvent) => {
    const over = e.over
    if (!over) return
    if (e.active.id !== over.id) {
      setItems((item) => {
        const oldIdx = item.indexOf(e.active.id.toString())
        const newIdx = item.indexOf(over.id.toString())

        return arrayMove(item, oldIdx, newIdx)
      })
    }
  }

  return (
    <div
      className={`border-backgroundBorder touch-none space-y-4 rounded-xl border-[1px] border-solid p-4 md:p-8`}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center space-x-2 md:space-x-4">
          <DragBtn attributes={attributes} listeners={listeners} />
          <CategoryTitle
            category={category.category.name || ''}
            itemsQty={category.items.length}
          />
        </div>

        <button
          className="bg-background rounded-lg p-4"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()
            setClose((v) => !v)
          }}
        >
          {close ? (
            <span>
              <MdKeyboardArrowDown />
            </span>
          ) : (
            <span>
              <MdKeyboardArrowUp />
            </span>
          )}
        </button>
      </div>
      <Line />

      <div className={`${close ? 'h-0' : 'h-auto'} overflow-hidden`}>
        <DndContext onDragEnd={reorderItems}>
          <SortableContext items={items}>
            <div className="space-y-4">
              {category.items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
