'use client'
import Heading from '@/shared/components/text/Heading'
import Heading2 from '@/shared/components/text/Heading2'
import DragAndDropPicture from '../../../../../../../shared/components/inputs/DragAndDropPicture'
import { useState } from 'react'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { BiTrash } from 'react-icons/bi'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'
import Link from 'next/link'
import { uploadRestaurantProfilePic } from '@/app/(routes)/features/auth/api/mutations/actions/setupActions'
import { toast } from 'sonner'
import { errorToastMsg, successToastMsg } from '@zeco-eats-lib/utils-client'

export default function UploadProfilePic() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const onSelect = (file: File) => {
    setSelectedImage(file)
  }

  const onRemove = () => {
    setSelectedImage(null)
  }

  const uploadProfilePic = async () => {
    try {
      if (!selectedImage) return
      setLoading(true)
      const res = await uploadRestaurantProfilePic(selectedImage)
      if (res.success) toast.success(...successToastMsg(res.msg))
      else toast.error(...errorToastMsg(res.msg))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-[40%] space-y-4">
      <Heading text="Upload Picture" />
      <div className="border-backgroundBorder space-y-6 rounded-lg border border-solid p-4">
        <div className="space-y-3">
          {' '}
          <Heading2 text="Add your restaurant profile picture" />
          <p className="text-textTint text-sm">
            Add profile picture for your restaurant. A visually appealing
            profile image helps attract customers and adds a personal touch to
            your restaurant&apos;s online presence.
          </p>
        </div>
        <DragAndDropPicture onSelect={onSelect} onRemove={onRemove} />
      </div>
      <div className="flex w-full items-center justify-end gap-x-4">
        <Link
          href={'/setup'}
          className="flex w-[6rem] items-center justify-center py-2 font-medium"
        >
          <span>Cancel</span>
        </Link>

        <ButtonWithIcon
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          textColor="text-white"
          width="w-[6rem]"
          events={{ onClick: uploadProfilePic }}
        >
          <span> Submit</span>
          {loading && (
            <span>
              <LoadingSpinner />
            </span>
          )}
        </ButtonWithIcon>
      </div>
    </div>
  )
}
