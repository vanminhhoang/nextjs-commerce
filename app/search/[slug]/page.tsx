import Grid from '@/components/grid'
import ProductsGrid from '@/components/grid/products-grid'
import { fetchData, getProductsByCategory } from '@/lib'
import { DEFAULT_SORT, SORTING } from '@/lib/constants'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export const generateStaticParams = async () => {
  const categories = await fetchData({ endpoint: '/products/categories' })

  return categories.map((category: { slug: string }) => ({
    slug: category.slug,
  }))
}

const CategoryPage = async (props: CategoryPageProps) => {
  const params = await props.params
  const searchParams = await props.searchParams
  const slug = params.slug
  const { sort, q: searchValue } = searchParams as { [key: string]: string }
  const { sortKey } = SORTING.find((item) => item.slug === sort) || DEFAULT_SORT
  const productParams = {
    sortBy: sortKey === 'price' ? sortKey : undefined,
    order: sortKey === 'price' ? sort : undefined,
    q: searchValue,
  }
  const { products } = await getProductsByCategory(slug, productParams)

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductsGrid products={products} />
        </Grid>
      )}
    </section>
  )
}

export default CategoryPage
