import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading from '@/shared/components/text/Heading'
import { GoIssueOpened } from 'react-icons/go'
import { IoPauseSharp } from 'react-icons/io5'
import { MdOutlineEventBusy } from 'react-icons/md'
import Status from '../Status'
import { useState } from 'react'
import { RestaurantStatus } from '@/features/orders/types/restaurantStatus/restaurantStatusTypes'

interface fnProps {
  updateStatus: (arg: RestaurantStatus) => void
  status: RestaurantStatus
}

const statuses: {
  icon: JSX.Element
  status: RestaurantStatus
  desc: string
}[] = [
  {
    icon: <GoIssueOpened size={20} />,
    status: 'open',
    desc: 'Allow your restaurant to be open to customers',
  },
  {
    icon: <MdOutlineEventBusy size={20} />,
    status: 'busy',
    desc: 'Add more time to the standard ready time for your dishes',
  },
  {
    icon: <IoPauseSharp size={20} />,
    status: 'paused',
    desc: 'Your restaurant will be unavailable to customers',
  },
]

export default function Statuses() {
  //const [activeStatus, setActiveStatus] = useState<RestaurantStatus>(status)

  //   function changeActiveStatus(statuss: RestaurantStatus) {
  //     setActiveStatus(statuss)
  //     updateStatus(statuss)
  // }
  return (
    <div className="h-full space-y-8 p-6">
      <div className="flex items-center gap-x-16">
        <CloseBtn />
        <Heading className="text-center" text="Store status" />
      </div>
      {statuses.map((item) => (
        <Status
          id={item.status}
          key={item.status}
          icon={item.icon}
          status={item.status}
          desc={item.desc}
          //activeStatus={activeStatus}
          //changeActiveStatus={changeActiveStatus}
        />
      ))}
    </div>
  )
}
