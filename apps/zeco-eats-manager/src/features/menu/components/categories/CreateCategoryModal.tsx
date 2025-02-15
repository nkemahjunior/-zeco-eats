'use client'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { FormInput } from '@/shared/components/inputs/FormInput'
import Line from '@/shared/components/Line'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading2 from '@/shared/components/text/Heading2'
import { useSuspenseQuery } from '@tanstack/react-query'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import { restaurantItemsOptions } from '../../api/queries/options/menuOptions'
import { useMenuId } from '../../hooks/menuHooks'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Category } from '../../types/MenuTypes'
import { categorySchema } from '../../types/schemas/menuSchemas'
import { DataItem } from '@/shared/components/inputs/CustomSelectV2'
import { createCategoryAction } from '../../api/mutations/actions/menuActions'
import { toast } from 'sonner'

export default function CreateCategoryModal() {
  const { data: items } = useSuspenseQuery(restaurantItemsOptions)
  const menuId = useMenuId()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Category>({
    resolver: zodResolver(categorySchema),
  })

  const itemsSelect = items.map((item) => ({
    display: item.name || '',
    data: item,
  }))

  const onSubmit = async (data: Category) => {
    const res = await createCategoryAction(data)
    if (res.success) {
      toast.success(res.msg)
    } else {
      toast.error(res.msg)
    }
  }

  return (
    <div className="h-full space-y-4 px-4 pb-8 pt-4">
      <div className="sticky top-0 z-[1] space-y-2 bg-white py-2">
        <div className="flex w-full items-center justify-end">
          <CloseBtn />
        </div>
        <div className="space-y-4">
          <Heading2 text="Add a new category" />
        </div>
        <Line />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          id="categoryName"
          label="Category name"
          placeholder="e.g Soups"
          inputAttrs={{
            ...register('name'),
          }}
          errors={errors.name}
        />

        <FormInput
          inputType="select"
          label=" Add item to menu"
          id="addItemToMenu"
          errors={errors.menuId}
          selectData={itemsSelect}
          selectOnchange={(selectedItem) => {
            setValue('menuId', selectedItem.id)
          }}
          className="w-1/2"
        />

        <ButtonWithIcon attributes={{ type: 'submit' }}>
          <span>Add category</span>
        </ButtonWithIcon>
      </form>
    </div>
  )
}
