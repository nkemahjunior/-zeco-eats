import RadioBtn from '@/shared/components/inputs/RadioBtn'
import { StatusType } from '../../oderTypes'

interface fnProps {
  icon: React.ReactNode
  status: StatusType
  desc: string
  id: string
  activeStatus: StatusType
  changeActiveStatus: (arg: StatusType) => void
}

export default function Status({
  icon,
  status,
  desc,
  id,
  activeStatus,
  changeActiveStatus,
}: fnProps) {
  return (
    <div
      className={`flex items-center space-x-4 rounded-lg border border-solid p-4 ${activeStatus === status ? 'border-black' : 'border-backgroundBorder'}`}
      onClick={() => changeActiveStatus(status)}
    >
      <span className="inline-block w-[10%]">{icon}</span>

      <div className="flex w-full flex-col justify-center gap-y-1">
        <span className="inline-block capitalize">{status}</span>
        <span className="text-textTint inline-block">{desc}</span>
      </div>

      <span className="inline-block w-[10%]">
        <RadioBtn id={id} />
      </span>
    </div>
  )
}
