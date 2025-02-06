'use client'

import Button from '@/shared/components/button/Button'
import Heading from '@/shared/components/text/Heading'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  //   useEffect(() => {
  //     console.error('Error Boundary:', error)
  //   }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl space-y-6 text-center">
        <div className="animate-bounce">
          <span className="text-6xl">😞</span>
        </div>

        <Heading text="Oops! Something went wrong" />
        <p className="text-textTint">
          We&apos;re having trouble loading this page. Don&apos;t worry, our
          team has been notified and we&apos;re working on a fix!
        </p>

        <div className="space-y-4">
          <Button events={{ onClick: reset }}>Try Again</Button>

          <p className="text-gray-500">
            Error Code: {error.digest || 'UNKNOWN_ERROR'}
          </p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-gray-500">
            Still having trouble? Contact our support team at
            <a
              href="mailto:support@zecoeats.com"
              className="ml-2 text-blue-600 hover:underline"
            >
              support@zecoeats.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
