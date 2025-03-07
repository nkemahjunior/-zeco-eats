'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoLogOutOutline } from 'react-icons/io5'
import { GoPersonFill } from 'react-icons/go'
import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { usePathname, useRouter } from 'next/navigation'
import { useGenerateSigninLink } from '@/shared/hooks/useGenerateSigninLink'

export default function NavAuthButton() {
  const [user, setUser] = useState<any>(null)
  const supabase = createSupabaseClient()
  const router = useRouter()
  const signinLink = useGenerateSigninLink()

  useEffect(() => {
    const checkUser = async () => {
      const user = await supabase.auth.getUser()
      setUser(user.data.user || null)
    }
    checkUser()
  }, [supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/home')
  }

  const buttonStyles =
    'flex w-fit lg:w-full rounded-lg items-center gap-x-2 bg-secondary p-2 text-white lg:w-auto lg:rounded-xl lg:p-2 xl:p-3 2xl:rounded-3xl 2xl:px-6'

  return (
    <li>
      {user ? (
        // Logout Button
        <button className={buttonStyles} onClick={handleLogout}>
          <span className="block rounded-full bg-primary p-1">
            <IoLogOutOutline color="#03081F" size={20} />
          </span>
          <span>Logout</span>
        </button>
      ) : (
        // Login/Signup Link
        <Link href={signinLink} className={buttonStyles}>
          <span className="block rounded-full bg-primary p-1">
            <GoPersonFill color="#03081F" size={20} />
          </span>
          <span>Login/Signup</span>
        </Link>
      )}
    </li>
  )
}
