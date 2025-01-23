import Logo from '@/shared/components/Logo'
import Link from 'next/link'
import { VscAccount } from 'react-icons/vsc'

export default function SignupNav() {
  return (
    <div className="flex h-[4rem] items-center justify-between bg-black px-12 text-white">
      <Logo color1="text-white" />
      <Link
        href={'/signin'}
        className="flex h-[3.5rem] w-[6rem] items-center gap-x-4 rounded-lg p-2"
      >
        <span>
          <VscAccount />
        </span>
        <span>Sign in</span>
      </Link>
    </div>
  )
}
