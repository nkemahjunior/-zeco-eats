import Button from '@/shared/components/button/Button'
import ImageContainer from '@/shared/components/image/ImageContainer'
import Line from '@/shared/components/Line'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading2 from '@/shared/components/text/Heading2'

export default function CategoryItemModal() {
  return (
    <div className="h-full space-y-4 px-4 py-4">
      <div className="sticky top-0 z-[1] space-y-2 bg-white py-2">
        <div className="flex w-full items-center justify-end">
          <CloseBtn />
        </div>

        <div className="space-y-4">
          {/* <Heading2 text={categoryName} /> */}
        </div>
        <Line />
      </div>

      <div className="space-y-6">
        {/* {items.map((el) => (
            <div key={el.name} className="flex items-center justify-between">
              <div className="flex gap-x-4">
                <ImageContainer
                  src="/devImages/food1.webp"
                  imageAlt=""
                  height="h-20"
                  width="w-20"
                  roundedCorners="rounded-md"
                />

                <div className="flex flex-col gap-y-4">
                  <span>{el.name}</span>
                  <span>{el.price}</span>
                </div>
              </div>
              <Button>Remove</Button>
            </div>
          ))} */}
      </div>
    </div>
  )
}
