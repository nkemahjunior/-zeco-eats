import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Heading from '@/shared/components/text/Heading'
import { BiPlus } from 'react-icons/bi'

const fakeCategories = Array.from({ length: 5 }, (_, i) => {
  return {
    name: `Fries${i}`,
    Menu: `My Place Menu`,
    Items: `${i}Items`,
  }
})

export default function Categories() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Heading text={`Categories`} />
        <ButtonWithIcon
          textColor="text-white"
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          width="w-[9rem]"
        >
          <span className="font-medium text-white">
            <BiPlus />
          </span>
          <span>New category</span>
        </ButtonWithIcon>
      </div>
      <div>
        <TextInputWithIcon
          id="searchCategory"
          placeHolder="Search"
          width="w-[20%]"
          className="placeholder:text-black"
        />
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
            {fakeCategories.map((el, i) => (
              <tr
                key={i}
                className="border-backgroundBorder hover:bg-background cursor-pointer transition-colors duration-300"
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
