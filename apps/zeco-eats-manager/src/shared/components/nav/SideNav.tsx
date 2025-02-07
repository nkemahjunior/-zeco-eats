'use client'
import NavLink from './NavLink'
import { IoBasketOutline, IoHomeOutline } from 'react-icons/io5'
import { BsBarChartLine, BsPeople } from 'react-icons/bs'
import { MdOutlinePayments, MdOutlineRestaurantMenu } from 'react-icons/md'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { useActiveMenuId } from '@/shared/api/queries/hooks/hooks'
import SideNavLoading from './NavLinkLoading'

export default function SideNav() {
  const { data: menuId, isLoading } = useActiveMenuId()
  if (isLoading) return <SideNavLoading />
  return (
    <div className="h-full w-full space-y-4 border-0 border-solid border-red-700">
      <NavLink icon={<IoHomeOutline />} text="Home" />
      {/* <NavLink icon={<IoStorefrontOutline />} text="Stores" /> */}
      <NavLink
        nestedLinks={{
          icon: <IoBasketOutline />,
          mainLink: 'Orders',
          childLink: ['Manage', 'History'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
      />
      {/* <NavLink display it on home
        nestedLinks={{
          icon: <BsBarChartLine />,
          mainLink: 'Performance',
          childLink: ['Sales'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
      /> */}
      <NavLink
        icon={<HiOutlineSpeakerphone />}
        text="Marketing"
        href="/marketing/performance"
      />
      <NavLink
        nestedLinks={{
          icon: <BsPeople />,
          mainLink: 'Customers',
          childLink: ['My Reviews'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
      />
      <NavLink
        icon={<MdOutlineRestaurantMenu />}
        text="Menu"
        href={`/menu/${menuId?.id}/overview`}
      />
      <NavLink
        nestedLinks={{
          icon: <MdOutlinePayments />,
          mainLink: 'Payments',
          childLink: ['Payouts', 'Banking'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
      />
      {/* <NavLink
        nestedLinks={{
          //display all on one page , use #links
          icon: <MdOutlineSettings />,
          mainLink: 'Settings',
          childLink: ['General', 'Holiday hours', 'Preparation times'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
      /> */}
    </div>
  )
}
