'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MenuNav() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between font-medium">
      <div className="flex items-center space-x-8">
        <Link
          href="/menu/overview"
          className={` ${pathname == '/menu/overview' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Overview
        </Link>
        <Link
          href="/menu/schedule"
          className={` ${pathname == '/menu/schedule' || pathname == '/menu/schedule/edit' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Menu schedule
        </Link>
        <Link
          href="/menu/categories"
          className={` ${pathname == '/menu/categories' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Categories
        </Link>
        <Link
          href="/menu/items"
          className={` ${pathname == '/menu/items' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Items
        </Link>
        <Link
          href="/menu/customisations"
          className={` ${pathname == '/menu/customisations' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          Customisations
        </Link>
      </div>

      <div>
        <Link
          href="/menu/see-changes"
          className={` ${pathname == '/menu/see-changes' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
        >
          See changes
        </Link>
      </div>
    </div>
  )
}
