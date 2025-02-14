import Button from '@/shared/components/button/Button'
import ImageContainer from '@/shared/components/image/ImageContainer'

export default function EditItemPhoto({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full space-y-4">
      {' '}
      <ImageContainer
        src={imageUrl}
        imageAlt=""
        height="h-[10rem]"
        width="w-full"
        quality={90}
        roundedCorners="rounded-md"
      />
      <Button>Change photo</Button>
    </div>
  )
}
