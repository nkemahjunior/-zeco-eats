import { NextResponse } from 'next/server'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (code) {
    const supabase = await createSupabaseServer()

    // Exchange code for session
    const { error: authError } =
      await supabase.auth.exchangeCodeForSession(code)

    if (authError) {
      console.error('Auth exchange error:', authError)
      return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    }

    // Get the current user
    const { data: userData, error: userError } = await supabase.auth.getUser()

    if (userError || !userData.user) {
      console.error('Error fetching user:', userError || 'No user data')
      return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    }

    return NextResponse.redirect(`${origin}/home`)
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
