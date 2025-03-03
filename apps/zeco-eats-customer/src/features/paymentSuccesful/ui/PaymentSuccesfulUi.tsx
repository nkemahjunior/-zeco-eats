'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

export default function PaymentSuccesfulUi() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <div className="-mt-20 flex h-screen items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-md rounded-xl p-8 text-center"
      >
        {/* Tick Icon */}
        <motion.div variants={childVariants} className="mb-6">
          <FaCheckCircle className="mx-auto text-primary" size={64} />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={childVariants}
          className="mb-4 text-base font-bold text-primary"
        >
          Payment Successful!
        </motion.h1>

        {/* Message */}
        <motion.p variants={childVariants} className="mb-6 text-gray-700">
          Thank you for your order. Your payment has been processed
          successfully.
        </motion.p>

        {/* Back to Home Link */}
        <motion.div variants={childVariants}>
          <Link href="/browse">
            <button className="rounded-lg bg-secondary px-8 py-3 text-white transition-colors duration-300 hover:bg-secondaryTint">
              Check Out Other Restaurants
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
