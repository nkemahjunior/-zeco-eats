'use client'

import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import Heading2 from '@/shared/components/text/Heading2'
import { useState } from 'react'
import { FiBookOpen, FiPlus } from 'react-icons/fi'

import React from 'react'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'

export default function CreateMenuPrompt() {
  const [menuName, setMenuName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your menu creation logic here
    console.log('Creating menu:', menuName)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setMenuName('')
  }

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

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            <label htmlFor="menuName" className="block font-medium">
              Menu Name
            </label>
            <TextInput
              height="h-[2.8rem]"
              id="menuName"
              placeHolder="e.g., Seasonal Specialties, Signature Dishes, Craft Cocktails"
              className="placeholder-textTint"
            />
          </div>

          <div className="flex w-full items-center justify-center">
            <ButtonWithIcon
              color="bg-secondary"
              hoverColor="hover:bg-secondaryTint"
              textColor="text-white"
              justify="justify-center"
              gapX="gap-x-3"
              roundedCorners="rounded-lg"
              width="w-1/2"
              height="h-[3rem]"
              //events={{ onClick: handleSubmit, disabled: isSubmitting }}
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
