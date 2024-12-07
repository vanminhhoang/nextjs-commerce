import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from 'sonner'
import { CartProvider } from '@/components/cart/cart-context'
import { i18n, Locale } from '@/i18n-config'

const { SITE_NAME, NEXT_PUBLIC_BASE_URL } = process.env
const baseUrl = NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lang = (await params).lang
  console.log('🚀 ~ lang:', lang)

  return (
    <html lang={lang} className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider>
          <Header />
          <main>
            {children}
            <Toaster closeButton />
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
