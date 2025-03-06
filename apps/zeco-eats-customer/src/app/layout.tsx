import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/shared/fonts/fonts'
import React from 'react'
import TanstackQueryProvider from '@/shared/api/tanstackQuery/TanstackQueryProvider'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Zeco Eats | Food Delivery | Order Food Online',
  description:
    'Order delicious food from local restaurants and have it delivered to your doorstep.',
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-sm antialiased`}>
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
