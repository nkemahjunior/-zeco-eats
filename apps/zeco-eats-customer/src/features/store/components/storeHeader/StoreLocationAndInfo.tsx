import StoreLocationItem from './StoreLocationItem'
import StoreOpeningHours from './StoreOpeningHours'

export default function StoreLocationAndInfo() {
  return (
    <div className="hidden w-full grid-cols-[70fr,30fr] rounded-lg border-[1px] border-solid border-backgroundBorder lg:grid">
      <div className=""> restaurant map</div>

      <div>
        <StoreLocationItem />
        <StoreOpeningHours />
      </div>
    </div>
  )
}
