import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInput from '@/shared/components/inputs/TextInput'
import Heading from '@/shared/components/text/Heading'
import { BiPlus } from 'react-icons/bi'

export default function Categories() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading text={`Categories`} />
        <ButtonWithIcon
          textColor="text-white"
          color="bg-secondary"
          hoverColor="hover:bg-secondaryTint"
          width="w-[8rem]"
        >
          <span>
            <BiPlus />
          </span>
          <span>New category</span>
        </ButtonWithIcon>
      </div>
      <div>
        <TextInput id="searchCategory" placeHolder="Search" />
      </div>

      <div>
        <table className="w-full table-auto">
          <thead className="">
            <tr>
              <th className="text-textTint px-4 py-4 text-start">Name</th>
              <th className="text-textTint px-4 py-4 text-start">
                Quantity sold
              </th>
              <th className="text-textTint px-4 py-4 text-start">Menu</th>
              <th className="text-textTint px-4 py-4 text-start">Revie</th>
            </tr>
          </thead>

          <tbody>
            {bestSellingItemsData.map((el, i) => (
              <tr
                key={i}
                className="border-backgroundBorder hover:bg-background cursor-pointer border-b-[0px] border-solid transition-colors duration-300 last:border-b-0"
              >
                <td className="flex items-center space-x-4 px-4 py-4 text-start">
                  <span className="relative block h-8 w-8 overflow-hidden rounded-full">
                    <Image src={el.image} alt={el.name} fill />
                  </span>
                  <span>{el.name}</span>
                </td>

                <td className="px-4 py-4 text-start">{el.quantitySold}</td>

                <td className="space-x-2 px-4 py-4 text-start">
                  <div className="flex w-full space-x-3">
                    <span
                      className={`${el.status === 'up' ? 'bg-green-300 text-green-900' : 'bg-red-300 text-red-900'} flex h-6 w-6 items-center justify-center rounded-full`}
                    >
                      {el.status === 'up' ? (
                        <MdArrowUpward />
                      ) : (
                        <MdArrowDownward />
                      )}
                    </span>
                    <span>£{el.totalSales}</span>
                  </div>
                </td>

                <td className="px-4 py-4 text-start">{20}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
