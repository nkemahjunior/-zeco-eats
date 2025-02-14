import Line from '@/shared/components/Line'
import Heading from '@/shared/components/text/Heading'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function CustomisationsMain() {
  return (
    <div className="h-full w-full space-y-6">
      <Heading text="Customisations" />
      <div className="space-y-6">
        <div>
          <p className="font-medium">Customer Instructions</p>
          <p>Chose Bread type</p>
        </div>

        <Line />

        <div className="border-backgroundBorder flex cursor-pointer justify-between space-y-2 border-b border-solid py-6">
          <div>
            <p className="font-medium">Edit options</p>
            <p>Manage which options are available to customers in this set</p>
          </div>
          <MdKeyboardArrowRight size={20} />
        </div>

        <div className="border-backgroundBorder flex cursor-pointer justify-between space-y-2 border-b border-solid py-6">
          <div>
            <p className="font-medium">Add to items</p>
          </div>
          <MdKeyboardArrowRight size={20} />
        </div>

        <div className="flex cursor-pointer justify-between space-y-2 py-6">
          <div>
            <p className="font-medium">Customisation rules</p>
            <p>Set limits for the options in this customisation</p>
          </div>
          <MdKeyboardArrowRight size={20} />
        </div>
      </div>
    </div>
  )
}
