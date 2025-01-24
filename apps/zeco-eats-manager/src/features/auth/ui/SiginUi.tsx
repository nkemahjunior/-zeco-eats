import SigninNav from '../components/siginin/SigninNav'
import Signin from '../components/siginin/Signin'

export default function SigninUi() {
  return (
    <div className="bg-background flex h-screen w-full flex-col">
      <SigninNav />
      <div className="flex flex-grow flex-col items-center justify-center">
        <Signin />
      </div>
    </div>
  )
}
