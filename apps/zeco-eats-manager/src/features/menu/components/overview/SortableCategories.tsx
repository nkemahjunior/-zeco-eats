'use client'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import { useState } from 'react'
import SortableCategory from './SortableCategory'
import { useSuspenseQuery } from '@tanstack/react-query'
import { restaurantMenuCategoriesItemsOptions } from '../../api/queries/options/menuOptions'
import { useMenuId } from '../../hooks/menuHooks'

export default function SortableCategories() {
  const menuId = useMenuId()
  const { data: menuCategoriesItems } = useSuspenseQuery(
    restaurantMenuCategoriesItemsOptions(menuId)
  )
  const [categoryIds, setCategoryIds] = useState(
    menuCategoriesItems.map((el) => el.category.id.toString())
  )

  const reorderItems = (e: DragEndEvent) => {
    const over = e.over
    if (!over) return

    if (e.active.id !== over.id) {
      setCategoryIds((category) => {
        const oldIdx = category.indexOf(e.active.id.toString())
        const newIdx = category.indexOf(over.id.toString())

        return arrayMove(category, oldIdx, newIdx)
      })
    }
  }

  return (
    <DndContext onDragEnd={reorderItems}>
      <SortableContext items={categoryIds}>
        <div className="space-y-4">
          {menuCategoriesItems.map((category, i) => (
            <SortableCategory key={i} category={category} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}
