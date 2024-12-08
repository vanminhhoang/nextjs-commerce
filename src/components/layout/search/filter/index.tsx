import { FilterItem } from './item'
import { SortFilterItem } from '@/types/filter'
import FilterItemDropdown from './dropdown'
import { Suspense } from 'react'

export type ListItem = SortFilterItem | PathFilterItem
export interface PathFilterItem {
  name: string
  path: string
}
interface FilterListProps {
  list: ListItem[]
  title: string
}

export default function FilterList({ list, title }: FilterListProps) {
  return (
    <>
      <nav>
        <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
          {title}
        </h3>
        <ul className="hidden md:block">
          <Suspense>
            {list.map((item: ListItem, i) => (
              <FilterItem key={i} item={item} />
            ))}
          </Suspense>
        </ul>
        <ul className="md:hidden">
          <Suspense>
            <FilterItemDropdown list={list} />
          </Suspense>
        </ul>
      </nav>
    </>
  )
}
