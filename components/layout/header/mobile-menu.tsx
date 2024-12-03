import { Bars3Icon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const MobileMenu = ({ className }: { className?: string }) => {
  return (
    <div className="relative cursor-pointer flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      <Bars3Icon
        className={clsx(
          'h-4 transition-all ease-in-out hover:scale-110',
          className
        )}
      />
    </div>
  )
}

export default MobileMenu
