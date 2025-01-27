'use client'

import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import ImageContainer from '@/shared/components/image/ImageContainer'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { FaCloudArrowUp } from 'react-icons/fa6'

interface fnProps {
  onSelect: (img: File) => void
  onRemove: () => void
}

const DragAndDropPicture: React.FC<fnProps> = ({ onSelect, onRemove }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file)
      onSelect(file)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file)
      onSelect(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    onRemove()
  }

  return (
    <div className="space-y-6">
      {' '}
      <div className="border-backgroundBorder flex h-[25rem] flex-col items-center rounded-lg border-2 border-dashed p-2">
        {selectedImage ? (
          <div className="flex h-full w-full flex-col items-center gap-y-4">
            <ImageContainer
              src={URL.createObjectURL(selectedImage)}
              imageAlt="selected img"
              height="h-full"
              width="w-full"
              objectFit="cover"
              roundedCorners="rounded-lg"
            />
            <ButtonWithIcon width="w-[6rem]" events={{ onClick: removeImage }}>
              <span>
                <BiTrash />
              </span>
              <span>Remove</span>
            </ButtonWithIcon>
          </div>
        ) : (
          <div
            className={`flex h-full w-full flex-col items-center justify-center gap-y-4 ${
              dragActive ? 'border-secondary bg-backgroundShade1' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="space-y-2">
              {' '}
              <p className="text-textTint text-center">
                Drop files here to upload
              </p>
              <p className="text-textTint text-center">or click to upload</p>
            </div>
            <label
              htmlFor="file-upload"
              className="bg-secondary hover:bg-secondaryTint flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-2 text-white"
            >
              <span>
                <FaCloudArrowUp />
              </span>
              <span>Browse files</span>
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileSelect}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default DragAndDropPicture
