import { getLocale } from '@/lib'

export interface AppContextInterface {
  locale: Awaited<ReturnType<typeof getLocale>>
}
