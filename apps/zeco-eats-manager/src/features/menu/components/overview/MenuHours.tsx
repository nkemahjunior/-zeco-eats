'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { restaurantMenusOptions } from '../../api/queries/options/menuOptions'
import { useMenuId } from '../../hooks/menuHooks'

export default function MenuHours() {
  const { data: menus } = useSuspenseQuery(restaurantMenusOptions)
  const menuId = useMenuId()
  const activeMenu = menus.find((el) => el.id === menuId)
  return (
    <div>
      <p className="font-medium">Menu hours</p>
      <div className="text-textTint flex items-center space-x-2">
        <span>{activeMenu?.open_days?.replace('-', ' - ')}</span>
        <span>{activeMenu?.time?.replace('-', ' - ')}</span>
      </div>
    </div>
  )
}
