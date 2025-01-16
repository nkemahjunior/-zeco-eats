export default function RadioBtn({
  id = 'noID',
  name,
}: {
  id?: string
  name: string
}) {
  return (
    <div
      // htmlFor={id}
      className="has-[:checked]:bg-secondary has-[:checked]:ring-secondary relative flex h-[1.4rem] w-[1.4rem] items-center justify-center rounded-full has-[:checked]:ring-4"
    >
      <input
        id={id}
        name={name}
        type="radio"
        className="border-secondary h-full w-full cursor-pointer appearance-none rounded-full border-2 border-solid bg-white transition-colors duration-300 checked:h-3 checked:w-3"
      />
    </div>
  )
}
