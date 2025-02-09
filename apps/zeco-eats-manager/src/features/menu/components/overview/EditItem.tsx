'use client'
import Line from '@/shared/components/Line'
import EditOptionParent from './EditOptionParent'
import EditItemInput from './EditItemInput'
import EditItemPhoto from './EditItemPhoto'
import EditItemDesc from './EditItemDesc'
import EditItemSoldOut from './EditItemSoldOut'
import EditItemSaveBtn from './EditItemSaveBtn'
import EditItemHeader from './EditItemHeader'
import EditItemCategories from './EditItemCategories'
import { Tables } from '@zeco-eats-lib/utils-client'

export default function EditItem({
  item,
}: {
  item: Tables<'restaurant_items'>
}) {
  return (
    <div className="w-full space-y-4 px-8 py-4">
      <EditItemHeader />
      <Line />

      <div className="space-y-6">
        <EditOptionParent>
          <EditItemInput
            id="itemName"
            label="Name"
            initialState={item.name || ''}
            className="space-y-2"
          />
        </EditOptionParent>

        <EditItemPhoto imageUrl={item.image_url || 'placeholder photo'} />
        <EditItemDesc description={item.desc || ''} />
        <EditItemSoldOut />
        <Line />

        <EditItemCategories item={item} />

        <EditItemInput
          id="itemPrice"
          label="Price"
          initialState={item.price?.toString() || ''}
          className="flex items-center justify-between"
          inputWidth="w-[10rem]"
        />

        <EditItemInput
          id="itemVat"
          label="VAT"
          initialState={item.vat?.toString() || ''}
          className="flex items-center justify-between"
          inputWidth="w-[10rem]"
        />

        <EditItemSaveBtn
          className="bg-secondary flex w-full items-center justify-center text-white"
          hoverColor="hover:bg-secondaryTint"
          px="px-0"
        />
      </div>
    </div>
  )
}
