import ImageContainer from '@/shared/components/image/ImageContainer'
import CardTitle from '@/shared/components/text/CardTitle'

type PopularRestaurantsCardProps = {
  name: string
  image: string
}

export default function PopularRestaurantsCard({
  name,
  image,
}: PopularRestaurantsCardProps) {
  return (
    <div className="mx-auto h-fit w-full overflow-hidden rounded-lg border-2 border-solid border-backgroundBorder">
      <ImageContainer
        height="h-[12rem] md:h-[13rem] lg:h-[20rem] xl:h-[18rem] 2xl:h-[14rem]"
        width="w-[3rem]s w-full"
        imageAlt={`photo of ${name}`}
        src={image || '/devImages/profile.png'}
      />

      <div className="flex h-[4rem] items-center bg-primary">
        <div className="ml-2 2xl:ml-4">
          <CardTitle text={name} textColor="text-white" />
        </div>
      </div>
    </div>
  )
}
