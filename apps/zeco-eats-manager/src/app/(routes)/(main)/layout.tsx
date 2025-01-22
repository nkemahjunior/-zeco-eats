import '../globals.css'
import ModalProvider from '@/shared/context/modal/ModalProvider'
import Modal from '@/shared/components/modal/Modal'
import ModalUrl from '@/shared/components/modal/ModalUrl'
import ModalUrlProvider from '@/shared/context/modal/ModalUrlProvider'
import RestaurantStatusProvider from '@/shared/context/modal/RestaurantStatusProvider'
import Navigation from '@/shared/components/nav/Navigation'
import { Suspense } from 'react'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={`w-full text-sm antialiased`}>
      <RestaurantStatusProvider>
        <ModalProvider>
          <ModalUrlProvider>
            <Modal />
            <Suspense fallback={<div>Loading modal url...</div>}>
              <ModalUrl />
            </Suspense>
            <div className="sticky top-0 z-[10] w-full bg-white">
              <Navigation />
            </div>
            <div className="px-4 py-4 md:px-16 lg:ml-[12rem] lg:px-8 lg:pb-[3rem] lg:pt-[1rem] 2xl:ml-[15rem] 2xl:px-28">
              {children}
            </div>
          </ModalUrlProvider>
        </ModalProvider>
      </RestaurantStatusProvider>
    </div>
  )
}
