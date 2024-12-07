import Grid from '@/components/grid'
import ProductsGrid from '@/components/grid/products-grid'
import { getProducts } from '@/lib'
import { DEFAULT_SORT, SORTING } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search for products in the store.',
}

interface SearchPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

const SearchPage = async (props: SearchPageProps) => {
  const searchParams = await props.searchParams
  const { sort, q: searchValue } = searchParams as { [key: string]: string }
  const { sortKey } = SORTING.find((item) => item.slug === sort) || DEFAULT_SORT
  const productParams =
    sort || searchValue
      ? {
          sortBy: sortKey === 'price' ? sortKey : undefined,
          order: sortKey === 'price' ? sort : undefined,
          q: searchValue,
        }
      : { limit: 10 }
  const { products } = await getProducts(productParams)
  if (!products) return null
  const resultsText = products.length > 1 ? 'results' : 'result'

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 && (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductsGrid products={products} />
        </Grid>
      )}
    </>
  )
}

export default SearchPage
