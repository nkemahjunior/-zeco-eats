import { motion } from 'motion/react'
import { useState } from 'react'

interface ToggleProps {
  isActive: boolean
  onToggle: () => void
  disable?: boolean
}

export default function Toggle({ isActive, onToggle, disable }: ToggleProps) {
  //const [on, setOn] = useState(isActive)

  const toggle = () => {
    //setOn((v) => !v)
    onToggle()
  }

  return (
    <div
      onClick={toggle}
      className={`flex h-6 w-12 items-center rounded-full p-1 transition ${disable ? 'cursor-not-allowed' : 'cursor-pointer'} ${isActive ? (disable ? 'bg-primary/20' : 'bg-primary') : disable ? 'bg-gray-300/20' : 'bg-gray-300'}`}
    >
      <motion.div
        className="flex h-5 w-5 rounded-full bg-white shadow-md"
        animate={{ x: isActive ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </div>
  )
}
