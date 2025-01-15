'use client'

import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import ButtonWithIcon from '../button/ButtonWithIcon'
import { PiCaretUpDownFill } from 'react-icons/pi'

interface fnProps {
  data: { display: string; value: string }[]
  onchange: (arg: string) => void
  width?: string
  height?: string
  className?: string
  inheritWidth?: boolean
  //children: React.ReactNode
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
export default function CustomSelect({
  data,
  onchange,
  width = 'w-[15rem]',
  inheritWidth,
  height = 'h-[12rem]',
  className,
}: fnProps) {
  const [open, setOpen] = useState(false)
  // const [inputValue, setInputValue] = useState(data.at(0) || '')
  const [inputValue, setInputValue] = useState(data.at(0)?.display || '')
  const ref = useRef<HTMLDivElement | null>(null)

  const updateInputValue = (value: string | undefined) => {
    if (!value) return
    setInputValue(value)
    onchange(value)
    setOpen(false)
  }

  useEffect(() => {
    function detectClickOutside(e: MouseEvent) {
      if (ref.current && open && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', detectClickOutside)

    return () => {
      document.removeEventListener('mousedown', detectClickOutside)
    }
  }, [open, ref])

  // const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
  //   console.log("focus target", e.relatedTarget);
  //   console.log("current target", e.currentTarget);
  //   console.log("target", e.target);
  //   if (e.relatedTarget === null) {
  //     setOpen(false);
  //   }
  // };

  return (
    <div
      className={`relative z-10 w-fit ${inheritWidth ? 'w-full' : 'w-fit'}`}
      ref={ref}

      // tabIndex={0}
      // onBlur={handleBlur}
    >
      <ButtonWithIcon
        width={width}
        justify="justify-between"
        font="text-sm"
        className="border-backgroundBorder border-2 border-solid px-6"
        events={{ onClick: () => setOpen((v) => !v) }}
        ariaAttributes={{
          'aria-label': 'Toggle dropdown',
          'aria-haspopup': 'listbox',
          'aria-expanded': open,
          'aria-controls': 'select-dropdown',
          role: 'combobox',
        }}
      >
        <span>{inputValue}</span>
        <span>
          <PiCaretUpDownFill />
        </span>
      </ButtonWithIcon>

      <AnimatePresence>
        {open && (
          <motion.ul
            aria-label="Dropdown menu"
            role="listbox"
            className={`bg-background shadow-secondary/10 absolute left-0 top-12 flex ${height} ${width} ${className} flex-col items-center gap-y-3 overflow-y-auto rounded-lg py-2 shadow-lg`}
            variants={dropdownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {data.map((el, i) => (
              <li
                key={i}
                //data-value={el}
                role="option"
                aria-selected={inputValue === el.display}
                className="cursor-pointer hover:bg-gray-100"
                onClick={(e: React.MouseEvent<HTMLSpanElement>) =>
                  //updateInputValue(e.currentTarget.dataset.value)
                  updateInputValue(el.value)
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
