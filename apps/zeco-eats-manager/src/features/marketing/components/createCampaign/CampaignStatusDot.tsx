export default function CampaignStatusDot({
  status,
}: {
  status: 'running' | 'paused'
}) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${status === 'running' && 'bg-green-700'} ${status === 'paused' && 'bg-primary'}`}
    ></span>
  )
}
