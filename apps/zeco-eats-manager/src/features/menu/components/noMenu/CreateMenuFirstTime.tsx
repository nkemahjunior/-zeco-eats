'use client'

import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import Heading2 from '@/shared/components/text/Heading2'
import { FiBookOpen, FiPlus } from 'react-icons/fi'
import React from 'react'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import { createMenuAction } from '../../api/mutations/actions/menuActions'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { menuSchema } from '../../types/schemas/menuSchemas'
import { Menu } from '../../types/MenuTypes'

const days = [
  { display: 'Monday', value: '1' },
  { display: 'Tuesday', value: '2' },
  { display: 'Wednesday', value: '3' },
  { display: 'Thursday', value: '4' },
  { display: 'Friday', value: '5' },
  { display: 'Saturday', value: '6' },
  { display: 'Sunday', value: '7' },
]

export default function CreateMenuFirstTime() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Menu>({
    resolver: zodResolver(menuSchema),
  })

  const onSubmit = async (data: Menu) => {
    try {
      const result = await createMenuAction(data)
      if (result.success) {
        toast.success('Menu created successfully')
      } else {
        toast.error(result.msg)
      }
    } catch (error) {
      toast.error('Failed to create menu')
    }
  }

  return (
    <div className="mt-16 flex justify-center p-4">
      <div className="w-1/2 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-backgroundShade2 w-fit rounded-full p-6">
            <FiBookOpen className="text-secondary h-16 w-16" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            {/* <Heading2 text="No menu yet.  Build Your Digital Menu Masterpiece" /> */}
            <Heading2 text="No menu yet.  Start by creating your first menu" />
            <p className="text-textTint">
              Effortlessly showcase your dishes online. Name your menu to
              organize daily specials, seasonal items, and customer favorites.
              Update anytime - no reprints needed!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          <div className="space-y-4">
            <label htmlFor="menuName" className="font-medium">
              Menu Name
            </label>
            <div className="space-y-2">
              <TextInput
                attributes={{ ...register('menuName') }}
                height="h-[2.8rem]"
                id="menuName"
                name="menuName"
                placeHolder="e.g., Seasonal Specialties, Signature Dishes, Craft Cocktails"
                className="placeholder-textTint"
              />
              {errors.menuName && (
                <p className="text-xs text-red-500">
                  {errors.menuName.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <label htmlFor="openDays" className="font-medium">
              Open days
            </label>
            <div className="space-y-2">
              <div className="flex w-full gap-x-4">
                <CustomSelect
                  inheritWidth
                  width="w-full"
                  data={days}
                  onchange={(day: string) => setValue('openDayStart', day)}
                />
                <CustomSelect
                  inheritWidth
                  width="w-full"
                  data={days}
                  onchange={(day: string) => setValue('openDayEnd', day)}
                />
              </div>
              {errors.openDayStart && (
                <p className="text-xs text-red-500">
                  {errors.openDayStart.message}
                </p>
              )}
              {errors.openDayEnd && (
                <p className="text-xs text-red-500">
                  {errors.openDayEnd.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full gap-x-4">
            <div className="w-full space-y-4">
              <label htmlFor="openTime" className="font-medium">
                Open time
              </label>
              <div className="space-y-2">
                <TextInput
                  height="h-[2.8rem]"
                  id="openTime"
                  attributes={{ ...register('openTime') }}
                  placeHolder="09:00"
                  className="placeholder-textTint"
                  width="w-full"
                />
                {errors.openTime && (
                  <p className="text-sm text-red-500">
                    {errors.openTime.message}
                  </p>
                )}
              </div>
            </div>

            <div className="w-full space-y-4">
              <label htmlFor="closeTime" className="font-medium">
                Close time
              </label>
              <div className="space-y-2">
                <TextInput
                  height="h-[2.8rem]"
                  id="closeTime"
                  attributes={{ ...register('closeTime') }}
                  placeHolder="14:00"
                  className="placeholder-textTint"
                  width="w-full"
                />
                {errors.closeTime && (
                  <p className="text-sm text-red-500">
                    {errors.closeTime.message}
                  </p>
                )}
              </div>
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
                  <span>Creating Menu...</span>
                </>
              ) : (
                <>
                  <FiPlus className="h-5 w-5" />
                  <span>Create Menu</span>
                </>
              )}
            </ButtonWithIcon>
          </div>
        </form>
      </div>
    </div>
  )
}
