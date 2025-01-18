import Logo from '../Logo'

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

      <div>
        <button className="bg-background hover:bg-backgroundShade2 hidden rounded-lg px-6 py-3 font-medium transition-colors duration-300 lg:block">
          <span>Logout</span>
        </button>
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
