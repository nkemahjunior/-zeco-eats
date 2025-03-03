import Image from 'next/image'

export default function HeroColumn3Image() {
  return (
    <div className="relative bottom-0 h-full w-full">
      <Image
        className=" "
        src={'/hero/heroImg2.webp'}
        fill={true}
        alt="hero image 2"
        quality={100}
        priority
        sizes="(max-width: 1279px) 0px, (max-width: 1536px) 35vw, 40vw"
      />
    </div>
  )
}
