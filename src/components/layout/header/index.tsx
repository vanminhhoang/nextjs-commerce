import LogoSquare from '@/components/logo-square'
import Search from './search'
import CartModal from '@/components/cart/modal'
import Link from 'next/link'
import { getMenus } from '@/lib'
import MobileMenu from './mobile-menu'
import { Suspense } from 'react'
import LocaleSwitcher from '@/components/locale-switcher'

const Header = async () => {
  const menus = await getMenus()

  return (
    <div className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="flex md:hidden">
        <MobileMenu />
      </div>
      <div className="flex items-center w-max md:w-full">
        <Link href="/" prefetch className="flex items-center mr-2 md:mr-6">
          <LogoSquare />
          <span className="ml-2 text-sm font-medium uppercase whitespace-nowrap">
            {process.env.SITE_NAME}
          </span>
        </Link>
        {menus.length > 0 && (
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            {menus.map((menu: { slug: string; name: string }) => (
              <li
                key={menu.slug}
                className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">
                <Link href={`/search/${menu.slug}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        )}
        <div className="hidden md:flex ml-8 w-full">
          <Suspense>
            <Search />
          </Suspense>
        </div>
      </div>
      <div className="flex items-center justify-end md:w-1/3 gap-2">
        <LocaleSwitcher />
        <CartModal />
      </div>
    </div>
  )
}

export default Header
