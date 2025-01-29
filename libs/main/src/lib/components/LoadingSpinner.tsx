import { ImSpinner8 } from 'react-icons/im'

interface fnProps {
  size?: number
}

export function LoadingSpinner({ size = 10 }: fnProps) {
  return (
    <span className="block w-fit animate-spin">
      <ImSpinner8 size={size} />
    </span>
  )
}
