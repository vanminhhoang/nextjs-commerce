import clsx from 'clsx'

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded'
const items = 'bg-neutral-400 dark:bg-neutral-700'

const Skeleton = ({ length = 1 }: { length?: number }) => {
  return Array.from(Array(length).keys()).map((_, index) => (
    <div key={index} className={clsx(skeleton, items)} />
  ))
}

export default Skeleton
