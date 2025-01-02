import HeroOrderProcesses from './HeroOrderProcesses'
import HeroColumn3ImageContainer from './HeroColumn3ImageContainer'

export default function HeroColumn3() {
  return (
    <div className="-ml-40 mt-8 hidden rounded-tl-[15rem] xl:block xl:bg-primary 2xl:-ml-56 2xl:mt-12">
      <div className="-ml-4 flex h-full w-[98%]">
        <HeroColumn3ImageContainer />
        <HeroOrderProcesses />
      </div>
    </div>
  )
}
