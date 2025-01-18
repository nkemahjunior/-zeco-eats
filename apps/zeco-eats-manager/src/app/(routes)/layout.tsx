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
              <div className="sticky top-0 z-[10] w-full bg-white">
                <Navigation />
              </div>
              <div className="px-4 py-4 md:px-16 lg:ml-[12rem] lg:px-8 lg:pb-[3rem] lg:pt-[1rem] 2xl:ml-[15rem] 2xl:px-28">
                {children}
              </div>
            </ModalUrlProvider>
          </ModalProvider>
        </RestaurantStatusProvider>
      </body>
    </html>
  )
}
