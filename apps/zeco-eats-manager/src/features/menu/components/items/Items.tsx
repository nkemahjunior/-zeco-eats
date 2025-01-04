'use client'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import ImageContainer from '@/shared/components/image/ImageContainer'
import TextInput from '@/shared/components/inputs/TextInput'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import { ChangeEvent, useState } from 'react'
import { BiPlus, BiSave } from 'react-icons/bi'

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

      <div className="flex items-center justify-between">
        <TextInputWithIcon
          id="searchItem"
          placeHolder="Search"
          width="w-[20%]"
          className="placeholder:text-black"
          events={{ onChange: searchForItems }}
        />

        {toggleAddNewItem && (
          <TextInput
            id="addNewItem"
            placeHolder="Add new item"
            width="w-[15%]"
          />
        )}
      </div>

      <table className="w-full table-auto">
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
              className="border-backgroundBorder hover:bg-background cursor-pointer border-b-[0px] border-solid transition-colors duration-300 last:border-b-0"
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
  )
}
