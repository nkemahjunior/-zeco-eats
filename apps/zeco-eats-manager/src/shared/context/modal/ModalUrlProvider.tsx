'use client'
import { modalPropsType } from '@/shared/types/modalPropsType'
import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'

export interface modalUrlContextTypes {
  modalUrlContent: React.ReactNode
  setModalUrlContent: (arg: React.ReactNode) => void
  modalUrlProps: modalPropsType | undefined
  setModalUrlProps: (arg: modalPropsType | undefined) => void
  closeModalUrl: () => void
  backUrl: string
  setBackUrl: (arg: string) => void
}

export const ModalUrlContext = createContext<modalUrlContextTypes | null>(null)

export default function ModalUrlProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [modalUrlContent, setModalUrlContent] = useState<React.ReactNode>(null)
  const [modalUrlProps, setModalUrlProps] = useState<
    modalPropsType | undefined
  >({
    childPos: 'justify-center',
    closeBtnPos: 'justify-end',
    showCloseBtn: true,
    height: 'h-[50%]',
    width: 'w-[60%]',
    centerChildVer: true,
    bg: 'bg-white',
    className: '',
  })

  const router = useRouter()
  const [backUrl, setBackUrl] = useState('')

  const closeModalUrl = () => {
    if (backUrl.length > 1) router.push(backUrl)
    else router.back()
  }

  return (
    <ModalUrlContext.Provider
      value={{
        modalUrlContent,
        setModalUrlContent,
        modalUrlProps,
        setModalUrlProps,
        closeModalUrl,
        backUrl,
        setBackUrl,
      }}
    >
      {children}
    </ModalUrlContext.Provider>
  )
}
