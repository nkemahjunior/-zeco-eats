import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import ModalProvider from '@/shared/context/modal/ModalProvider'
import Modal from '@/shared/components/modal/Modal'
import ModalUrl from '@/shared/components/modal/ModalUrl'
import ModalUrlProvider from '@/shared/context/modal/ModalUrlProvider'
import RestaurantStatusProvider from '@/shared/context/modal/RestaurantStatusProvider'
import Navigation from '@/shared/components/nav/Navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'zeco-eats-businesses',
  description:
    'A platform for business owners to manage orders, menus, and analytics on Zeco Eats',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-sm antialiased`}
      >
        <RestaurantStatusProvider>
          <ModalProvider>
            <ModalUrlProvider>
              <Modal />
              <ModalUrl />
              <Navigation />

              {/* <div className="ml-[15rem] px-28 pb-[3rem] pt-[1rem]">
                {children}
              </div> */}
            </ModalUrlProvider>
          </ModalProvider>
        </RestaurantStatusProvider>
      </body>
    </html>
  )
}
