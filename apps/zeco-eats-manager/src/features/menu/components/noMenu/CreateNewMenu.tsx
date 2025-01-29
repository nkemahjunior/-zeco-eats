'use client'

import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import Heading2 from '@/shared/components/text/Heading2'
import { useActionState } from 'react'
import { FiBookOpen, FiPlus } from 'react-icons/fi'

import React from 'react'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import { createMenuAction } from '../../api/mutations/actions/menuActions'
import { useToastOnActionState } from '@/shared/hooks/useToastOnActionState'

export default function CreateMenuPrompt() {
  const [state, formAction, isPending] = useActionState(createMenuAction, null)

  // Show toast when state updates
  useToastOnActionState(state)

  return (
    <div className="flex h-[30rem] items-center justify-center p-4">
      <div className="w-1/2 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-backgroundShade2 w-fit rounded-full p-6">
            <FiBookOpen className="text-secondary h-16 w-16" />
          </div>

          <div className="flex flex-col items-center justify-center space-y-3">
            <Heading2 text="No menu yet.  Build Your Digital Menu Masterpiece" />
            <p className="text-textTint">
              Effortlessly showcase your dishes online. Name your menu to
              organize daily specials, seasonal items, and customer favorites.
              Update anytime - no reprints needed!
            </p>
          </div>
        </div>

        <form action={formAction} className="w-full space-y-6">
          <div className="space-y-4">
            <label htmlFor="menuName" className="block font-medium">
              Menu Name
            </label>
            <TextInput
              height="h-[2.8rem]"
              id="menuName"
              name="menuName"
              placeHolder="e.g., Seasonal Specialties, Signature Dishes, Craft Cocktails"
              className="placeholder-textTint"
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
              disable={isPending}
            >
              {isPending ? (
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
