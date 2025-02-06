'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import ButtonWithIcon from '../button/ButtonWithIcon'
import { PiCaretUpDownFill } from 'react-icons/pi'
import { useDetectClickOutside } from '@zeco-eats-lib/utils-client'

export interface DataItem<T> {
  display: string
  data: T
}

interface fnProps<T> {
  data: DataItem<T>[]
  onchange: (arg: T) => void
  width?: string
  height?: string
  childrenFlexPos?: string
  dataContainerPx?: string
  dataContainerPy?: string
  className?: string
  inheritWidth?: boolean
}

const dropdownVariants: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 255,
      damping: 25,
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
}

export default function CustomSelectV2<T>({
  data,
  onchange,
  width = 'w-[15rem]',
  inheritWidth,
  height = 'h-[12rem]',
  childrenFlexPos = 'items-center',
  dataContainerPx = 'px-0',
  dataContainerPy = 'py-2',
  className,
}: fnProps<T>) {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(data.at(0)?.display || '')
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const firstItem = data.at(0)
    if (!firstItem) return
    onchange(firstItem.data)
    setSelectedValue(data.at(0)?.display || '')
  }, [data])

  const updateInputValue = (selected: DataItem<T>) => {
    if (!selected) return
    setSelectedValue(selected.display)
    onchange(selected.data)
    setOpen(false)
  }

  useDetectClickOutside(ref, () => setOpen(false), open)

  return (
    <div className={`relative ${inheritWidth ? 'w-full' : 'w-fit'}`} ref={ref}>
      <ButtonWithIcon
        attributes={{ type: 'button' }}
        width={width}
        justify="justify-between"
        font="text-sm"
        className="border-backgroundBorder z-10 border-2 border-solid px-6"
        events={{ onClick: () => setOpen((v) => !v) }}
        ariaAttributes={{
          'aria-label': 'Toggle dropdown',
          'aria-haspopup': 'listbox',
          'aria-expanded': open,
          'aria-controls': 'select-dropdown',
          role: 'combobox',
        }}
      >
        <span>{selectedValue}</span>
        <span>
          <PiCaretUpDownFill />
        </span>
      </ButtonWithIcon>

      <AnimatePresence>
        {open && (
          <motion.ul
            aria-label="Dropdown menu"
            role="listbox"
            className={`bg-background shadow-secondary/10 absolute left-0 top-12 flex ${height} ${width} ${className} z-[11] flex-col ${childrenFlexPos} gap-y-3 overflow-y-auto rounded-lg ${dataContainerPx} ${dataContainerPy} shadow-lg`}
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {data.map((el, i) => (
              <li
                key={i}
                role="option"
                aria-selected={selectedValue === el.display}
                className="cursor-pointer hover:bg-gray-100"
                onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                  updateInputValue(el)
                }
              >
                {el.display}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
