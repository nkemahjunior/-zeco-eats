import SigninNav from '@/features/auth/signin/components/SigninNav'

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SigninNav />
      {children}
    </div>
  )
}
