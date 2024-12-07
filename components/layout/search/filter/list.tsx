'use client'

import { useApp } from '@/components/app-context'
import FilterList, { ListItem } from '.'

interface FilterListProps {
  list: ListItem[]
  title: 'sortBy' | 'categories'
}

const FilterListComponent = ({ list, title }: FilterListProps) => {
  const { locale } = useApp()

  return <FilterList list={list} title={locale.search[title]} />
}

export default FilterListComponent
