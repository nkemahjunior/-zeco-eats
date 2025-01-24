import { headers } from 'next/headers'
import { createSupabaseServer } from './server'
import { redirect } from 'next/navigation'

export const signIn = async () => {
  'use server'
  const origin = (await headers()).get('origin')
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/api/auth/callback`,
    },
  })

  if (error) {
    console.log(error)
  } else {
    redirect(`${data.url}`) // use the redirect API for your server framework
  }
}

// export const useSignOut = async () => {

//     const [isLoading, setIsLoading] = useState(false)

//   const supabase = await createSupabaseServer()
//   const { error } = await supabase.auth.signOut()
//   if (error) return 'error'
//   redirect(`${window.location.origin}/signin`)
// }
