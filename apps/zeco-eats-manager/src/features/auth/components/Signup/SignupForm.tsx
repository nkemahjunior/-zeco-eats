import BlurredDiv from './BlurredDiv'
import SignupFormContent from './SignUpFormContent'
import SignUpFormDesc from './SignUpFormDesc'

export default function SignupForm() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/devImages/food1.webp')] bg-cover bg-center bg-no-repeat">
      <div className="grid flex-grow grid-cols-[60fr,40fr,20fr]">
        <SignUpFormDesc />
        <SignupFormContent />
        <BlurredDiv />
      </div>
    </div>
  )
}
