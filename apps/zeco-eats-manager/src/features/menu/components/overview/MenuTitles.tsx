'use client'
import Toggle from '@/shared/components/inputs/Toggle'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import { Tables } from '@zeco-eats-lib/utils-client'
import Link from 'next/link'
import { updateMenuStatus } from '../../api/mutations/actions/menuActions'
import { toast } from 'sonner'
import { useContext, useState } from 'react'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { KEYrestaurantMenus } from '../../api/queries/options/menuOptions'
import { invalidateQueries } from '@/shared/api/queries/invalidateQueries'
import { KEYmenuIds } from '@/shared/api/queries/hooks/hooks'
import { useRouter } from 'next/navigation'
import { getQueryClient } from '@/shared/api/tanstackQuery/get-query-client'
import Heading2 from '@/shared/components/text/Heading2'

interface fnProps {
  menus: Tables<'restaurant_menus'>[]
}

export default function MenuTitles({ menus }: fnProps) {
  const [changingStatus, setChangingStatus] = useState(false)
  const [activeMenu, setActiveMenu] = useState(menus.find((el) => el.active))
  const { closeModal } = useContext(ModalContext) as modalContextTypes
  const router = useRouter()
  const queryClient = getQueryClient()

  const setMenuActive = async (menu: Tables<'restaurant_menus'>) => {
    const previousActive = activeMenu
    if (!menu.active) {
      router.prefetch(`/menu/${menu.id}/overview`)
      setActiveMenu(menu)
    }

    setChangingStatus(true)
    const res = await updateMenuStatus(!menu.active, menu.id)

    if (res.success) {
      await invalidateQueries(KEYmenuIds /*, KEYrestaurantMenus*/)
      queryClient.setQueryData(KEYrestaurantMenus, res.data)
      toast.success(`${menu.name} is now active`)
      router.replace(`/menu/${menu.id}/overview`)
    } else {
      setActiveMenu(previousActive)
      toast.error(res.msg)
    }

    setChangingStatus(false)
    closeModal()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-2 pt-4">
        <div>
          <Heading2 text="Change menu status" />
          <p className="text-textTint"> Atleast one menu must be active</p>
        </div>
        <CloseBtn />
      </div>
      <ul className="space-y-4">
        {menus.map((menu) => (
          <li key={menu.id} className="flex items-center justify-between px-4">
            <Link href={`/menu/${menu.id}/overview`} className="block">
              {menu.name}
            </Link>

            <div>
              <Toggle
                isActive={activeMenu?.id === menu.id || false}
                onToggle={() => setMenuActive(menu)}
                disable={changingStatus}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
