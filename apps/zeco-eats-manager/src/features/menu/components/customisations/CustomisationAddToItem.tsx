import CustomisationItem from './CustomisationItem'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import ButtonBacKArrowUrl from '@/shared/components/button/ButtonBackArrowUrl'
import Button from '@/shared/components/button/Button'

export default function CustomisationAddtoItem() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-6">
        <ButtonBacKArrowUrl />
        <Heading text="Add customisation to items" />
      </div>
      <TextInputWithIcon id="searchItemAddCus" placeHolder="Search items" />
      <div className="space-y-4">
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
        <CustomisationItem />
      </div>

      <Button
        color="bg-secondary"
        hoverColor="hover:bg-secondaryTint"
        px="w-full"
        textColor="text-white"
      >
        Save
      </Button>
    </div>
  )
}
