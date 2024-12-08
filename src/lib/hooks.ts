'use client'

import { useRouter } from "@/i18n/routing"

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
