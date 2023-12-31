import './globals.css'

import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Full Stack Airbnb Clone with Next.js 13 App Router: Tailwind, Prisma, MongoDB, NextAuth 2023',
}

const font = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
