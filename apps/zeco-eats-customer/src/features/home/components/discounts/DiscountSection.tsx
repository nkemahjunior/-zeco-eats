import DiscountDishes from './DiscountDishes'
import DiscountHead from './DiscountHead'

export default function DiscountSection() {
  return (
    <section className="mx-sm mt-Ysm md:mx-md lg:mx-lg lg:mt-Ylg xl:mx-xl 2xl:mx-xxl 2xl:mt-YXl">
      <div className="mb-Ysm lg:mb-Ylg 2xl:mb-YXl">
        <DiscountHead />
      </div>
      <DiscountDishes />
    </section>
  )
}
