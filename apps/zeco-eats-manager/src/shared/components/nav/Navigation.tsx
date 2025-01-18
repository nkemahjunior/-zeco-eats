'use client'

import { useState } from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import { AnimatePresence, motion } from 'motion/react'

export default function Navigation() {
  const [showSideNavMobile, setShowSideNavMobile] = useState(false)

  const toggleNavMobile = () => setShowSideNavMobile((v) => !v)
  return (
    <nav>
      <div className="border-backgroundBorder w-full border-b border-solid bg-white px-4 py-3 md:px-16 lg:px-8 lg:pl-6 2xl:lg:pr-28 2xl:lg:py-4">
        <TopNav
          toggleNavMobile={toggleNavMobile}
          showNavMobile={showSideNavMobile}
        />
      </div>

      <AnimatePresence>
        {showSideNavMobile && (
          <div
            className="fixed h-full w-full bg-black/10 lg:hidden"
            onClick={() => setShowSideNavMobile(false)}
          >
            <motion.div
              className="fixed right-0 z-[9] h-screen w-[15rem] overflow-y-auto bg-white pl-6 pt-[1rem]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <SideNav />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="top-0h border-backgroundBorder fixed left-0 z-[9] hidden h-screen overflow-y-auto border-r-2 border-solid pl-6 pt-[1rem] lg:block lg:w-[12rem] 2xl:w-[15rem]">
        <SideNav />
      </div>
    </nav>
  )
}
