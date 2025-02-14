import { MdKeyboardArrowRight } from 'react-icons/md'

export default function CustomisationItem() {
  return (
    <div className="hover:bg-background border-backgroundBorder flex w-full cursor-pointer items-center justify-between rounded-lg border border-solid px-4 py-2 transition-colors duration-300">
      <span className="font-medium">Rice and beans</span>

      <MdKeyboardArrowRight size={20} />
    </div>
  )
}
