'use client'

import { modalPropsType } from '@/shared/types/modalPropsType'
import { usePathname } from 'next/navigation'
import React, { createContext, useContext, useEffect, useState } from 'react'

export interface modalContextTypes {
  open: boolean
  setOpen: (arg: boolean) => void
  modalContent: React.ReactNode
  setModalContent: (arg: React.ReactNode) => void
  modalProps: modalPropsType | undefined
  setModalProps: (arg: modalPropsType | undefined) => void
  openModal: (content: React.ReactNode, props?: modalPropsType) => void
  closeModal: () => void
}

export const ModalContext = createContext<modalContextTypes | null>(null)

const defaultModalProps: modalPropsType = {
  childPos: 'justify-center',
  closeBtnPos: 'justify-end',
  showCloseBtn: true,
  height: 'h-[50%]',
  width: 'w-[60%]',
  centerChildVer: true,
  bg: 'bg-white',
  className: '',
  contentEntryDirection: 'normal',
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>(null)
  const [modalProps, setModalProps] = useState<modalPropsType | undefined>(
    defaultModalProps
  )

  const openModal = (content: React.ReactNode, modalProps?: modalPropsType) => {
    setModalContent(content)
    setModalProps(modalProps)
    setOpen(true)
  }

  const closeModal = () => {
    setModalContent(null)
    setModalProps(defaultModalProps)
    setOpen(false)
  }

  const pathname = usePathname()
  useEffect(() => {
    if (open) closeModal()
  }, [pathname])

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        modalContent,
        setModalContent,
        modalProps,
        setModalProps,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext) as modalContextTypes
  return context
}
