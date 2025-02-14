import SummaryTopic from './SummaryTopic'

export default function SummaryTopics() {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-4">
      <SummaryTopic topic="Sales" amt="$469.70" />
      <SummaryTopic topic="Orders" amt="$469.70" />
      <SummaryTopic topic="Average Ticket size" amt="$469.70" />
      <SummaryTopic topic="Best selling Items" amt="$469.70" />
    </div>
  )
}
