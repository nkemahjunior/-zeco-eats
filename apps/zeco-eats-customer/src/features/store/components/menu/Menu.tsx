'use client'
import { useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import MenuTimeAndSearch from './MenuTimeAndSearch'
import MenuTitle from './MenuTitle'
import CurrentMenuIndicator from './CurrentMenuIndicator'
import MenuItem from './MenuItem'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { useDeviceType } from '@/shared/hooks/useDeviceType'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getCompleteRestaurantMenuOption } from '../../api/queries/options/options'
import { useStoreId } from '../../hooks/useStoreId'

export default function Menu() {
  // const menuTitleRefs = useRef<Record<number, HTMLSpanElement | null>>({});

  const storeId = useStoreId()
  const { data: completeMenu } = useSuspenseQuery(
    getCompleteRestaurantMenuOption(Number(storeId))
  )

  // console.log("*********************************************");
  // console.log(completeMenu);
  const { isMobile } = useDeviceType()

  const [menuTitleDimension, setmenuTitleDimension] = useState({
    left: 0,
    width: 0,
  })
  const [manualScroll, setManualScroll] = useState(false)
  const [scrollContainerWidth, setScrollContainerWidth] = useState(0)
  const [disableBtn, setDisableBtn] = useState({
    forward: true,
    backward: false,
  })

  const scrollAreaRef = useRef<HTMLDivElement | null>(null)
  const menuTitleRefs = useRef<(HTMLSpanElement | null)[]>([])
  const menuRefs = useRef<(HTMLDivElement | null)[]>([])

  const titles = completeMenu.categories.map((el) => el.category.name)
  //   = [
  //   'Sides',
  //   'Sandwiches',
  //   'Burgers',
  //   'All Day Dine',
  //   'Toasts',
  //   'Desserts',
  //   'Saver Menu',
  //   'Soft Drinks',
  //   'Coffees',
  //   'Hot Teas',
  //   'Iced Teas',
  //   'Juices',
  //   'Beers and Ciders',
  //   'Wines',
  //   'Bubbles',
  //   // "Smoothies",
  //   // "Mocktails",
  //   // "Cocktails",
  //   // "Spirits",
  //   // "Milkshakes",
  //   // "Appetizers",
  //   // "Soups",
  //   // "Salads",
  //   // "Main Course",
  //   // "Kids Menu",
  // ]

  useEffect(() => {
    if (!scrollAreaRef.current) return
    const curMenuTitle = menuTitleRefs.current[0]
    setmenuTitleDimension({
      left: curMenuTitle?.offsetLeft || 0,
      width: curMenuTitle?.getBoundingClientRect().width || 0,
    })
    setScrollContainerWidth(scrollAreaRef.current.scrollWidth)
  }, [])

  useEffect(() => {
    function observerCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrollAreaRef.current) {
          const value = Number((entry.target as HTMLDivElement).dataset.value)
          const scrollAreaRect = scrollAreaRef.current.getBoundingClientRect()
          const menuTitleRefsValue = menuTitleRefs.current[value]
          if (!menuTitleRefsValue) return
          const curMenuTitle = menuTitleRefsValue.getBoundingClientRect()
          if (!curMenuTitle) return

          setDisableBtn({
            forward: value == titles.length - 1,
            backward: value == 0,
          })

          if (
            //60% of visible part of the scroll box
            curMenuTitle.right >= 0.6 * scrollAreaRect.right &&
            !manualScroll
          ) {
            const index =
              value + 2 > titles.length - 1 ? titles.length - 1 : value + 2
            menuTitleRefs.current[index]?.scrollIntoView({
              behavior: 'auto',
              block: 'nearest',
              inline: 'nearest',
            })
          }

          if (
            //40% of visible part of the scroll box
            curMenuTitle.right <= 0.4 * scrollAreaRect.right &&
            !manualScroll
          ) {
            const index = value - 2 < 0 ? 0 : value - 2
            menuTitleRefs.current[index]?.scrollIntoView({
              behavior: 'auto',
              block: 'nearest',
              inline: 'start',
            })
          }

          //width and left changes when title scroll into view
          const newLeft = menuTitleRefsValue.offsetLeft
          const newWidth = menuTitleRefsValue.getBoundingClientRect().width
          setTimeout(() => {
            setmenuTitleDimension({
              left: newLeft,
              width: newWidth,
            })
          }, 200)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px ',
      threshold: isMobile ? 0.2 : 0.5, //0.5
    })

    const menuRefCur = menuRefs.current
    menuRefCur.forEach((el, index) => {
      if (el) observer.observe(el)
    })

    return () => {
      menuRefCur.forEach((el) => {
        if (el) observer.unobserve(el)
      })
    }
  }, [
    menuTitleRefs,
    menuRefs,
    scrollAreaRef,
    manualScroll,
    isMobile /*disableBtn*/,
    titles.length,
  ])

  const scrollMenuOnClick = (direction: 'forward' | 'backward') => {
    setManualScroll(true)
    const index = direction == 'forward' ? titles.length - 1 : 0
    menuRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })

    setTimeout(() => {
      setManualScroll(false)
    }, 1000)
  }

  return (
    <>
      <div className="sticky top-16 z-10 w-full space-y-6 bg-white lg:top-24 2xl:top-[12.48rem]">
        <MenuTimeAndSearch />

        <div className="flex w-full items-center space-x-4">
          <div className="w-[2%]">
            <BiMenu size={20} />
          </div>

          <div className="w-[97%] lg:w-[88%]">
            <div
              ref={scrollAreaRef}
              //ofset parent
              className="scrollbar-hidden relative flex w-full flex-col overflow-x-auto"
            >
              <div className="flex w-full items-center space-x-4 lg:space-x-8">
                {' '}
                {titles.map((el, i) => (
                  <MenuTitle
                    key={i}
                    titleIindex={i}
                    manualScroll={setManualScroll}
                    menuRefs={menuRefs}
                    menuTitleRefs={menuTitleRefs}
                    testEl={el}
                  />
                ))}
              </div>

              <CurrentMenuIndicator
                scrollContainerWidth={scrollContainerWidth}
                menuTitleDimension={menuTitleDimension}
              />
            </div>
          </div>

          <div className="hidden w-[8%] lg:block">
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={() => scrollMenuOnClick('backward')}
                className={`flex items-center justify-center rounded-full ${disableBtn.backward ? 'cursor-not-allowed bg-background text-stone-400' : 'bg-backgroundShade1 hover:bg-backgroundShade2'} p-3`}
                disabled={disableBtn.backward}
              >
                <span>
                  <BsArrowLeft size={20} />
                </span>
              </button>
              <button
                onClick={() => scrollMenuOnClick('forward')}
                className={`flex items-center justify-center rounded-full ${disableBtn.forward ? 'cursor-not-allowed bg-background text-stone-400' : 'bg-backgroundShade1 hover:bg-backgroundShade2'} p-3`}
                disabled={disableBtn.forward}
              >
                <span>
                  <BsArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8 divide-y-4 divide-backgroundBorder bg-white lg:space-y-8 lg:divide-y-0">
        {titles.map((el, i) => (
          <MenuItem key={i} menuIndex={i} menuRefs={menuRefs} testEl={el} />
        ))}
      </div> */}
      <div className="mt-8 divide-y-4 divide-backgroundBorder bg-white lg:space-y-8 lg:divide-y-0">
        {completeMenu.categories.map((el, i) => (
          <MenuItem
            key={i}
            menuIndex={i}
            menuRefs={menuRefs}
            categoryName={el.category.name}
            items={el.items}
          />
        ))}
      </div>
    </>
  )
}
