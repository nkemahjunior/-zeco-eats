import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import Heading from '@/shared/components/text/Heading'
import { FcGoogle } from 'react-icons/fc'

export default function Signin() {
  return (
    <div className="w-[24rem] space-y-8 rounded-lg bg-white px-8 py-16 shadow-lg">
      <Heading text="Sign in" className="text-center" />
      <ButtonWithIcon height="h-12" className="text-base">
        <span>
          <FcGoogle size={20} />
        </span>
        <span>Sign in with Google</span>
      </ButtonWithIcon>
    </div>
  )
}
