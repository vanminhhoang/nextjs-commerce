import { Product } from '@/types/product'
import Link from 'next/link'
import ProductItem from '../product/product-item'
import { getProductSlug } from '@/lib'
import Grid from '.'

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product) => {
        const productSlug = getProductSlug(product.title)
        return (
          <Grid.Item key={product.id} className="animate-fadeIn">
            <Link
              className="relative inline-block h-full w-full"
              href={`/product/${productSlug}`}
              prefetch={true}>
              <ProductItem
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.stock as unknown as string,
                  currencyCode: 'USD',
                }}
                src={product.images?.[0] || product.thumbnail}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          </Grid.Item>
        )
      })}
    </>
  )
}

export default ProductsGrid
