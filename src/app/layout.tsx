import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adoptingaibook.com'),
  title: {
    default: 'Adopting AI | A Guide for Business Owners',
    template: '%s | Adopting AI',
  },
  description:
    'A practical guide for small business owners and solopreneurs to bring AI into their workflows — without the overwhelm.',
  keywords: [
    'AI for small business',
    'adopting AI',
    'AI guide for business owners',
    'solopreneur AI',
    'artificial intelligence small business',
  ],
  openGraph: {
    title: 'Adopting AI: A Guide for Business Owners',
    description:
      'A practical guide for small business owners and solopreneurs to bring AI into their workflows — without the overwhelm.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adopting AI: A Guide for Business Owners',
    description:
      'A practical guide for small business owners and solopreneurs to bring AI into their workflows — without the overwhelm.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
