import { CiSearch } from 'react-icons/ci'
import { IoAddOutline } from 'react-icons/io5'
import SortableCategories from './SortableCategories'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import Button from '@/shared/components/button/Button'

export default function MenuCategoryAndItems() {
  return (
    <div className="space-y-8">
      <div className="flex w-full space-x-4">
        <div className="has-[:focus]:border-secondary bg-background flex h-[2.5rem] w-full items-center space-x-2 rounded-lg border-2 border-solid border-transparent px-4 has-[:focus]:bg-white">
          <span>
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search item"
            className="w-full bg-inherit outline-none"
          />
        </div>

        <div className="flex items-center space-x-4">
          <ButtonWithIcon width="w-20" height="h-[2.5rem]">
            <span>
              <IoAddOutline />
            </span>
            <span>Add</span>
          </ButtonWithIcon>

          <Button px="w-20" py="h-[2.5rem]">
            Save
          </Button>
        </div>
      </div>

      <div className="mr-[12rem]">
        <SortableCategories />
      </div>
    </div>
  )
}
