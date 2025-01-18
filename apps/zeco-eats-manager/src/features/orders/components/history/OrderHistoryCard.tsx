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

export default function OrderHistoryCard() {
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const viewOrderHistoryDetails = () => {
    openModal(
      //Todo extract to component
      <div className="grid h-full grid-cols-1 gap-x-4 overflow-y-auto p-4 md:grid-cols-[65fr,35fr]">
        <div className="space-y-6 rounded-lg p-4 md:overflow-y-auto">
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
          <div className="space-y-2">
            <p className="font-medium"> Delivery driver</p>

            <div className="flex space-x-2">
              <ImageContainer
                imageAlt="picture of driver name"
                src="/devImages/pic.avif"
                roundedCorners="rounded-full"
                height="h-10"
                width="w-10"
              />

              <span className="font-medium">Riso Dan</span>
            </div>
          </div>

          <div>
            <p className="font-medium"> Delivery date</p>
            <p className="text-textTint"> 12 January 2024, 9:00 AM</p>
          </div>
        </div>
      </div>,
      {
        ...modalProps,
        height: 'h-[70%]   xl:h-[55%]',
        width: 'w-[94%] md:w-[80%] lg:w-[75%] xl:w-[55%] 2xl:w-[40%]',
        className: ' rounded-lg overflow-hidden',
      }
    )
  }

  return (
    <div
      className="border-backgroundBorder hover:bg-backgroundShade1 flex cursor-pointer items-center justify-between rounded-lg border border-solid px-5 py-3 transition-colors duration-300"
      onClick={viewOrderHistoryDetails}
    >
      <div className="flex space-x-2">
        <ImageContainer
          imageAlt="picture of customer ---"
          src="/devImages/pic.avif"
          roundedCorners="rounded-full"
          height="h-10"
          width="w-10"
        />
        <div className="flex flex-col space-y-1">
          <span className="font-medium">Lauren T</span>
          <span className="text-textTint block">000002</span>
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <span className="font-medium">Delivered</span>
        <span className="text-textTint block">55£</span>
      </div>
    </div>
  )
}
