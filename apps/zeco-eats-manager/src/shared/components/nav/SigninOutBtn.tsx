'use client'

import { MdOutlineLogout } from 'react-icons/md'
import ButtonWithIcon from '../button/ButtonWithIcon'
import { useSignout } from '@/features/auth/dataFetching/hooks/useSignout'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'

export default function SignoutBtn() {
  const signout = useSignout()
  return (
    <ButtonWithIcon
      width="w-[8rem]"
      events={{ onClick: () => signout.mutate() }}
    >
      <span>
        <MdOutlineLogout />
      </span>
      <span>Sign out</span>
      {signout.isPending && (
        <span className="block w-fit animate-spin">
          <LoadingSpinner />
        </span>
      )}
    </ButtonWithIcon>
  )
}
