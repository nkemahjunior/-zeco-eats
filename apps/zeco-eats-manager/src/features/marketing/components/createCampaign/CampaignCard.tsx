'use client'
import Heading2 from '@/shared/components/text/Heading2'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { useContext } from 'react'
import CampaignModal from './CampaignModal'

interface fnProps {
  children: React.ReactNode
  title: string
  icon: React.ReactNode
}

export default function CampaignCard({ title, children, icon }: fnProps) {
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const openCampaign = () => {
    openModal(<CampaignModal />, {
      ...modalProps,
      height: 'h-[75%]',
      width: 'w-[30%]',
      className: ' rounded-lg overflow-hidden',
    })
  }
  return (
    <div
      className="border-backgroundBorder hover:bg-background w-[18rem] cursor-pointer space-y-4 rounded-lg border border-solid p-8 shadow-xl shadow-black/10 transition-colors duration-300"
      onClick={openCampaign}
    >
      <div className="flex items-center justify-between">
        <Heading2 text={title} />
        {icon}
      </div>
      {children}
    </div>
  )
}
