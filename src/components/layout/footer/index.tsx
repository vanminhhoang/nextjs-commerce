import LogoSquare from '@/components/logo-square'
import { FOOTER_MENUS } from '@/lib/constants'

import { Link } from '@/i18n/routing'

const Footer = () => {
  return (
    <footer className="text-sm text-neutral-500 dark:text-neutral-400">
      <div className="border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col md:flex-row md:gap-12 gap-6 py-12 px-6">
          <Link
            prefetch
            href="/"
            className="flex h-max items-center gap-2 text-black md:pt-1 dark:text-white">
            <LogoSquare size="sm" />
            <span className="uppercase">{process.env.SITE_NAME}</span>
          </Link>
          <nav>
            <ul className="flex flex-col">
              {FOOTER_MENUS.map((menu) => (
                <li
                  className="block w-max p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                  key={menu.title}>
                  <Link href={menu.path}>{menu.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700 px-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 md:flex-row md:gap-0 min-[1320px]:px-0">
            <p>
              &copy; {new Date().getFullYear()} {process.env.SITE_NAME}
              {process.env.SITE_NAME?.length &&
              !process.env.SITE_NAME.endsWith('.')
                ? '.'
                : ''}{' '}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
