import Link from 'next/link'
import ProductItem from './product-item'
import { getProducts, getProductSlug } from '@/lib'

const CarouselProducts = async () => {
  const { products } = await getProducts({ limit: 5 })

  if (!products.length) return null

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products]

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => {
          const productSlug = getProductSlug(product.title)

          return (
            <li
              key={`${productSlug}${i}`}
              className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
              <Link
                href={`/product/${productSlug}`}
                className="relative h-full w-full">
                <ProductItem
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.stock as unknown as string,
                    currencyCode: 'USD',
                  }}
                  src={product.images?.[0] || product.thumbnail}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CarouselProducts