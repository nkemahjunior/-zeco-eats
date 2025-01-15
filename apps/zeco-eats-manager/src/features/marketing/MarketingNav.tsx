'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MarketingNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-x-8 font-medium">
      <div className="flex flex-col justify-center gap-y-2">
        <Link
          href="/marketing/create-campaign"
          className={` ${pathname == '/marketing/create-campaign' ? 'border-secondary' : 'border-transparent'} `}
        >
          Create campaign
        </Link>
        <div className="h-4 w-full bg-black"></div>
      </div>
      <Link
        href="/marketing/performance"
        className={` ${pathname == '/marketing/performance' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
      >
        Performance
      </Link>
      <Link
        href="/marketing/campaigns"
        className={` ${pathname == '/marketing/campaigns' ? 'border-secondary' : 'border-transparent'} border-b-4 border-solid pb-2`}
      >
        Campaigns
      </Link>
    </div>
  )
}
