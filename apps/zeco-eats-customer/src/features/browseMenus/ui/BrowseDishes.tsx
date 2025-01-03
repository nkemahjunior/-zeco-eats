import Dishes from '../components/dishes/Dishes'
import Filters from '../components/filters/Filters'
import FoodCategoriesSlider from '../components/FoodCategoriesSlider'

export default function BrowseDishes() {
  return (
    <div className="mx-sm md:mx-md lg:mx-lg xl:mx-xl 2xl:mx-[14rem]">
      <FoodCategoriesSlider />
      <Filters />
      <Dishes />
    </div>
  )
}
