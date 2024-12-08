import { getProductsByCategory, getProductSlug } from '@/lib'
import Link from 'next/link'
import ProductItem from './product-item'
import RelatedProductsTitle from './releted-products-title'

const RelatedProducts = async ({ category }: { category: string }) => {
  const { products } = await getProductsByCategory(category)

  if (!products?.length) return null

  return (
    <div className="py-8">
      <RelatedProductsTitle />
      <ul className="flex w-full gap-4 overflow-x-auto pt-1">
        {products.map((product) => {
          const productSlug = getProductSlug(product.title)
          return (
            <li
              key={product.id}
              className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <Link
                className="relative h-full w-full"
                href={`/product/${productSlug}`}
                prefetch>
                <ProductItem
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.stock as unknown as string,
                    currencyCode: 'USD',
                  }}
                  src={product.images?.[0] || product.thumbnail}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RelatedProducts
