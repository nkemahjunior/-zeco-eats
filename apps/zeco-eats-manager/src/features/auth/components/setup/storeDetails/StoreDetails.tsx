import Heading from '@/shared/components/text/Heading'
import Heading2 from '@/shared/components/text/Heading2'
import SelectCuisines from './SelectCuisines'
import Button from '@/shared/components/button/Button'
import Link from 'next/link'

export default function StoreDetails() {
  return (
    <div className="w-[40%] space-y-4">
      <Heading text="Enter store details" />
      <div className="border-backgroundBorder space-y-3 rounded-lg border border-solid p-8">
        <div className="space-y-3">
          <Heading2 text=" What kinds of food do you offer at your store?" />
          <div className="space-y-3">
            <p className="text-textTint">Select up to 3</p>
            <SelectCuisines />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-x-4">
        <Link href={'/setup'} className="block px-4 py-2 font-medium">
          Cancel
        </Link>
        <Button
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          textColor="text-white"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
