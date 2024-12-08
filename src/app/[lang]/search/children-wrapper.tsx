'use client'

import { useSearchParams } from 'next/navigation'
import { Fragment } from 'react'

// Ensure children are re-rendered when the search query changes
const ChildrenWrapper = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()
  return <Fragment key={searchParams.get('q')}>{children}</Fragment>
}

export default ChildrenWrapper