import Image from 'next/image'

export default function HeroColumn2() {
  return (
    <div className="z-10 hidden xl:-ml-32 xl:block 2xl:-ml-44">
      <div className="relative h-full w-full">
        <Image
          src={'/hero/heroImg1.webp'}
          fill={true}
          alt="hero image "
          quality={100}
          priority
          sizes="(max-width: 1279px) 0px, (max-width: 1536px) 40vw, 50vw"
        />
      </div>
    </div>
  )
}
