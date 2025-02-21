'use client'
import Dishes from '../components/dishes/Dishes'
import Filters from '../components/filters/Filters'
import FoodCategoriesSlider from '../components/FoodCategoriesSlider'
import { BrowseMenusProvider } from '../context/BrowseMenusContext'

export default function BrowseDishes() {
  return (
    <BrowseMenusProvider>
      <div className="mx-sm md:mx-md lg:mx-lg xl:mx-xl 2xl:mx-[14rem]">
        <FoodCategoriesSlider />
        <Filters />
        <Dishes />
      </div>
    </BrowseMenusProvider>
  )
}
