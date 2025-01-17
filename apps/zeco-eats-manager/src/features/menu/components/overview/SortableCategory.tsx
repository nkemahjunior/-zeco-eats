'use client'
import Line from '@/shared/components/Line'
import { arrayMove, SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DragBtn from './DragBtn'
import CategoryTitle from './CategoryTitle'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import Item from './Item'
import { MouseEvent, useContext, useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import EditItem from './EditItem'

interface fnProps {
  el: string
}

export default function SortableCategory({ el }: fnProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: el,
    })

  const [close, setClose] = useState(false)
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const openModalAndSetContent = () => {
    if (close) return
    openModal(<EditItem />, {
      ...modalProps,
      centerChildVer: false,
      childPos: 'justify-end',
      showCloseBtn: false,
      height: ' h-full',
      width: 'w-full md:w-[60%] xl:w-[40%] 2xl:w-[20%]',
    })
  }

  const [items, setItems] = useState(['1', '2', '3', '4', '5'])

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
      onClick={openModalAndSetContent}
    >
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center space-x-2 md:space-x-4">
          <DragBtn attributes={attributes} listeners={listeners} />
          <CategoryTitle category="Special Dishes" itemsQty={3} i={el} />
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
              {items.map((ell, i) => (
                <Item key={i} el={ell} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
