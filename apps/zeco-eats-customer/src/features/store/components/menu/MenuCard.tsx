'use client'
import CardTitle from '@/shared/components/text/CardTitle'
import { clipText } from '@/shared/utils/clipText'
import { useRouter } from 'next/navigation'
import { useDeviceType } from '@/shared/hooks/useDeviceType'
import { useUpdateUrlParams } from '@/shared/hooks/useUpdateUrlParams'
import { VIEW_DISH } from '@/features/store/utils/modalUrlKeys'
import { Tables } from '@zeco-eats-lib/utils-client'
import { useStoreId } from '../../hooks/useStoreId'
import ImageContainer from '@/shared/components/image/ImageContainer'

export default function MenuCard({
  id,
  item,
}: {
  id: number
  item: Tables<'restaurant_items'>
}) {
  const router = useRouter()
  const { isMobile, isTablet } = useDeviceType()
  const updateParams = useUpdateUrlParams()
  const storeId = useStoreId()

  const openModal = (itemId: number) => {
    if (isMobile || isTablet) {
      router.push(`${storeId}/dish-details?${VIEW_DISH}=${itemId}`)
      return
    }
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
              {clipText(`${item.desc}`, 53)}
            </p>
            <p className="hidden text-storeTextColorTint lg:block">
              {clipText(`${item.desc}`, 240)}
            </p>
          </div>

          <ImageContainer
            src={`${item.image_url || `/devImages/food1.webp`} `}
            width="w-[40%] lg:w-[30.1%]"
            height="h-full"
            imageAlt={`picture of ${item.name}`}
            roundedCorners="rounded-lg lg:rounded-none"
            sizes="(max-width: 1023px) 40vw, (min-width: 1024px) 15vw"
          />
        </div>
      </div>
    </>
  )
}
