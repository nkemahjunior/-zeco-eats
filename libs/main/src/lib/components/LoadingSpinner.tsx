import { ImSpinner8 } from 'react-icons/im'

export function LoadingSpinner() {
  return (
    <span className="block w-fit animate-spin">
      <ImSpinner8 size={10} />
    </span>
  )
}
