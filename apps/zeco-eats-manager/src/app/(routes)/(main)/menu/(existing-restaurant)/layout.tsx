import { restaurantMenusOptions } from '@/features/menu/api/queries/options/menuOptions'
import MenuNav from '@/features/menu/components/nav/MenuNav'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import { redirect } from 'next/navigation'

export default async function ExistingRestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = getQueryClient()

  const menus = await queryClient.fetchQuery(restaurantMenusOptions)
  if (!menus || menus.length < 1) redirect('/menu/no-menu/first-menu')

  return (
    <div className="space-y-8">
      <MenuNav />
      {children}
    </div>
  )
}
