'use client'

import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import Heading2 from '@/shared/components/text/Heading2'
import { FiPackage, FiPlus } from 'react-icons/fi'
import React, { useMemo, useState } from 'react'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import DragAndDropPicture from '@/shared/components/inputs/DragAndDropPicture'
import { MenuItem } from '../../types/MenuTypes'
import { itemSchema } from '../../types/schemas/menuSchemas'
import { useSuspenseQuery } from '@tanstack/react-query'
import {
  restaurantMenuCategoriesOPtions,
  restaurantMenusOptions,
} from '../../api/queries/options/menuOptions'
import { FormInput } from '@/shared/components/inputs/FormInput'
import { createMenuItemAction } from '../../api/mutations/actions/menuActions'
import { useRouter } from 'next/navigation'

export default function CreateMenuItem() {
  const router = useRouter()
  const { data: menuCategories } = useSuspenseQuery(
    restaurantMenuCategoriesOPtions
  )
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)

  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [categories, setCategories] = useState([
    menuCategories.find((el) => el.menu_id === menus.at(0)?.id), //customSelectV2 automatically marks the first element in the list as selected
  ])

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<MenuItem>({
    resolver: zodResolver(itemSchema),
  })

  const onSelect = (file: File) => setSelectedImage(file)
  const onRemove = () => setSelectedImage(null)

  const selectMenuData = useMemo(
    () =>
      menus.map((menu) => ({
        display: menu.name || '--',
        data: menu,
      })),
    [menus]
  )

  const onSubmit = async (data: MenuItem) => {
    router.prefetch('/menu/overview')
    if (!selectedImage) {
      toast.error('Please upload an image')
      return
    }
    const res = await createMenuItemAction(data, selectedImage)
    if (res.success) {
      toast.success(res.msg)
      router.push('/menu/overview')
    } else toast.error(res.msg)
  }

  return (
    <div className="mt-16 flex justify-center p-4">
      <div className="w-1/2 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-backgroundShade2 w-fit rounded-full p-6">
            <FiPackage className="text-secondary h-8 w-8" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <Heading2 text="Add New Menu Item" />
            <p className="text-textTint text-center">
              Create your first menu item. Add clear descriptions and pricing to
              help customers understand exactly what you&apos;re offering!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          {/* Item Name */}
          <FormInput
            label="Item Name"
            placeholder="e.g., Margherita Pizza, Caesar Salad"
            inputAttrs={{ ...register('name') }}
            id="newItemName"
            errors={errors.name}
          />

          {/* Description */}
          <FormInput
            label="Description"
            placeholder="Describe your item (ingredients, preparation style, etc.)"
            textareaAttrs={{ ...register('description') }}
            id="newItemDesc"
            errors={errors.description}
            inputType="textArea"
          />

          {/* Price & VAT */}
          <div className="flex w-full gap-x-4">
            <FormInput
              label="Price"
              placeholder="0.00"
              inputAttrs={{ ...register('price'), type: 'number' }}
              id="newItemPrice"
              errors={errors.price}
              className="w-1/2"
            />

            <FormInput
              label="VAT"
              placeholder="0.0"
              inputAttrs={{ ...register('vat'), type: 'number' }}
              id="newItemVAT"
              errors={errors.vat}
              className="w-1/2"
            />
          </div>

          <div className="flex items-center gap-x-4">
            <FormInput
              inputType="select"
              label=" Add item to menu"
              id="addItemToMenu"
              errors={errors.menuId}
              selectData={selectMenuData}
              selectOnchange={(selectedMenu) => {
                setCategories(
                  menuCategories.filter((el) => el.menu_id === selectedMenu.id)
                )
                setValue('menuId', selectedMenu.id)
              }}
              className="w-1/2"
            />

            <FormInput
              inputType="select"
              label=" Add item to category"
              id="addItemToCategory"
              errors={errors.categoryId}
              selectData={categories.map((el) => ({
                display: el?.category_name || '--',
                data: el,
              }))}
              selectOnchange={(selectedCategory) => {
                const s = selectedCategory?.category_id
                if (s) setValue('categoryId', s)
              }}
              className="w-1/2"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <label className="font-medium">Item Photo</label>
            <DragAndDropPicture
              onSelect={onSelect}
              onRemove={onRemove}
              disable={isSubmitting}
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <ButtonWithIcon
              color="bg-secondary"
              disableColor="bg-secondary/40"
              hoverColor="hover:bg-secondaryTint"
              textColor="text-white"
              justify="justify-center"
              gapX="gap-x-3"
              roundedCorners="rounded-lg"
              width="w-1/2"
              height="h-[3rem]"
              disable={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner />
                  <span>Creating Item...</span>
                </>
              ) : (
                <>
                  <FiPlus className="h-5 w-5" />
                  <span>Add Menu Item</span>
                </>
              )}
            </ButtonWithIcon>
          </div>
        </form>
      </div>
    </div>
  )
}
