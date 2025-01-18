'use client'
import { useState } from 'react'
import { PayoutInfos } from '../../types/payoutTypes'
import PayoutBreakdownInfoLastRow from './PayoutBreakdownInfoLastRow'
import PayoutBreakdownInfoNestedRow from './PayoutBreakdownInfoNestedRow'
import { AnimatePresence, motion } from 'motion/react'

interface fnProps {
  info: PayoutInfos
  paddingLeft?: number
}

export default function PayoutBreakdownInfo({
  info,
  paddingLeft = 0,
}: fnProps) {
  const [expand, setExpand] = useState(false)
  return (
    <div className={`cursor-pointer`} onClick={() => setExpand((v) => !v)}>
      {info.map((el, i) =>
        !el.subInfo.length ? (
          <PayoutBreakdownInfoLastRow
            key={i}
            paddingLeft={paddingLeft}
            infoName={el.infoName}
            price={el.totalPrice}
          />
        ) : (
          <div key={i}>
            <PayoutBreakdownInfoNestedRow
              expand={expand}
              infoName={el.infoName}
              price={el.totalPrice}
              paddingLeft={paddingLeft}
            />
            <AnimatePresence>
              {expand && (
                <motion.div
                  initial={{ height: '0rem' }}
                  animate={{ height: 'auto' }}
                  exit={{ height: '0rem' }}
                  transition={{ ease: 'linear', duration: 0.2 }}
                  className={`overflow-hidden`}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <PayoutBreakdownInfo
                    info={el.subInfo}
                    paddingLeft={paddingLeft + 1.2}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      )}
    </div>
  )
}
