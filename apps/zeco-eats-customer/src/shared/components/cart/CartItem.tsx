import { CartItem as CartItemType } from '@/shared/types/storeTypes/storeTypes'
import ImageContainer from '../image/ImageContainer'
import CartIncreaseDecreaseQty from './CartIncreaseDecreaseQty'

export default function CartItem({ item }: { item: CartItemType }) {
  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="w-[7rem]">
        <ImageContainer
          height="h-[5rem]"
          width="w-full"
          imageAlt={`photo of ${item.item.name}`}
          src={item.item.image_url || '/devImages/food1.webp'}
          className="rounded-lg"
        />
      </div>

      <div className="flex w-full flex-col justify-center text-storeTextColorTint">
        <p className="text-base font-medium text-secondary">{item.item.name}</p>
        <div className="flex flex-wrap items-center space-x-1">
          {item.customisationOptions.length > 0 &&
            item.customisationOptions.map((el, i) => (
              <span key={i}>
                {el.qtyOdered}&nbsp;
                {el.customisationOption.name} (XAF $
                {el.qtyOdered * Number(el.customisationOption.price)}),
              </span>
            ))}
        </div>

        <p className="mt-2 font-medium">XAF {item.item.price}</p>
      </div>

      <div className="">
        <CartIncreaseDecreaseQty itemId={item.item.id} qty={item.qtyOdered} />
      </div>
    </div>
  )
}
