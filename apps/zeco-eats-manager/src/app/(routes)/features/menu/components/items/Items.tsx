'use client'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import ImageContainer from '@/shared/components/image/ImageContainer'
import TextInput from '@/shared/components/inputs/TextInput'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { ChangeEvent, useContext, useState } from 'react'
import { BiPlus, BiSave } from 'react-icons/bi'
import EditItem from '../overview/EditItem'

type item = {
  name: string
  price: string
  image: string
  menu: string
  categories: string
}

const fakeItems = Array.from({ length: 5 }, (_, i) => {
  return {
    name: `Burger`,
    price: '£12.02',
    image: 'bla bla',
    menu: `The place Monday Menu`,
    categories: `Fries${i}`,
  }
})

export default function Items() {
  // const [price, setPrice] = useState(0)
  // const sortPrices = [100, 200, 300, 400, 500] //when real data comes, take min price and create sort prices by adding 50 or whatever to it
  const [searchItems, setSearchItems] = useState(fakeItems)
  const [toggleAddNewItem, setToggleAddNewItem] = useState(false)
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const searchForItems = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setSearchItems(fakeItems)
      return
    }
    const arr = searchItems.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchItems(arr)
  }

  const openCategory = (items: item) => {
    openModal(<EditItem />, {
      ...modalProps,
      centerChildVer: false,
      childPos: 'justify-end',
      showCloseBtn: false,
      height: ' h-full',
      width: 'w-full md:w-[60%] lg:w-[45%] xl:w-[35%]  2xl:w-[20%]',
    })
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Heading text={`Items`} />

        <ButtonWithIcon
          textColor="text-white"
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          width="w-[9rem]"
          events={{ onClick: () => setToggleAddNewItem((v) => !v) }}
        >
          <span className="font-medium text-white">
            {toggleAddNewItem ? <BiSave size={20} /> : <BiPlus size={20} />}
          </span>
          <span> {toggleAddNewItem ? 'Save' : 'New Item'}</span>
        </ButtonWithIcon>
      </div>

      <div className="flex flex-col-reverse items-center gap-x-4 gap-y-4 md:flex-row lg:justify-between">
        <TextInputWithIcon
          id="searchItem"
          placeHolder="Search"
          width="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[20%]"
          className="placeholder:text-black"
          events={{ onChange: searchForItems }}
        />

        {toggleAddNewItem && (
          <TextInput
            id="addNewItem"
            placeHolder="Add new item"
            width="w-full lg:w-[60%] xl:w-[40%] 2xl:w-[15%]"
          />
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-nowrap">
          <thead className="">
            <tr className="border-backgroundBorder border-b border-solid">
              <th className="px-4 py-2 text-start">Photo</th>
              <th className="px-4 py-2 text-start">Name</th>
              <th className="px-4 py-2 text-start">Price</th>
              <th className="px-4 py-2 text-start">Menu</th>
              <th className="px-4 py-2 text-start">Category</th>
            </tr>
          </thead>

          <tbody>
            {searchItems.map((el, i) => (
              <tr
                key={i}
                className="border-backgroundBorder hover:bg-background cursor-pointer transition-colors duration-300"
                onClick={() => openCategory(el)}
              >
                <td className="px-4 py-4 text-start">
                  <ImageContainer
                    src="/devImages/food1.webp"
                    imageAlt=""
                    height="h-[3.5rem]"
                    width="w-[3.5rem]"
                    roundedCorners="rounded-md"
                  />
                </td>

                <td className="px-4 py-4 text-start font-medium">{el.name}</td>

                <td className="px-4 py-4 text-start">{el.price}</td>

                <td className="px-4 py-4 text-start">{el.menu}</td>
                <td className="px-4 py-4 text-start">{el.categories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
