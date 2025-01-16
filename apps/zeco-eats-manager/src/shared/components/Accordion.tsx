'use client'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { motion } from 'motion/react'

interface fnProps {
  title: string
  children: React.ReactNode
  spaceY?: string
}

export default function Accordion({
  title,
  children,
  spaceY = 'space-y-2',
}: fnProps) {
  const [expand, setExpand] = useState(false)
  return (
    <div className={spaceY}>
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={() => setExpand((v) => !v)}
      >
        <p className="font-medium">{title}</p>
        <span>
          {expand ? (
            <MdKeyboardArrowUp size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </span>
      </div>

      <AnimatePresence>
        {' '}
        {expand && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: '0rem' }}
            animate={{ height: 'auto' }}
            exit={{ height: '0rem' }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
