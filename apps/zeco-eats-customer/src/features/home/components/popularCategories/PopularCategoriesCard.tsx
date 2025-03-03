import CardTitle from '@/shared/components/text/CardTitle'
import ImageContainer from '@/shared/components/image/ImageContainer'

interface fnProps {
  name: string
  image: string
  numRestaurants: number
}

export default function PopularCategoriesCard({
  name,
  image,
  numRestaurants,
}: fnProps) {
  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg border-2 border-solid border-backgroundBorder">
      <ImageContainer
        imageAlt={`Picture of ${name}`}
        src={image}
        quality={100}
        height="h-[12rem] md:h-[13rem] lg:h-[20rem] xl:h-[18rem] 2xl:h-[14rem]"
        width="w-full"
        sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, (min-width: 1280px) 16.67vw"
      />

      <div className="flex h-[4rem] items-center bg-inherit md:h-[5rem] xl:bg-background">
        <div className="ml-2 2xl:ml-4">
          <CardTitle text={name} textColor="text-secondary " />
          <p className="text-primary">{numRestaurants} Restaurants</p>
        </div>
      </div>
    </div>
  )
}
