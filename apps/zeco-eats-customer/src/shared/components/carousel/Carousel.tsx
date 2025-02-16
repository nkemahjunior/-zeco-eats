'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import PopularRestaurantsCard from '@/features/home/components/popularRestaurants/PopularRestaurantsCard'
import { useSuspenseQuery } from '@tanstack/react-query'
import { popularRestaurantsOptions } from '@/features/home/api/options/options'

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 'auto' }, [
    Autoplay(),
  ])
  const { data: slides } = useSuspenseQuery(popularRestaurantsOptions)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__item">
                <PopularRestaurantsCard
                  name={slide.name || ''}
                  image={slide.image || ''}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 'use client'
// import '@/shared/styles/carousel.css'
// import React from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
// import { EmblaOptionsType } from 'embla-carousel'
// import {
//   NextButton,
//   PrevButton,
//   usePrevNextButtons,
// } from './EmblaCarouselArrowBtns'
// import PopularRestaurantsCard from '@/features/home/components/popularRestaurants/PopularRestaurantsCard'

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

// export default function Carousel({ slides, options }: PropType) {
//   // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

//   // const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
//   //   const autoplay = emblaApi?.plugins()?.autoplay
//   //   if (!autoplay) return

//   //   const resetOrStop =
//   //     autoplay.options.stopOnInteraction === false
//   //       ? autoplay.reset
//   //       : autoplay.stop

//   //   resetOrStop()
//   // }, [])

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi) // removed auto play

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div
//               className="embla__slide border-2 border-solid border-red-700"
//               key={index}
//             >
//               <div className="embla__slide__item">
//                 <PopularRestaurantsCard />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="hidden lg:block">
//         <div className="embla__controls">
//           <div className="embla__buttons">
//             <PrevButton
//               onClick={onPrevButtonClick}
//               disabled={prevBtnDisabled}
//             />
//             <NextButton
//               onClick={onNextButtonClick}
//               disabled={nextBtnDisabled}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
