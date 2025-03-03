import FavouriteStore from '@/features/favourites/ui/FavouritesStoresUi'
import { createSupabaseServer } from '@zeco-eats-lib/utils-server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return redirect('/auth/signin')

  return (
    <>
      <FavouriteStore />
    </>
  )
}
