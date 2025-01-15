import Heading from '@/shared/components/text/Heading'
import OrderHistory from '../components/history/OrderHistory'

export default function OrderHistoryUi() {
  return (
    <div className="space-y-8">
      <Heading text="Order History" />
      <OrderHistory />
    </div>
  )
}
