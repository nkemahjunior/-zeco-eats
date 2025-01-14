'use client'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading from '@/shared/components/text/Heading'
import Status from './Status'
import { useState } from 'react'
import { GoIssueOpened } from 'react-icons/go'
import { MdOutlineEventBusy } from 'react-icons/md'
import { IoPauseSharp } from 'react-icons/io5'
import { StatusType } from '../../oderTypes'

interface fnProps {
  updateStatus: (arg: StatusType) => void
  status: StatusType
}

const statuses: { icon: JSX.Element; status: StatusType; desc: string }[] = [
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

export default function ChangeRestaurantStatusModal({
  updateStatus,
  status,
}: fnProps) {
  const [activeStatus, setActiveStatus] = useState<StatusType>(status)

  function changeActiveStatus(statuss: StatusType) {
    setActiveStatus(statuss)
    updateStatus(statuss)
  }
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
          activeStatus={activeStatus}
          changeActiveStatus={changeActiveStatus}
        />
      ))}
    </div>
  )
}
