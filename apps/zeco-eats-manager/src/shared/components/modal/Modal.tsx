'use client'

import { usePreventScrolling } from '../../hooks/usePreventScrolling'
import { useModal } from '@/shared/context/modal/ModalProvider'
import { AnimatePresence, motion } from 'motion/react'

export default function Modal() {
  const { open, closeModal, modalContent, modalProps } = useModal()
  usePreventScrolling(open)

  // Define animation variants based on entry direction
  const variants = {
    normal: { opacity: 0, scale: 0.9, y: 0 },
    top: { opacity: 0, y: '-100%' },
    bottom: { opacity: 0, y: '100%' },
    left: { opacity: 0, x: '-100%' },
    right: { opacity: 0, x: '100%' },
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-[100] flex h-screen w-full bg-[rgb(0,0,0,0.2)] ${modalProps?.childPos} ${
            modalProps?.centerChildVer && 'items-center'
          }`}
          onClick={closeModal}
        >
          <motion.div
            initial={variants[modalProps?.contentEntryDirection || 'normal']}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={variants[modalProps?.contentEntryDirection || 'normal']}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`relative ${modalProps?.height} ${modalProps?.width} overflow-y-auto ${modalProps?.bg} ${modalProps?.className}`}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
            }}
          >
            {modalContent}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
