'use client'
import CardTitle from '@/shared/components/text/CardTitle'
import { clipText } from '@/shared/utils/clipText'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useDeviceType } from '@/shared/hooks/useDeviceType'
import { useUpdateUrlParams } from '@/shared/hooks/useUpdateUrlParams'
import { VIEW_DISH } from '@/features/store/utils/modalUrlKeys'
import { Tables } from '@zeco-eats-lib/utils-client'
import { useState } from 'react'
import ImageSkeleton from '@/shared/components/skeletons/ImageSkeleton'
import { useStoreId } from '../../hooks/useStoreId'

export default function MenuCard({
  id,
  item,
}: {
  id: number
  item: Tables<'restaurant_items'>
}) {
  const router = useRouter()
  const { isMobile } = useDeviceType()
  const updateParams = useUpdateUrlParams()
  const [imageLoad, setImageLoad] = useState(true)
  const storeId = useStoreId()

  const openModal = (itemId: number) => {
    if (isMobile) {
      //${storeId}/dish-details?${VIEW_DISH}=${itemId}
      router.push(`${storeId}/dish-details?${VIEW_DISH}=${itemId}`)
      return
    }
    // updateParams(VIEW_DISH, id.toString() + 'testMenu')
    //check storeModalUrl at the layout of store route
    updateParams(VIEW_DISH, itemId.toString())
  }

  return (
    <>
      {' '}
      <div onClick={() => openModal(item.id)}>
        <div
          className="flex h-[10rem] w-full cursor-pointer space-x-1 overflow-hidden border-solid border-backgroundBorder py-4 lg:h-[10rem] lg:rounded-lg lg:border-[1px] lg:py-0"
          //onClick={() => setOpen(true)}
        >
          <div className="flex w-[60%] flex-col justify-center space-y-1 lg:w-[70%] lg:flex-none lg:p-4">
            <CardTitle
              text={clipText(`${item.name}  `, 40)}
              className="capitalize"
            />
            <p className="">XAF {item.price}</p>
            <p className="text-storeTextColorTint lg:hidden">
              {clipText(
                `${item.desc}`,
                53 //the number of characters should depend on the length of the title, if the title is too short allow more charcters here, do this when real data from the api comes
              )}
            </p>
            <p className="hidden text-storeTextColorTint lg:block">
              {clipText(
                `${item.desc}`,
                240 //the number of characters should depend on the length of the title, if the title is too short allow more charcters here, do this when real data from the api comes
              )}
            </p>
          </div>

          <div className="relative h-full w-[40%] overflow-hidden rounded-lg lg:w-[30.1%] lg:rounded-none">
            {imageLoad && <ImageSkeleton />}
            <Image
              src={`${item.image_url || `/devImages/food1.webp`} `}
              alt={`picture of ${item.name}`}
              fill
              quality={100}
              style={{
                objectFit: 'cover',
              }}
              onLoad={() => setImageLoad(false)}
            />
          </div>
        </div>
      </div>
    </>
  )
}
