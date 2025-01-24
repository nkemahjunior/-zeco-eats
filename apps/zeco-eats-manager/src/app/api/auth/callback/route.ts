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

    const userId = userData.user.id

    // Check if a restaurant is already associated with this user
    const { data: restaurantData, error: restaurantError } = await supabase
      .from('restaurant')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (restaurantError) {
      // Log error if it's not "Row not found"
      console.error('Error fetching restaurant:', restaurantError)
      return NextResponse.redirect(`${origin}/auth/auth-code-error`)
    }

    if (!restaurantData) {
      const { error: insertError } = await supabase
        .from('restaurant')
        .insert([{ user_id: userId }])

      if (insertError) {
        console.error('Error creating restaurant:', insertError)
        return NextResponse.redirect(`${origin}/auth/auth-code-error`)
      }
    }

    return NextResponse.redirect(`${origin}/home`)
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
