import MarketingNav from '@/features/marketing/MarketingNav'

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
