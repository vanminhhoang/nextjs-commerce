import { SortFilterItem } from '@/types/filter'

export const FOOTER_MENUS = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/',
  },
  {
    title: 'Terms & Conditions',
    path: '/',
  },
  {
    title: 'Shipping & Return Policy',
    path: '/',
  },
  {
    title: 'Privacy Policy',
    path: '/',
  },
  {
    title: 'FAQ',
    path: '/',
  },
]

export const DEFAULT_SORT: SortFilterItem = {
  name: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false,
}

export const SORTING: SortFilterItem[] = [
  DEFAULT_SORT,
  {
    name: 'Price: Low to high',
    slug: 'asc',
    sortKey: 'price',
    reverse: false,
  },
  {
    name: 'Price: High to low',
    slug: 'desc',
    sortKey: 'price',
    reverse: true,
  },
]
