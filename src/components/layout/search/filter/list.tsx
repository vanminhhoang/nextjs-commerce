'use client'

import FilterList, { ListItem } from '.'
import { useTranslations } from 'next-intl';

interface FilterListProps {
  list: ListItem[]
  title: 'sortBy' | 'categories'
}

const FilterListComponent = ({ list, title }: FilterListProps) => {
  const t = useTranslations('search');

  return <FilterList list={list} title={t(title)} />
}

export default FilterListComponent
