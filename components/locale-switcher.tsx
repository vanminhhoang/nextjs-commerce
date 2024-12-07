'use client'

import { Locale } from '@/i18n-config'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

const LocaleSwitcher = () => {
  const { lang } = useParams<{ lang: Locale }>()
  const pathname = usePathname()

  const redirectedPathname = () => {
    if (!pathname) return '/'

    const locale = lang === 'en' ? 'vi' : 'en'
    const newPathname = pathname.replace(lang, locale)

    return newPathname
  }

  return (
    <Link href={redirectedPathname()}>
      <div className="cursor-pointer flex items-center justify-center border border-neutral-200 h-11 w-11 rounded-md">
        <span className="text-sm">{lang === 'en' ? 'Vi' : 'En'}</span>
      </div>
    </Link>
  )
}

export default LocaleSwitcher
