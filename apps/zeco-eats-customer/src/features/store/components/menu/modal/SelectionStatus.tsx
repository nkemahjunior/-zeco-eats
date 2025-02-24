export default function SelectionStatus({
  status,
  color = 'bg-background',
}: {
  status: string
  color?: string
}) {
  return (
    <p className={`rounded-full ${color} px-4 py-1 font-medium`}>{status}</p>
  )
}
