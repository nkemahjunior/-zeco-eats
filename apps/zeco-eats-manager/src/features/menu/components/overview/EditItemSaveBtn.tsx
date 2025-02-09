'use client'
import Button from '@/shared/components/button/Button'
import { useModal } from '@/shared/context/modal/ModalProvider'

interface fnProps {
  className?: string
  hoverColor?: string
  px?: string
}

export default function EditItemSaveBtn({
  px = 'px-4',
  className,
  hoverColor = 'hover:bg-backgroundShade1',
}: fnProps) {
  const { closeModal } = useModal()
  return (
    <div>
      <Button
        events={{ onClick: closeModal }}
        className={`${className}`}
        hoverColor={hoverColor}
        px={px}
      >
        Save
      </Button>
    </div>
  )
}
