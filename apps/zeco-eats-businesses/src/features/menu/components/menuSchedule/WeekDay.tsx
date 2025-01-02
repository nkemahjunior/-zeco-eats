export default function WeekDay({ day }: { day: string }) {
  return (
    <span className={`bg-background block w-full py-4 font-medium`}>{day}</span>
  )
}
