'use client'
import '@/shared/styles/carousel.css'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import PopularRestaurantsCard from '@/features/home/components/popularRestaurants/PopularRestaurantsCard'
import Link from 'next/link'
import { useSuspenseQuery } from '@tanstack/react-query'
import { popularRestaurantsOptions } from '@/features/home/api/options/options'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from '@/shared/components/carousel/EmblaCarouselArrowBtns'

export default function PopularRestaurantMobile() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, slidesToScroll: 'auto' },
    [Autoplay()]
  )
  const { data: popularRestaurants } = useSuspenseQuery(
    popularRestaurantsOptions()
  )

  // const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
  //   const autoplay = emblaApi?.plugins()?.autoplay
  //   if (!autoplay) return

  //   const resetOrStop =
  //     autoplay.options.stopOnInteraction === false
  //       ? autoplay.reset
  //       : autoplay.stop

  //   resetOrStop()
  // }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi) // removed auto play

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {popularRestaurants.map((restaurant, i) => (
            <div className="embla__slide" key={restaurant.id}>
              <div className="embla__slide__item">
                <Link href={`/store/${restaurant.id}`}>
                  <PopularRestaurantsCard
                    name={restaurant.name || ''}
                    image={restaurant.image || ''}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
