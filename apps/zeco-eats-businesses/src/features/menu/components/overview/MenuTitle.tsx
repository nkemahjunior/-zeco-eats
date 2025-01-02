'use client'

import Heading from '@/shared/components/text/Heading'
import { useState } from 'react'
import { RiPencilFill } from 'react-icons/ri'

export default function MenuTitle() {
  const [isEditing, setIsEditing] = useState(false)
  const [headingText, setHeadingText] = useState('San siro Menu')

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeadingText(e.target.value)
  }

  const handleBlur = () => {
    setIsEditing(false) // Exit editing mode
  }
  return (
    <div className="flex w-full items-center space-x-4">
      {isEditing ? (
        <input
          type="text"
          value={headingText}
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="bg-background w-[20%] rounded-lg text-xl font-bold lg:text-2xl"
          autoFocus
        />
      ) : (
        <Heading
          text={`San siro Menu`}
          className="border-2 border-solid border-transparent"
        />
      )}
      {isEditing ? (
        <button className="bg-background rounded-lg px-4 py-2">Save</button>
      ) : (
        <button
          onClick={handleEditClick}
          className="bg-background rounded-lg p-2"
        >
          <span>
            <RiPencilFill />
          </span>
        </button>
      )}
    </div>
  )
}
