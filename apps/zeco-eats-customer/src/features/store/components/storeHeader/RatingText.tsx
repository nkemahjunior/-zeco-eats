import Rating from '@/shared/components/ratings/Rating'

export default function RatingText() {
  return (
    <div>
      {' '}
      <p>
        {' '}
        &quot;I loved how the boxes looked, everything was also very piping hot
        just the way I like it. Thankyou x&quot;
      </p>
      <div className="flex items-center space-x-1 text-storeTextColorTint">
        <Rating rating={5} textColor="text-black" />
        &nbsp;&middot;
        <p className="w-[2rem] overflow-hidden text-ellipsis whitespace-nowrap md:w-auto">
          Shabina yooree
        </p>
        &nbsp;&middot;&nbsp;
        <span>07/13/24</span>
      </div>
    </div>
  )
}
