import Logo from '../Logo'
import SignoutBtn from './SigninOutBtn'

export default function TopNav({
  toggleNavMobile,
  showNavMobile,
}: {
  toggleNavMobile: () => void
  showNavMobile: boolean
}) {
  return (
    <div className="flex w-full items-center justify-between">
      <Logo />

      <div className="hidden lg:block">
        <SignoutBtn />
      </div>

      <div className="flex h-full w-fit items-center justify-center lg:hidden">
        <div
          className="z-20 cursor-pointer space-y-2"
          onClick={toggleNavMobile}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${showNavMobile ? 'translate-y-2.5 rotate-45' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${showNavMobile ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              showNavMobile ? '-translate-y-2.5 -rotate-45' : ''
            }`}
          ></span>
        </div>
      </div>
    </div>
  )
}
