'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const ImageModal = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  return (
    <div
      onClick={() => router.back()}
      className="fixed bg-black/30 overflow-hidden inset-0 flex w-screen h-screen items-center justify-center p-4 z-[100]">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[400px] h-[400px] dark:bg-black/80 dark:text-white bg-white">
        {children}
      </div>
    </div>
  )
}

export default ImageModal
