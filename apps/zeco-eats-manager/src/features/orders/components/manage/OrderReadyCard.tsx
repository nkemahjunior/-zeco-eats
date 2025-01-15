'use client'
import Button from '@/shared/components/button/Button'
import ImageContainer from '@/shared/components/image/ImageContainer'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading from '@/shared/components/text/Heading'
import Heading2 from '@/shared/components/text/Heading2'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { useContext } from 'react'

const fakeOrders = {
  customer: 'Lauren sho',
  driver: 'Rico Paw',
  arrivingIn: '10 mins',
  totalPrice: '100£',
  orderID: '00002',
  oder: [
    {
      qty: 2,
      name: 'Fried Rice',
      price: '20£',
      toppings: [
        {
          toppingTitle: 'Choose type of meat',
          qty: 3,
          toppingName: 'Turkey',
          price: '6£',
        },
        {
          toppingTitle: 'Choose vegetable',
          qty: 1,
          toppingName: 'Spinach',
          price: '2£',
        },
      ],
    },

    {
      qty: 2,
      name: 'Turning Plaintain',
      price: '10£',
    },
  ],
}

export default function OrderReadyCard() {
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const viewOrderDetails = () => {
    openModal(
      <div className="grid h-full grid-cols-[65fr,35fr] gap-x-4 p-4">
        <div className="space-y-6 overflow-y-auto rounded-lg p-4">
          <div className="flex items-center gap-x-16">
            <CloseBtn />
            <Heading className="text-center" text={`CustomerName . 00002`} />
          </div>
          <div>
            <p className="font-medium underline">4 items</p>
          </div>
          <div className="space-y-2 font-medium">
            {fakeOrders.oder.map((el, i) => (
              <div key={i}>
                <div className="border-backgroundBorder border-b border-solid py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span>{el.qty}</span>
                      <span>x</span>
                      <span>{el.name}</span>
                    </div>

                    <span className="inline-block">{el.price}</span>
                  </div>

                  <div className="space-y-2 pl-8">
                    {el.toppings &&
                      el.toppings.map((topping, i) => (
                        <div key={`toppings${i}`}>
                          <span className="text-textTint block">
                            {topping.toppingTitle}
                          </span>
                          <div className="border-backgroundBorder flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span>{topping.qty}</span>
                              <span>x</span>
                              <span>{topping.toppingName}</span>
                            </div>

                            <span className="inline-block">{el.price}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-textTint font-normal">Subtotal</span>
              <span>110£</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-textTint font-normal">Tax</span>
              <span>1£</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-lg p-4">
          <Heading2 text="Ready in 10 min" />
          <div className="border-backgroundBorder h-[15rem] rounded-md border border-solid p-2">
            <div className="flex space-x-2">
              <ImageContainer
                imageAlt="picture of driver name"
                src="/devImages/pic.avif"
                roundedCorners="rounded-full"
                height="h-10"
                width="w-10"
              />
              <div className="flex flex-col space-y-1">
                <span className="font-medium">Riso Dan</span>
                <span className="text-textTint block">Arriving in 12 min</span>
              </div>
            </div>
          </div>
          <div>
            <Button px="w-full">Ready</Button>
          </div>
        </div>
      </div>,
      {
        ...modalProps,
        height: 'h-[55%]',
        width: 'w-[40%]',
        className: ' rounded-lg overflow-hidden',
      }
    )
  }

  return (
    <div
      className="border-backgroundBorderBorder flex cursor-pointer items-center justify-between rounded-lg border border-solid bg-stone-50 p-4"
      onClick={viewOrderDetails}
    >
      <div className="flex flex-col justify-center">
        <span className="block">Driver&apos;s Name</span>
        <div className="text-textTint space-x-1">
          <span className="inline-block">00012</span>
          <span className="inline-block">&middot;</span>
          <span className="inline-block">2 items</span>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <div>
          <span className="text-primary block">Arriving now</span>
          <span className="text-textTint block">Handoff order</span>
        </div>
        <ImageContainer
          imageAlt="picture of driver name"
          src="/devImages/pic.avif"
          roundedCorners="rounded-full"
          height="h-10"
          width="w-10"
        />
      </div>
    </div>
  )
}
