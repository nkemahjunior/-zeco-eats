'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

export default function MarketingNav() {
  const pathname = usePathname()
  return (
    <div className="flex items-center gap-x-8 font-medium">
      <div className="flex flex-col justify-center gap-y-2">
        <Link href="/marketing/create-campaign">Create campaign</Link>
        {pathname == '/marketing/create-campaign' ? (
          <motion.div
            layoutId="underlineLink"
            className="h-1 w-full bg-black"
          ></motion.div>
        ) : (
          <div className="h-1 w-full"></div>
        )}
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <Link href="/marketing/performance">Performance</Link>
        {pathname == '/marketing/performance' ? (
          <motion.div
            layoutId="underlineLink"
            className="h-1 w-full bg-black"
          ></motion.div>
        ) : (
          <div className="h-1 w-full"></div>
        )}
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <Link href="/marketing/campaigns">Campaigns</Link>
        {pathname == '/marketing/campaigns' ? (
          <motion.div
            layoutId="underlineLink"
            className="h-1 w-full bg-black"
          ></motion.div>
        ) : (
          <div className="h-1 w-full"></div>
        )}
      </div>
    </div>
  )
}
