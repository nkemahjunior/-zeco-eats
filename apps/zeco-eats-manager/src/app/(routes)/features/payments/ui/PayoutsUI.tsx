import Heading from '@/shared/components/text/Heading'
import Payouts from '../components/payouts/Payouts'

export default function PayoutsUi() {
  return (
    <div className="space-y-8">
      <Heading text="Payouts" />
      <Payouts />
    </div>
  )
}
