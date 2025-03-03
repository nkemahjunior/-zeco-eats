'use server'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export const signIn = async (redirectPath: string) => {
  const origin = (await headers()).get('origin')
  const supabase = await createSupabaseServer()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/api/auth/callback?redirect=${encodeURIComponent(redirectPath)}`,
    },
  })

  if (error) {
    console.log(error)
  } else {
    redirect(`${data.url}`) // use the redirect API for your server framework
  }
}
