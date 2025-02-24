import type { Metadata } from 'next'
import './globals.css'
import { poppins } from '@/shared/fonts/fonts'
import NavBar from '../../src/shared/components/navbar/NavBar'
import FooterSection from '@/shared/components/footer/FooterSection'
import React from 'react'
import TanstackQueryProvider from '@/shared/api/tanstackQuery/TanstackQueryProvider'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'zeco eats',
  description: 'Get your food wherever you want',
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
          <NavBar />
          {children}
          <FooterSection />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
