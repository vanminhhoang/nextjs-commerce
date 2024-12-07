'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'next/navigation'
import Form from 'next/form'
import { useApp } from '@/components/app-context'

const Search = () => {
  const searchParams = useSearchParams()
  const { locale } = useApp()

  return (
    <Form action="/search" className="max-w-[350px] relative w-full">
      <input
        key={searchParams?.get('q')}
        type="text"
        name="q"
        placeholder={locale.search.search}
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        className="text-md w-full rounded-lg outline-neutral-300 border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </Form>
  )
}

export default Search
