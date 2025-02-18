interface fnProps {
  closeModal: (arg: boolean) => void
  modalIsOpen: boolean
  expandLeft?: string
  zIndex?: string
}
export default function ModalOverlay({
  closeModal,
  modalIsOpen,
  expandLeft,
  zIndex = 'z-[5]',
}: fnProps) {
  return (
    <div
      className={`fixed inset-0 ${expandLeft} ${zIndex} bg----[rgba(0,0,0,0.1)] ${modalIsOpen ? ' ' : 'hidden'}`}
      onClick={() => closeModal(false)}
    ></div>
  )
}
