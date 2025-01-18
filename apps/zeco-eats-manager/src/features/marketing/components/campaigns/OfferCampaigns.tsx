import CampaignStatusDot from '../createCampaign/CampaignStatusDot'
import MarketingCampaignAction from './MarketingCampaignAction'

export default function OfferCampaigns() {
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <div className="flex w-fit items-center text-nowrap xl:w-full">
          <span className="border-backgroundBorder inline-block w-[8rem] rounded-tl-md border border-y border-l border-r border-solid p-4 font-medium xl:w-full">
            Ad type
          </span>
          <span className="border-backgroundBorder inline-block w-[8rem] border border-y border-l border-solid p-4 font-medium xl:w-full">
            Status
          </span>
          <span className="border-backgroundBorder inline-block w-[8rem] border border-y border-l border-solid p-4 font-medium xl:w-full">
            Audience
          </span>
          <span className="border-backgroundBorder inline-block w-[8rem] border border-y border-l border-solid p-4 font-medium xl:w-full">
            TargetBid
          </span>
          <span className="border-backgroundBorder inline-block w-[8rem] border border-y border-l border-solid p-4 font-medium xl:w-full">
            Daily budget
          </span>

          <span className="border-backgroundBorder inline-block w-[8rem] rounded-tr-md border border-y border-l border-r border-solid p-4 font-medium xl:w-full">
            Actions
          </span>
        </div>

        <div className="flex w-fit items-center text-nowrap rounded-bl-md rounded-br-md border-x border-b border-solid xl:w-full">
          <span className="w-[8rem] p-4 xl:w-full">Ad campaign</span>
          <span className="flex w-[8rem] items-center gap-x-1 p-4 xl:w-full">
            <CampaignStatusDot status="running" /> Active
          </span>
          <span className="inline-block w-[8rem] p-4 xl:w-full">
            All customers
          </span>
          <span className="inline-block w-[8rem] p-4 xl:w-full">£5.00</span>
          <span className="inline-block w-[8rem] p-4 xl:w-full">£5.25</span>
          <span className="inline-block w-[8rem] p-4 xl:w-full">
            <MarketingCampaignAction />
          </span>
        </div>
      </div>
    </div>
  )
}
