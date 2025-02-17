import Heading2 from '@/shared/components/text/Heading2'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import ClockIcon from '../../icons/clock-watch-svgrepo-com.svg'
import EditItem from '../../icons/edit-svgrepo-com.svg'
import Promotion from '../../icons/promotion-stairs-svgrepo-com.svg'
import Boost from '../../icons/up-arrow-svgrepo-com.svg'

export default function QuickActions() {
  return (
    <div className="space-y-6 border-0 border-solid border-pink-700">
      <Heading2 text="Quick Actions" />

      <div className="flex-col justify-center space-y-6">
        <Link
          href="/marketing/create-campaign"
          className="flex items-center space-x-2"
        >
          <span>
            <Boost width={25} height={25} />
          </span>
          <span>Boost Store</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Link>

        <Link
          href="/marketing/create-campaign"
          className="flex items-center space-x-2"
        >
          <span>
            <Promotion width={25} height={25} />
          </span>
          <span>Run a promotion</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Link>
        <Link href="/menu/items" className="flex items-center space-x-2">
          <span>
            <EditItem width={25} height={25} />
          </span>
          <span>Edit item </span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Link>
        <Link
          href="/menu/schedule/edit"
          className="flex items-center space-x-2"
        >
          <span>
            <ClockIcon width={25} height={25} />
          </span>
          <span>Edit menu schedule</span>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Link>
      </div>
    </div>
  )
}
