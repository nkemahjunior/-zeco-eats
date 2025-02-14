import Heading from '@/shared/components/text/Heading'
import AdCamapaigns from '../components/campaigns/AdCampaigns'
import OfferCampaigns from '../components/campaigns/OfferCampaigns'

export default function CampaignUi() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Heading text="Ads" />
        <AdCamapaigns />
      </div>
      <div className="space-y-4">
        <Heading text="Offers" />
        <OfferCampaigns />
      </div>
    </div>
  )
}
