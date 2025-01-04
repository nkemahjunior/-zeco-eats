'use client'
import Button from '@/shared/components/button/Button'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { ChangeEvent, useContext, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import Customisation from './Customisation'

export default function Customisations() {
  const { openModal, modalProps, closeModal } = useContext(
    ModalContext
  ) as modalContextTypes

  const [customisationName, setCustomisationName] = useState('')

  const createCustomisation = () => {
    openModal(
      <div className="h-full w-full space-y-6 p-6">
        <div className="">
          <Heading text="Create Customisations" />
        </div>

        <div className="space-y-2">
          <label htmlFor="customise_instruction">Customer instructions</label>
          <TextInput
            id="customise_instruction"
            placeHolder="Enter instructions"
            events={{
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                setCustomisationName(e.target.value),
            }}
          />
        </div>

        <div className="flex justify-end gap-x-4">
          <Button events={{ onClick: closeModal }} px="px-10">
            Cancel
          </Button>
          <Button
            events={{ onClick: saveNewCustomisation }}
            px="px-10"
            color="bg-secondary"
            hoverColor="hover:bg-secondaryTint"
            textColor="text-white"
          >
            Save
          </Button>
        </div>
      </div>,
      {
        ...modalProps,
        width: 'w-[20%]',
        height: 'h-fit',
      }
    )
  }

  function saveNewCustomisation() {
    console.log(customisationName)
    closeModal()
  }

  return (
    <div className="w-full">
      <div className="w-full space-y-8">
        <TextInputWithIcon id="searchCustomisation" width="w-[40%]" />
        <ButtonWithIcon
          width="w-[17%]"
          events={{ onClick: createCustomisation }}
        >
          <span>
            <BiPlus size={20} />
          </span>
          <span>Create customisation</span>
        </ButtonWithIcon>

        <div className="space-y-6">
          <Customisation />
          <Customisation />
          <Customisation />
          <Customisation />

          <Customisation />

          <Customisation />
          <Customisation />
          <Customisation />
        </div>
      </div>
    </div>
  )
}
