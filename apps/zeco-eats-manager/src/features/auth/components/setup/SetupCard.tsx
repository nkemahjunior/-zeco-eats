import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'

interface fnProps {
  href: string
  icon: React.ReactNode
  title: string
  desc: string
}

export default function SetupCard({ href, icon, title, desc }: fnProps) {
  return (
    <div className="bg-backgroundShade1 flex w-full items-center justify-between rounded-lg p-4">
      <div className="flex items-center gap-x-4">
        <span>{icon}</span>
        <div className="space-y-1">
          <p className="font-medium">{title}</p>
          <p className="text-textTint">{desc}</p>
        </div>
      </div>
      <Link
        href={href}
        className="flex h-12 w-[5rem] items-center justify-center gap-x-1 rounded-xl bg-white font-medium"
      >
        <span>Start</span>
        <span>
          <GoArrowRight />
        </span>
      </Link>
    </div>
  )
}
