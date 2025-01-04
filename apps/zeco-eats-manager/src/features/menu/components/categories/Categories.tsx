'use client'
import Button from '@/shared/components/button/Button'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import ImageContainer from '@/shared/components/image/ImageContainer'
import TextInput from '@/shared/components/inputs/TextInput'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Line from '@/shared/components/Line'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading from '@/shared/components/text/Heading'
import Heading2 from '@/shared/components/text/Heading2'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { ChangeEvent, useContext, useState } from 'react'
import { BiPlus, BiSave } from 'react-icons/bi'

type item = {
  name: string
  price: string
  image: string
}

const fakeCategories = Array.from({ length: 5 }, (_, i) => {
  return {
    name: `Fries${i}`,
    Menu: `My Place Menu`,
    Items: [
      { name: `Burger`, price: '£12.02', image: 'bla bla' },
      { name: `Fries Rice`, price: '£12.02', image: 'bla bla' },
      { name: `Porridge yam`, price: '£12.02', image: 'bla bla' },
      { name: `Achu`, price: '£12.02', image: 'bla bla' },
      { name: `Burger Mino`, price: '£12.02', image: 'bla bla' },
    ], // all items for a category should come here
  }
})

export default function Categories() {
  const [searchCategories, setSearchCategories] = useState(fakeCategories)
  const [toggleAddNewCategory, setToggleAddNewCategory] = useState(false)
  const { openModal, modalProps } = useContext(
    ModalContext
  ) as modalContextTypes

  const searchForCategories = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setSearchCategories(fakeCategories)
      return
    }
    const arr = searchCategories.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchCategories(arr)
  }

  const openCategory = (categoryName: string, items: item[]) => {
    openModal(
      <div className="h-full space-y-4 px-4 py-4">
        <div className="sticky top-0 z-[1] space-y-2 bg-white py-2">
          <div className="flex w-full items-center justify-end">
            <CloseBtn />
          </div>

          <div className="space-y-4">
            <Heading2 text={categoryName} />
          </div>
          <Line />
        </div>

        <div className="space-y-6">
          {items.map((el) => (
            <div key={el.name} className="flex items-center justify-between">
              <div className="flex gap-x-4">
                <ImageContainer
                  src="/devImages/food1.webp"
                  imageAlt=""
                  height="h-20"
                  width="w-20"
                  roundedCorners="rounded-md"
                />

                <div className="flex flex-col gap-y-4">
                  <span>{el.name}</span>
                  <span>{el.price}</span>
                </div>
              </div>
              <Button>Remove</Button>
            </div>
          ))}
        </div>
      </div>,
      {
        ...modalProps,
        height: ' min-h-[60%] max-h-[90%] ',
        width: 'w-[30%]',
      }
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Heading text={`Categories`} />

        <ButtonWithIcon
          textColor="text-white"
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          width="w-[9rem]"
          events={{ onClick: () => setToggleAddNewCategory((v) => !v) }}
        >
          <span className="font-medium text-white">
            {toggleAddNewCategory ? <BiSave size={20} /> : <BiPlus size={20} />}
          </span>
          <span> {toggleAddNewCategory ? 'Save' : 'New category'}</span>
        </ButtonWithIcon>
      </div>
      <div className="flex items-center justify-between">
        <TextInputWithIcon
          id="searchCategory"
          placeHolder="Search"
          width="w-[20%]"
          className="placeholder:text-black"
          events={{ onChange: searchForCategories }}
        />

        {toggleAddNewCategory && (
          <TextInput
            id="addNewCategory"
            placeHolder="Add new category"
            width="w-[15%]"
          />
        )}
      </div>

      <div>
        <table className="w-full table-auto">
          <thead className="">
            <tr className="border-backgroundBorder border-b border-solid">
              <th className="px-4 py-2 text-start">Name</th>
              <th className="px-4 py-2 text-start">Menu</th>
              <th className="px-4 py-2 text-start">Items</th>
            </tr>
          </thead>

          <tbody>
            {searchCategories.map((el, i) => (
              <tr
                key={i}
                className="border-backgroundBorder hover:bg-background cursor-pointer transition-colors duration-300"
                onClick={() => openCategory(el.name, el.Items)}
              >
                <td className="flex items-center space-x-4 px-4 py-4 text-start">
                  {el.name}
                </td>

                <td className="px-4 py-4 text-start">{el.Menu}</td>

                <td className="space-x-2 px-4 py-4 text-start">
                  {el.Items.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
