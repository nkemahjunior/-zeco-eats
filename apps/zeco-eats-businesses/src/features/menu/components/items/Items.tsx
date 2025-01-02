'use state'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import Line from '@/shared/components/Line'
import Heading from '@/shared/components/text/Heading'
import { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'

export default function Items() {
  const [price, setPrice] = useState(0)
  const sortPrices = [100, 200, 300, 400, 500] //when real data comes, take min price and create sort prices by adding 50 or whatever to it
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        {' '}
        <Heading text={`Items`} />
        <ButtonWithIcon
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          width="w-fit"
          className="px-4 text-white"
        >
          <span>
            <BiPlus size={20} />
          </span>
          <span>New item</span>
        </ButtonWithIcon>
      </div>

      <Line />

      <div className="flex">
        <div className="bg-background has-[:focus]:border-secondary flex h-[2.5rem] w-full items-center space-x-2 rounded-lg border-2 border-solid border-transparent px-4 has-[:focus]:bg-white">
          <label htmlFor="searchItem">
            <CiSearch />
          </label>

          <input
            id="searchItem"
            type="text"
            placeholder="Search category"
            className="w-full bg-inherit outline-none"
            //onChange={createNew ? setNewCategoryOnChange : searchForCategories}
          />
        </div>

        <CustomSelect data={sortPrices} onchange={setPrice} />
      </div>
    </div>
  )
}
