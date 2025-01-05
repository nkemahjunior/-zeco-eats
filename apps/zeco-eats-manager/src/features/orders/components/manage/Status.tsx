import RadioBtn from '@/shared/components/inputs/RadioBtn'

interface fnProps {
  icon: React.ReactNode
  status: string
  desc: string
  id: string
}

export default function Status({ icon, status, desc, id }: fnProps) {
  return (
    <div className="border-backgroundBorder flex items-center space-x-4 rounded-lg border border-solid p-4">
      <span className="inline-block w-[10%]">{icon}</span>

      <div className="flex w-full flex-col justify-center gap-y-1">
        <span className="inline-block">{status}</span>
        <span className="text-textTint inline-block">{desc}</span>
      </div>

      <span className="inline-block w-[10%]">
        <RadioBtn id={id} />
      </span>
    </div>
  )
}
