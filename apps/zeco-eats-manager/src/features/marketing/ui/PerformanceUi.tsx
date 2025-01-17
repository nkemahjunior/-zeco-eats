import AdsPerformance from '../components/performance/AdsPerformance'
import OffersPerformance from '../components/performance/OffersPerformance'

export default function PerformanceUi() {
  return (
    <div className="space-y-16">
      <AdsPerformance />
      <OffersPerformance />
    </div>
  )
}
