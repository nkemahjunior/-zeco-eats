'use client'
import Button from '@/shared/components/button/Button'
import RadioBtn from '@/shared/components/inputs/RadioBtn'
import Heading2 from '@/shared/components/text/Heading2'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { useContext } from 'react'

export default function Banking() {
  const { openModal, closeModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const editPaymentFrequency = () => {
    openModal(
      <div className="space-y-6">
        <Heading2 text="Payment frequency" />
        <div className="flex items-center gap-x-2">
          <RadioBtn name="payfre" />
          <span>Daily</span>
        </div>
        <div className="flex items-center gap-x-2">
          <RadioBtn name="payfre" />
          <span>Weekly</span>
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <Button px="px-6" events={{ onClick: closeModal }}>
            Cancel
          </Button>
          <Button
            px="px-8"
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
        height: 'h-fit',
        width: 'w-[25%]',
        className: ' rounded-lg overflow-hidden  p-8',
      }
    )
  }

  // const addBankDetails = () => {
  //     openModal()
  // }
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Heading2 text="Banking details" />
        <Button>Add</Button>
      </div>
      <div className="space-y-4">
        <Heading2 text="Payment frequency" />
        <div className="bg-background flex items-center justify-between p-2">
          <span>weekly</span>
          <Button events={{ onClick: editPaymentFrequency }}>Edit</Button>
        </div>
      </div>
    </div>
  )
}
