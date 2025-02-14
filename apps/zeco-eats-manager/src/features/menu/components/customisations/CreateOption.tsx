import Button from '@/shared/components/button/Button'
import ButtonBackUrl from '@/shared/components/button/ButtonBacKUrl'
import TextInput from '@/shared/components/inputs/TextInput'

export default function CreateOption() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-12">
          <ButtonBackUrl />
          <span className="inline-block text-base font-medium">Edit item</span>
        </div>

        <Button
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          px="px-6"
          textColor="text-white"
        >
          Save
        </Button>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col justify-center space-y-2">
          <label htmlFor="editOptionName">Name</label>
          <TextInput id="editOptionName" placeHolder="Add option name" />
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <label htmlFor="editOptionPrice">Price</label>
          <TextInput id="editOptionPrice" placeHolder="Add price" />
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <label htmlFor="editOptionMinQty">Min Qty</label>
          <TextInput id="editOptionMinQty" placeHolder="Add minimum qty.." />
        </div>

        <div className="flex flex-col justify-center space-y-2">
          <label htmlFor="editOptionMaxQty">Max Qty</label>
          <TextInput id="editOptionMaxQty" placeHolder="Add maximum qty.." />
        </div>
      </div>
    </div>
  )
}
