import Heading from '@/shared/components/text/Heading'

export default function SignUpFormDesc() {
  return (
    <div className="flex items-center bg-black/60">
      <div className="w-full space-y-3 text-center">
        <Heading
          text="Join Zeco Eats: Expand Your Restaurant's Reach"
          textColor="text-white"
        />
        <p className="text-white">
          Sign up today to showcase your menu, connect with new customers, and
          boost your sales. Partner with us to grow your business effortlessly!
        </p>
      </div>
    </div>
  )
}
