import Heading2 from '@/shared/components/text/Heading2'

import QuickActions from './QuickActions'
import SalesChart from './SalesChart'
import SummaryTopics from './SummaryTopics'
import BestSellingItemsTable from './BestSellingItemsTable'

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-textTint">Good morning Chris</p>
        <Heading2 text="Today's Summary" />
      </div>

      <SummaryTopics />

      <div className="grid grid-cols-1 gap-y-6 border-0 border-solid border-green-700 xl:grid-cols-[40fr,40fr,20fr] xl:gap-x-6 xl:gap-y-0 2xl:gap-x-20">
        <SalesChart />
        <SalesChart />
        <div className="hidden xl:block">
          <QuickActions />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-16 gap-y-6 xl:grid-cols-2">
        <SalesChart />
        <BestSellingItemsTable />
      </div>
    </div>
  )
}
