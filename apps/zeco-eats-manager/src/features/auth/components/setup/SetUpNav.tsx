import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import Logo from '@/shared/components/Logo'
import { MdOutlineLogout } from 'react-icons/md'

export default function SetupNav() {
  return (
    <div className="border-backgroundBorder flex h-[4rem] items-center justify-between border-b border-solid px-12">
      <Logo />

      <ButtonWithIcon
        color="bg-white"
        hoverColor="hover:bg-white"
        textColor="text-textTint"
        width="w-[6rem]"
      >
        <span>
          <MdOutlineLogout />
        </span>
        <span>Sign out</span>
      </ButtonWithIcon>
    </div>
  )
}
