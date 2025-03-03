'use client'
import ButtonWithIcon from '@/shared/components/buttons/ButtonWithIcon'
import Heading from '@/shared/components/text/Heading'
import { useSearchParams } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from '../api/actions/actions'

export default function SigninUi() {
  const searchParams = useSearchParams()
  const redirectPath = searchParams.get('redirect') || '/home'

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <form
          action={() => signIn(redirectPath)}
          className="mx-sm w-full space-y-8 rounded-lg bg-white px-8 py-16 shadow-lg md:mx-md lg:mx-0 lg:w-[24rem]"
        >
          <Heading text="Sign in" />
          <ButtonWithIcon height="h-12" className="text-base">
            <span>
              <FcGoogle size={20} />
            </span>
            <span>Sign in with Google</span>
          </ButtonWithIcon>
        </form>
      </div>
    </div>
  )
}
