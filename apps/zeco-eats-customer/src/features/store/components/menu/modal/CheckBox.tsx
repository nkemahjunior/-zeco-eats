interface fnProps {
  name: string
  id: string
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function CheckBox({ name, id, onSelect, value }: fnProps) {
  return (
    <div className="flex h-[1.6rem] w-[1.6rem] items-center justify-center border-2 border-solid border-secondary has-[:checked]:bg-secondary">
      <input
        onChange={onSelect}
        type="checkbox"
        value={value}
        id={id}
        name={name}
        className="h-full w-full cursor-pointer appearance-none checked:appearance-auto checked:accent-secondary"
      />
    </div>
  )
}
