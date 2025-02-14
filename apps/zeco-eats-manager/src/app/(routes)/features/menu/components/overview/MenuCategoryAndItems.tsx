import SortableCategories from './SortableCategories'
import { Suspense } from 'react'
import Heading2 from '@/shared/components/text/Heading2'
import CategoryItemsSkeleton from '../Skeletons/CategorieItemsSkeleton'

export default function MenuCategoryAndItems() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Heading2 text="Categories and items" />
        <p className="text-textTint">
          Arrange categories and items in the order you want customers to see
          them. Click an item to edit it.
        </p>
      </div>

      <div className="md:mr-[12rem]">
        <Suspense fallback={<CategoryItemsSkeleton />}>
          <SortableCategories />
        </Suspense>
      </div>
    </div>
  )
}

/**
 * <div className="w-full space-y-4 md:flex md:space-x-4 md:space-y-0">
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
          <ButtonWithIcon width="w-[60%] md:w-20" height="h-[2.5rem]">
            <span>
              <IoAddOutline />
            </span>
            <span>Add</span>
          </ButtonWithIcon>

          <Button px="w-[60%] md:w-20" py="h-[2.5rem]">
            Save
          </Button>
        </div>
      </div>
 */
