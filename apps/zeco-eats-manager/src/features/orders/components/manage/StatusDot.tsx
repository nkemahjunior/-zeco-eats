export default function StatusDot({
  status,
}: {
  status: 'open' | 'busy' | 'paused'
}) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${status === 'open' && 'bg-green-700'} ${status === 'busy' && 'bg-primary'} ${status === 'paused' && 'bg-red-700'}`}
    ></span>
  )
}
