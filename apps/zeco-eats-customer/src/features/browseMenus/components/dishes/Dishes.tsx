'use client'
import { useEffect, useState } from 'react'

import DishCard from './DishCard'

export default function Dishes() {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    function checkScreenWidth() {
      if (window.screen.width < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
      // window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false)
    }
    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)
    return () => window.removeEventListener('resize', checkScreenWidth)
  }, [isMobile])

  return (
    <div className="mt-6">
      {/* <DishCard /> */}

      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-4 lg:grid-cols-4">
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </div>
    </div>
  )
}
