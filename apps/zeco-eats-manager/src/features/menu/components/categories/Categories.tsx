'use client'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import {
  ModalContext,
  modalContextTypes,
} from '@/shared/context/modal/ModalProvider'
import { ChangeEvent, useContext, useState } from 'react'
import { BiPlus, BiSave } from 'react-icons/bi'

const fakeCategories = Array.from({ length: 5 }, (_, i) => {
  return {
    name: `Fries${i}`,
    Menu: `My Place Menu`,
    Items: `${i}Items`,
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

  const openCategory = () => {
    openModal(
      <div className="h-full border-2 border-solid border-red-700 px-4 py-4">
        {' '}
        content
      </div>,
      {
        ...modalProps,
        height: ' h-[60%]',
        width: 'w-[50%]',
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
            {toggleAddNewCategory ? <BiSave /> : <BiPlus />}
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
                onClick={() => openCategory()}
              >
                <td className="flex items-center space-x-4 px-4 py-4 text-start">
                  {el.name}
                </td>

                <td className="px-4 py-4 text-start">{el.Menu}</td>

                <td className="space-x-2 px-4 py-4 text-start">{el.Items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
