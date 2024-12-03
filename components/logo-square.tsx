import clsx from 'clsx'
import LogoIcon from './icons/logo'

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex w-10 h-10 items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black rounded-xl',
        size === 'sm' && 'h-[30px] w-[30px] rounded-lg'
      )}>
      <LogoIcon
        className={clsx('h-4 w-4', size === 'sm' && 'h-[10px] w-[10px]')}
      />
    </div>
  )
}
