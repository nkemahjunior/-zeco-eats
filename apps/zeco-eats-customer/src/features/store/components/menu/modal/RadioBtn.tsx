interface fnProps {
  name: string
  id: string
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

export default function RadioBtn({ name, id, onSelect, value }: fnProps) {
  return (
    <div
      // htmlFor={id}
      className="relative flex h-[1.4rem] w-[1.4rem] items-center justify-center rounded-full has-[:checked]:bg-secondary has-[:checked]:ring-4 has-[:checked]:ring-secondary"
    >
      <input
        value={value}
        id={id}
        name={name}
        type="radio"
        onChange={onSelect}
        className="h-full w-full cursor-pointer appearance-none rounded-full border-2 border-solid border-secondary bg-white transition-colors duration-300 checked:h-3 checked:w-3"
      />
    </div>
  )
}
