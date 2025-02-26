'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Breakfast from '@/shared/icons/breakfast-svgrepo-com.svg'
import BBQ from '@/shared/icons/bbq-chi-ken-svgrepo-com.svg'
import Bakery from '@/shared/icons/bread-svgrepo-com.svg'
import FastFood from '@/shared/icons/fast-food-svgrepo-com.svg'
import Vegan from '@/shared/icons/salad-svgrepo-com.svg'
import Supper from '@/shared/icons/supper-restaurant-svgrepo-com.svg'
import Launch from '@/shared/icons/food-svgrepo-com.svg'
import FamilyMeals from '@/shared/icons/fried-chicken-meal-svgrepo-com.svg'
import Dessert from '@/shared/icons/pumpkin-food-fall-svgrepo-com.svg'
import Coffee from '@/shared/icons/coffee-svgrepo-com.svg'
import FruitJuice from '@/shared/icons/juice-svgrepo-com.svg'
import Soup from '@/shared/icons/soup-svgrepo-com.svg'
import Snack from '@/shared/icons/popcorn-svgrepo-com.svg'

const icons = [
  Breakfast,
  BBQ,
  Bakery,
  FastFood,
  Vegan,
  Supper,
  Launch,
  FamilyMeals,
  Dessert,
  Coffee,
  FruitJuice,
  Soup,
  Snack,
]

export default function GlobalLoading() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = icons[currentIconIndex]

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  return (
    <div className="fixed inset-0 z-[101] flex h-screen w-full items-center justify-center bg-white">
      <div className="flex w-fit flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIconIndex}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-4"
          >
            <CurrentIcon className="h-16 w-16 text-white" />
          </motion.div>
        </AnimatePresence>

        <motion.span className="text-lg font-semibold text-black">
          Loading...
        </motion.span>
      </div>
    </div>
  )
}
