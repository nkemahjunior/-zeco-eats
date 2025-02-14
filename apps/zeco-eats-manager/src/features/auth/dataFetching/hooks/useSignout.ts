import { useMutation } from '@tanstack/react-query'
import { createSupabaseClient } from '@zeco-eats-lib/utils-client'
import { useRouter } from 'next/navigation'

export const useSignout = () => {
  const supabase = createSupabaseClient()
  const router = useRouter()
  const mutation = useMutation({
    mutationFn: async () => {
      await supabase.auth.signOut()
    },
    onSuccess: () => router.push('/signin'),
  })

  return mutation
}
