import Heading from '@/shared/components/text/Heading'
import { Tables } from '@zeco-eats-lib/utils-client'
interface fnProps {
  data: Tables<'restaurant_items'>
}
export default function DishDescModal({ data }: fnProps) {
  return (
    <div className="border-b-[1px]border-solidborder-backgroundBorderpb-6 space-y-2">
      <Heading text={data.name || ''} />
      <p className="text-lg text-storeTextColorTint lg:text-xl">
        XAF {data.price}
      </p>
      <p>{data.desc}</p>
    </div>
  )
}
