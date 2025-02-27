import FooterSection from '@/shared/components/footer/FooterSection'
import NavBar from '@/shared/components/navbar/NavBar'

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <NavBar />
      {children}
      <FooterSection />
    </div>
  )
}
