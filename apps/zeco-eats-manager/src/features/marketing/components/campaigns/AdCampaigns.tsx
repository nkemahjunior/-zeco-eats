import CampaignStatusDot from '../createCampaign/CampaignStatusDot'
import MarketingCampaignAction from './MarketingCampaignAction'

export default function AdCamapaigns() {
  return (
    <div>
      <div>
        <div className="flex w-full justify-center">
          <span className="border-backgroundBorder inline-block w-full rounded-tl-md border border-y border-l border-r border-solid p-4 font-medium">
            Ad type
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            Status
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            Audience
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            TargetBid
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            Daily budget
          </span>

          <span className="border-backgroundBorder inline-block w-full rounded-tr-md border border-y border-l border-r border-solid p-4 font-medium">
            Actions
          </span>
        </div>

        <div className="flex items-center rounded-bl-md rounded-br-md border-x border-b border-solid">
          <span className="w-full p-4">Ad campaign</span>
          <span className="flex w-full items-center gap-x-1 p-4">
            <CampaignStatusDot status="running" /> Active
          </span>
          <span className="inline-block w-full p-4">All customers</span>
          <span className="inline-block w-full p-4">£5.00</span>
          <span className="inline-block w-full p-4">£5.25</span>
          <span className="inline-block w-full p-4">
            <MarketingCampaignAction />
          </span>
        </div>
      </div>
    </div>
  )
}
