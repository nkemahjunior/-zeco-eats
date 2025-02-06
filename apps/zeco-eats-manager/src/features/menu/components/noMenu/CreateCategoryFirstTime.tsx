'use client'

import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import Heading2 from '@/shared/components/text/Heading2'
import { FiList, FiPlus } from 'react-icons/fi'
import React from 'react'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Category } from '../../types/MenuTypes'
import { categorySchema } from '../../types/schemas/menuSchemas'
import { createCategoryAction } from '../../api/mutations/actions/menuActions'
import { useSuspenseQuery } from '@tanstack/react-query'
import CustomSelectV2 from '@/shared/components/inputs/CustomSelectV2'
import { restaurantMenusOptions } from '../../api/queries/options/menuOptions'

export default function CreateCategoryFirstTime() {
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Category>({
    resolver: zodResolver(categorySchema),
  })

  const onSubmit = async (data: Category) => {
    try {
      const result = await createCategoryAction(data)
      if (result.success) {
        toast.success('Category created successfully')
      } else {
        toast.error(result.msg)
      }
    } catch (error) {
      toast.error('Failed to create category')
    }
  }

  return (
    <div className="mt-16 flex justify-center p-4">
      <div className="w-1/2 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-backgroundShade2 w-fit rounded-full p-6">
            <FiList className="text-secondary h-8 w-8" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <Heading2 text="Let's organize your menu" />
            <p className="text-textTint text-center">
              Start by creating your first category. Categories help group
              similar items together, making it easier for customers to browse
              your menu.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="space-y-4">
            <label htmlFor="categoryName" className="font-medium">
              Category Name
            </label>
            <div className="space-y-2">
              <TextInput
                attributes={{ ...register('name') }}
                height="h-[2.8rem]"
                id="categoryName"
                name="name"
                placeHolder="e.g., Appetizers, Main Courses, Desserts"
                className="placeholder-textTint"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="addCategoryToMenu" className="font-medium">
              Add category to menu
            </label>
            <div className="space-y-2">
              <CustomSelectV2
                inheritWidth
                width="w-full"
                childrenFlexPos="items-start"
                dataContainerPx="px-6"
                dataContainerPy="py-6"
                data={menus.map((menu) => ({
                  display: menu.name || '--',
                  data: menu,
                }))}
                onchange={(selectedMenu) => setValue('menuId', selectedMenu.id)}
              />
              {errors.menuId && (
                <p className="text-xs text-red-500">{errors.menuId.message}</p>
              )}
            </div>
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
                  <span>Creating Category...</span>
                </>
              ) : (
                <>
                  <FiPlus className="h-5 w-5" />
                  <span>Create Category</span>
                </>
              )}
            </ButtonWithIcon>
          </div>
        </form>
      </div>
    </div>
  )
}
