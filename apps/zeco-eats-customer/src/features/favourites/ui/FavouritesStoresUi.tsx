import Heading from '@/shared/components/text/Heading'
import FavouriteStores from '../components/FavouriteStores'

export default async function FavouriteStore() {
  return (
    <div className="mx-sm space-y-8 md:mx-md lg:mx-lg xl:mx-xl 2xl:mx-[14rem]">
      <Heading text="Favourite stores" />
      <FavouriteStores />
    </div>
  )
}
