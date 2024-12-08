export type SortFilterItem = {
  name: string
  slug: string | null
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'price'
  reverse: boolean
}
