import HeroSearchBar from './HeroSearchBar'

export default function HeroText() {
  return (
    <div className="flex items-center justify-center xl:h-full xl:justify-start">
      <div className="xl:h-fit xl:whitespace-nowrap">
        <p className="mb-2 text-center text-xs md:text-sm lg:text-base xl:mb-4 xl:text-start">
          Order Restaurant food, takeaway and groceries.
        </p>
        <p className="mb-2 text-center text-3xl font-semibold text-secondary md:text-4xl xl:mb-4 xl:text-start xl:text-5xl 2xl:text-6xl">
          Feast Your Senses,
        </p>
        <p className="mb-2 text-center text-3xl font-semibold text-primary md:text-4xl xl:mb-0 xl:text-start xl:text-5xl 2xl:text-6xl">
          Fast and Fresh
        </p>
        <p className="mb-2 text-center text-xs lg:text-base xl:mt-8 xl:text-start">
          Enter a location to see what is available
        </p>

        <HeroSearchBar />
      </div>
    </div>
  )
}
