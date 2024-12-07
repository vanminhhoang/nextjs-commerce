import { NextRequest, NextResponse } from 'next/server'
import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = 'en'
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
