'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSearchBar from './HeroSearchBar'

export default function HeroText() {
  const phrases = [
    'Fast and Fresh',
    'Tasty and Quick',
    'Hot and Healthy',
    'Delicious Deals ',
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [phrases.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0 },
  }

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="flex items-center justify-center xl:h-full xl:justify-start">
      <div className="xl:h-fit xl:whitespace-nowrap">
        <p className="mb-2 text-center text-xs md:text-sm lg:text-base xl:mb-4 xl:text-start">
          Order Restaurant food, takeaway and groceries.
        </p>
        <p className="mb-2 text-center text-3xl font-semibold text-secondary md:text-4xl xl:mb-4 xl:text-start xl:text-5xl 2xl:text-6xl">
          Feast Your Senses,
        </p>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentPhraseIndex}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-2 text-center text-3xl font-semibold text-primary md:text-4xl xl:mb-0 xl:text-start xl:text-5xl 2xl:text-6xl"
          >
            {phrases[currentPhraseIndex].split('').map((char, i) => (
              <motion.span key={i} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </AnimatePresence>

        <p className="mb-2 text-center text-xs lg:text-base xl:mt-8 xl:text-start">
          Enter a location to see what is available
        </p>

        <HeroSearchBar />
      </div>
    </div>
  )
}
