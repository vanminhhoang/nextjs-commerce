'use client'

import { getLocale } from '@/lib'
import { AppContextInterface } from '@/types/app'
import { createContext, ReactNode, useContext } from 'react'

const AppContext = createContext<AppContextInterface | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
  locale: Awaited<ReturnType<typeof getLocale>>
}

export const AppProvider = ({ children, locale }: AppProviderProps) => {
  return (
    <AppContext.Provider value={{ locale }}>{children}</AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider')
  }
  return context
}

export default AppContext
