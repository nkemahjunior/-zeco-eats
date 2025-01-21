'use client'

import {
  ModalUrlContext,
  modalUrlContextTypes,
} from '@/shared/context/modal/ModalUrlProvider'
import { usePreventScrolling } from '@/shared/hooks/usePreventScrolling'
import { modalKey } from '@/shared/utils/modalKey'
import { useSearchParams } from 'next/navigation'
import { useContext } from 'react'

export default function ModalUrl() {
  const searchParams = useSearchParams()
  const { closeModalUrl, modalUrlContent, modalUrlProps } = useContext(
    ModalUrlContext
  ) as modalUrlContextTypes
  usePreventScrolling(searchParams.get(modalKey) === 'true')

  return (
    <>
      {searchParams.get(modalKey) === 'true' && (
        <div
          className={`fixed inset-0 z-[100] flex h-screen w-full bg-black/20 ${modalUrlProps?.childPos} ${modalUrlProps?.centerChildVer && 'items-center'}`}
          onClick={closeModalUrl}
        >
          <div
            className={`relative ${modalUrlProps?.height} ${modalUrlProps?.width} overflow-y-auto ${modalUrlProps?.bg} ${modalUrlProps?.className}`}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
            }}
          >
            {modalUrlContent}
          </div>
        </div>
      )}
    </>
  )
}
