import Heading from '@/shared/components/text/Heading'
import SetupCard from './SetupCard'
import { IoStorefront } from 'react-icons/io5'
import { ImSpoonKnife } from 'react-icons/im'
import { MdOutlinePayments } from 'react-icons/md'

export default function SetupHome() {
  return (
    <div className="h-fit w-[40%] space-y-4">
      <Heading text="Set up and verify your store" />
      <div className="space-y-3">
        <SetupCard
          href="/setup/store-details"
          icon={<IoStorefront size={20} />}
          title="Enter store details"
          desc="Tell us more about your cuisine, phone number and pick up instructions"
        />
        <SetupCard
          href="/setup/upload-menu"
          icon={<ImSpoonKnife size={20} />}
          title="Upload menu"
          desc="Submit a photo and we will build your menu for you"
        />
        <SetupCard
          href="/setup/setup-payment"
          icon={<MdOutlinePayments size={20} />}
          title="Set up payment"
          desc="Provide your banking info to make sure you get paid on time"
        />
      </div>
    </div>
  )
}
