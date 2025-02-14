import MarketingNav from '@/app/(routes)/features/marketing/components/MarketingNav'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-8">
      <MarketingNav />
      {children}
    </div>
  )
}
