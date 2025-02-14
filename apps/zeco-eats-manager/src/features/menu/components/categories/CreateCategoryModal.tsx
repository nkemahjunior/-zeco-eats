import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import { FormInput } from '@/shared/components/inputs/FormInput'
import Line from '@/shared/components/Line'
import CloseBtn from '@/shared/components/modal/CloseBtn'
import Heading2 from '@/shared/components/text/Heading2'
import { LoadingSpinner } from '@zeco-eats-lib/utils-server'

export default function CreateCategoryModal() {
  return (
    <div className="h-full space-y-4 px-4 pb-8 pt-4">
      <div className="sticky top-0 z-[1] space-y-2 bg-white py-2">
        <div className="flex w-full items-center justify-end">
          <CloseBtn />
        </div>

        <div className="space-y-4">
          <Heading2 text="Add a new category" />
        </div>
        <Line />
      </div>

      <form action="" className="space-y-4">
        <FormInput
          id="categoryName"
          label="Category name"
          placeholder="e.g Soups"
        />

        <FormInput
          inputType="select"
          label=" Add item to menu"
          id="addItemToMenu"
          errors={errors.menuId}
          selectData={selectMenuData}
          selectOnchange={(selectedMenu) => {
            setCategories(
              menuCategories.filter((el) => el.menu_id === selectedMenu.id)
            )
            setValue('menuId', selectedMenu.id)
          }}
          className="w-1/2"
        />
        <ButtonWithIcon>
          {/* <>
                      <span>Adding category</span>
                      <LoadingSpinner/>
                  </> */}
          <>
            <span>Add category</span>
          </>
        </ButtonWithIcon>
      </form>
    </div>
  )
}
