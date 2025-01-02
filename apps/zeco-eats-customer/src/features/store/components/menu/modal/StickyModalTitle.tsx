'use client'
import ButtonBackUrl from '@/shared/components/buttons/ButtonBacKUrl'
import CardTitle from '@/shared/components/text/CardTitle'
import { motion } from 'motion/react'

export default function StickyModalTitle({
  isIntersecting,
  title,
}: {
  isIntersecting: boolean
  title: string
}) {
  return (
    <motion.div
      initial={{ height: '0rem' }}
      animate={
        !isIntersecting
          ? { height: '5rem', borderBottomWidth: '1px' }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={`bg-whiteborder-solid sticky top-0 z-[1] flex h-0 w-full items-center overflow-hidden border-backgroundBorder bg-white`}
    >
      <div className="w-full">
        <CardTitle text={title} className="text-center" />
        <div className="absolute right-1 top-4">
          <ButtonBackUrl />
        </div>
      </div>
    </motion.div>
  )
}
