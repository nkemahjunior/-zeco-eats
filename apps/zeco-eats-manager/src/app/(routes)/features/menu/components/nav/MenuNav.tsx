'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuNav({ menuId }: { menuId: string }) {
  const pathname = usePathname()

  return (
    <div className="flex w-full gap-x-4 overflow-x-auto font-medium md:justify-between">
      <div className="flex items-center space-x-8 text-nowrap">
        <Link
          href={`/menu/${menuId}/overview`}
          className={` ${pathname == `/menu/${menuId}/overview` ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Overview
        </Link>
        <Link
          href={`/menu/${menuId}/schedule`}
          className={` ${pathname == `/menu/${menuId}/schedule` || pathname == `/menu/${menuId}/schedule/edit` ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Menu schedule
        </Link>
        <Link
          href={`/menu/${menuId}/categories`}
          className={` ${pathname == `/menu/${menuId}/categories` ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Categories
        </Link>
        <Link
          href={`/menu/${menuId}/items`}
          className={` ${pathname == `/menu/${menuId}/items` ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Items
        </Link>
        <Link
          href={`/menu/${menuId}/customisations`}
          className={` ${pathname == `/menu/${menuId}/customisations` ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Customisations
        </Link>
      </div>

      <div>
        <Link
          href={`/menu/${menuId}/see-changes`}
          className={` ${pathname == `/menu/${menuId}/see-changes` ? 'border-secondary' : 'border-transparent'} text-nowrap border-b-4 border-solid pb-2`}
        >
          See changes
        </Link>
      </div>
    </div>
  )
}
