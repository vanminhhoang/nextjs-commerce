'use client'

import { Locale } from '@/i18n/i18n-config'
import { useParams } from 'next/navigation'
import { Link, usePathname } from '@/i18n/routing'

const LocaleSwitcher = () => {
  const { lang } = useParams<{ lang: Locale }>()
  const pathname = usePathname()

  return (
    <Link locale={lang === 'en' ? 'vi' : 'en'} href={pathname}>
      <div className="cursor-pointer flex items-center justify-center border border-neutral-200 h-11 w-11 rounded-md">
        <span className="text-sm">{lang === 'en' ? 'Vi' : 'En'}</span>
      </div>
    </Link>
  )
}

export default LocaleSwitcher
