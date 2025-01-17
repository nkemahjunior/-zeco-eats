import CampaignStatusDot from '../createCampaign/CampaignStatusDot'
import MarketingCampaignAction from './MarketingCampaignAction'

export default function OfferCampaigns() {
  return (
    <div>
      <div>
        <div className="flex w-full justify-center">
          <span className="border-backgroundBorder inline-block w-full rounded-tl-md border border-y border-l border-r border-solid p-4 font-medium">
            Offer type
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            Status
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            Audience
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            sales
          </span>
          <span className="border-backgroundBorder inline-block w-full border border-y border-l border-solid p-4 font-medium">
            Actions
          </span>
        </div>

        <div className="flex items-center rounded-bl-md rounded-br-md border-x border-b border-solid">
          <span className="w-full p-4">Buy 1, Get 1 free</span>
          <span className="flex w-full items-center gap-x-1 p-4">
            <CampaignStatusDot status="running" /> Active
          </span>
          <span className="inline-block w-full p-4">All customers</span>
          <span className="inline-block w-full p-4">£5.00</span>

          <span className="inline-block w-full p-4">
            <MarketingCampaignAction />
          </span>
        </div>
      </div>
    </div>
  )
}
