import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import '@shadcn/styles/global.css'
import TanstackQueryProvider from '@/shared/api/tanstackQuery/TanstackQueryProvider'
import { Toaster } from 'sonner'
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-sm antialiased`}
      >
        <TanstackQueryProvider>
          <Toaster
            position="top-right"
            richColors
            //closeButton
          />
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
