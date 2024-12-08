import { Product } from '@/types/product'
import Link from 'next/link'
import ProductItem from '../product/product-item'
import { getProductSlug } from '@/lib'

interface ThreeProductGridProductProps {
  product: Product
  size: 'full' | 'half'
  priority?: boolean
}

const ThreeProductGridProduct = ({
  product,
  size,
  priority,
}: ThreeProductGridProductProps) => {
  const productSlug = getProductSlug(product.title)

  return (
    <div
      className={
        size === 'full'
          ? 'md:col-span-4 md:row-span-2'
          : 'md:col-span-2 md:row-span-1'
      }>
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${productSlug}`}
        prefetch>
        <ProductItem
          src={product.images?.[0] || product.thumbnail}
          fill
          sizes={
            size === 'full'
              ? '(min-width: 768px) 66vw, 100vw'
              : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={product.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: product.title,
            amount: product.stock as unknown as string,
            currencyCode: 'USD',
          }}
        />
      </Link>
    </div>
  )
}

export default ThreeProductGridProduct
