'use client'

import { useTranslations } from 'next-intl'

const Error = ({ reset }: { reset: () => void }) => {
  const t = useTranslations('error')
  console.log('error 1')
  console.log('error 2')

  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
      <h2 className="text-xl font-bold">Oh no!</h2>
      <p className="my-2">{t('message')}</p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        onClick={() => reset()}>
        {t('tryAgain')}
      </button>
    </div>
  )
}

export default Error
