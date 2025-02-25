'use client'
import { motion } from 'motion/react'

export const Shimmer = ({
  className,
  angle = '135deg', // 90deg
}: {
  className: string
  angle?: string
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      animate={{ backgroundPosition: ['200%', '-200%'] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
      style={{
        background: `linear-gradient(${angle}, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)`,
        backgroundSize: '200% 100%',
      }}
    />
  )
}
