import Heading from '@/shared/components/text/Heading'
import MenuCard from './MenuCard'
import { Tables } from '@zeco-eats-lib/utils-client'

interface fnProps {
  menuIndex: number
  menuRefs: Record<'current', (HTMLDivElement | null)[]>
  categoryName: string
  items: {
    item: Tables<'restaurant_items'>
    customisations: {
      customisation: Tables<'customisations'>
      customisation_Options: Tables<'customisation_options'>[]
    }[]
  }[]
}

export default function MenuItem({
  menuIndex,
  menuRefs,
  categoryName,
  items,
}: fnProps) {
  return (
    <div
      data-value={menuIndex}
      key={menuIndex}
      ref={(elementNode) => {
        if (!menuRefs.current[menuIndex]) {
          //use element id when real data comes
          menuRefs.current[menuIndex] = elementNode
        }
      }}
      className={`h-fit scroll-mt-[55rem] py-4 lg:space-y-8 lg:py-0`}
    >
      <Heading text={categoryName} />
      <div className="grid w-full grid-cols-1 divide-y-[1px] divide-backgroundBorder lg:grid-cols-2 lg:gap-x-3 lg:gap-y-4 lg:divide-y-0">
        {items.map((el, i) => (
          <MenuCard key={i} id={i} item={el.item} />
        ))}
      </div>
    </div>
  )
}
