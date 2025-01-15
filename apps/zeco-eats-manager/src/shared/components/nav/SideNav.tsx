import NavLink from './NavLink'
import {
  IoBasketOutline,
  IoHomeOutline,
  IoStorefrontOutline,
} from 'react-icons/io5'
import { BsBarChartLine, BsPeople } from 'react-icons/bs'
import {
  MdOutlinePayments,
  MdOutlineRestaurantMenu,
  MdOutlineSettings,
} from 'react-icons/md'
import { HiOutlineSpeakerphone } from 'react-icons/hi'

export default function SideNav() {
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
      <NavLink
        nestedLinks={{
          icon: <BsBarChartLine />,
          mainLink: 'Performance',
          childLink: ['Sales'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
      />
      <NavLink
        nestedLinks={{
          icon: <HiOutlineSpeakerphone />,
          mainLink: 'Marketing',
          childLink: ['Boast store', 'Run Ad'],
          initialPaddingLeft: 0,
          paddingIncrement: 1.5,
        }}
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
        href="/menu/overview"
      />
      <NavLink
        nestedLinks={{
          icon: <MdOutlinePayments />,
          mainLink: 'Payments',
          childLink: ['Payouts'],
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
