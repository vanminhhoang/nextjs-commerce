import type { Metadata } from 'next'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from 'sonner'
import { CartProvider } from '@/components/cart/cart-context'

const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'High-performance ecommerce store built with Next.js',
  openGraph: {
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
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
