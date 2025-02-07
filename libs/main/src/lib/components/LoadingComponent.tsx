import { LoadingSpinner } from './LoadingSpinner'

export default function LoadingComponent() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingSpinner size={20} />
    </div>
  )
}
