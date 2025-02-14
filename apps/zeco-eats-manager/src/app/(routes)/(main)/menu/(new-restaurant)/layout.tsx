import DummyMenuNav from '@/app/(routes)/features/menu/components/nav/DummyMenuNav'

export default async function NewRestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-8">
      <DummyMenuNav />
      {children}
    </div>
  )
}
