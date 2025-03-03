import { usePathname } from 'next/navigation'

export const useGenerateSigninLink = () => {
  const pathname = usePathname()
  return `/auth/signin?redirect=${encodeURIComponent(pathname)}`
}
