import SetupNav from '@/app/(routes)/features/auth/components/setup/SetUpNav'

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SetupNav />
      {children}
    </div>
  )
}
