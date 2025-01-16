import Heading from '@/shared/components/text/Heading'
import CampaignStatusDot from './CampaignStatusDot'
import CampaignCard from './CampaignCard'
import { GoGift } from 'react-icons/go'
import { VscPercentage } from 'react-icons/vsc'
import { LiaUtensilsSolid } from 'react-icons/lia'
import { PiPiggyBank } from 'react-icons/pi'
import { RxSpeakerLoud } from 'react-icons/rx'

const offers = [
  {
    name: 'Buy 1, get 1 free',
    desc: 'Attract more customers by offering a free item with every purchase of one.',
    icon: <GoGift size={20} color="#fc8a06" />,
  },
  {
    name: 'Percent off',
    desc: 'Increase sales by providing a percentage discount on selected items.',
    icon: <VscPercentage size={20} color="#fc8a06" />,
  },
  {
    name: 'Free item with purchase',
    desc: 'Encourage larger orders by giving a free item when customers meet a purchase threshold.',
    icon: <LiaUtensilsSolid size={20} color="#fc8a06" />,
  },
  {
    name: 'Spend more, save more',
    desc: 'Encourage larger orders by increasing the discount based on the total spend.',
    icon: <PiPiggyBank size={20} color="#fc8a06" />,
  },
]

export default function CreateCampaign() {
  return (
    <div className="space-y-16">
      <div className="space-y-8">
        <Heading text="Ad campaign" />

        <CampaignCard
          title="Ad Campaign"
          icon={<RxSpeakerLoud size={20} color="#fc8a06" />}
        >
          <div className="space-y-4">
            <p>
              <CampaignStatusDot status="paused" /> Paused
            </p>
            <p className="text-textTint bgpr">
              Reach a larger audience and grow your brand with strategic ad
              campaigns.
            </p>
          </div>
        </CampaignCard>
      </div>

      <div className="space-y-8">
        <Heading text="Offers" />
        <div className="flex items-center gap-x-8">
          {offers.map((el, i) => (
            <CampaignCard key={i} title={el.name} icon={el.icon}>
              <div className="space-y-4n">
                <p className="text-textTint">{el.desc}</p>
              </div>
            </CampaignCard>
          ))}
        </div>
      </div>
    </div>
  )
}
