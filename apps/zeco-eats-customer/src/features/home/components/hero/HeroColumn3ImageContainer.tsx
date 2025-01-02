import HeroColumn3Image from './HeroColumn3Image'

export default function HeroColumn3ImageContainer() {
  return (
    <div className="relative -mr-28 h-full w-[70%]">
      <div className="absolute bottom-0 h-[75%] w-full">
        <HeroColumn3Image />
      </div>
    </div>
  )
}
