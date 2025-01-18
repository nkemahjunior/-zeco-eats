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
      <div>
        <Heading2 text="Payment frequency" />
        <div>
          <RadioBtn name="payfre" />
          <span>Daily</span>
        </div>
        <div>
          <RadioBtn name="payfre" />
          <span>Weekly</span>
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <Button events={{ onClick: closeModal }}>Cancel</Button>
          <Button color="bg-secondary" hoverColor="hover:bg-secondaryTint">
            Save
          </Button>
        </div>
      </div>,
      {
        ...modalProps,
        height: 'h-[45%]',
        width: 'w-[40%]',
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
      <div>
        <Heading2 text="Payment frequency" />
        <div className="bg-backgroundShade2 flex items-center justify-between p-4">
          <span>weekly</span>
          <Button events={{ onClick: editPaymentFrequency }}>Edit</Button>
        </div>
      </div>
    </div>
  )
}
