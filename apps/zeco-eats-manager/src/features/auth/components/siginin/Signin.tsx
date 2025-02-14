import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import Heading from '@/shared/components/text/Heading'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'

export default function Signin() {
  const signIn = async () => {
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

  return (
    <form
      action={signIn}
      className="w-[24rem] space-y-8 rounded-lg bg-white px-8 py-16 shadow-lg"
    >
      <Heading text="Sign in" className="text-center" />
      <ButtonWithIcon height="h-12" className="text-base">
        <span>
          <FcGoogle size={20} />
        </span>
        <span>Sign in with Google</span>
      </ButtonWithIcon>
    </form>
  )
}
