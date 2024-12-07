'use client'

import { Locale } from '@/i18n-config'
import { useRouter } from 'next/navigation'
import { getLocale } from '.'

export function useUpdateURL() {
  const router = useRouter()

  return (state: Record<string, string>) => {
    const newParams = new URLSearchParams(window.location.search)
    Object.entries(state).forEach(([key, value]) => {
      newParams.set(key, value)
    })
    router.push(`?${newParams.toString()}`, { scroll: false })
  }
}

export const useLocale = async (locale: Locale) => {
  const data = await getLocale(locale)
  return data
}
