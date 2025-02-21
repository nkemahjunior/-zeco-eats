'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from '@/shared/components/carousel/EmblaCarouselArrowBtns'
import '@/features/browseMenus/styles/foodCategoriesSliderStyle.css'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'
import { foodCategoriesIcons } from '@/shared/utils/constants/iconDetails'
import { useBrowseMenus } from '../context/BrowseMenusContext'
import { FoodCategoryName } from '@/shared/types/sharedTypes'

// Colors for backgrounds
const colors = [
  'bg-red-200',
  'bg-yellow-200',
  'bg-green-200',
  'bg-blue-200',
  'bg-pink-200',
  'bg-purple-200',
]

export default function FoodCategoriesSlider() {
  const { applyFilter } = useBrowseMenus()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 'auto',
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const [activeIcon, setActiveIcon] = useState<FoodCategoryName | null>(null)

  const iconClicked = (name: FoodCategoryName) => {
    setActiveIcon(name)
    applyFilter('cuisine', name)
  }

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {foodCategoriesIcons.map((el, i) => (
            <div
              className="embla__slide flex cursor-pointer flex-col items-center space-y-2"
              key={i}
              onClick={() => iconClicked(el.name)}
            >
              <div
                className={`rounded-full p-3 transition-colors duration-300 ${colors[i % colors.length]}`}
              >
                <div
                  className={` ${activeIcon === el.name ? 'rotate-[95deg]' : ''} transition-transform duration-300`}
                >
                  <el.Icon width={35} height={35} />
                </div>
              </div>
              <p className="text-xs font-medium"> {el.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-4 m-auto hidden touch-manipulation rounded-full bg-background p-1 text-black hover:bg-stone-200 disabled:hidden lg:block lg:p-2"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <BsArrowLeft size={20} />
      </button>
      <button
        className="absolute right-0 top-4 m-auto hidden touch-manipulation rounded-full bg-background p-1 text-black hover:bg-stone-200 disabled:hidden lg:block lg:p-2"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <BsArrowRight size={20} />
      </button>
    </div>
  )
}

//CATEGORIES
/**
 * breakfast
 * launch
 * super
 * BBQ
 * Family Meals
 * Cameroonian
 * Salads
 * Bakery
 * Ice Cream
 * Fast Foods
 * Vegan
 * Desserts and sweets
 */
