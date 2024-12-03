import { Product } from '@/types/product'
import ProductPrice from './product-price'
import ButtonAddToCart from '../cart/button-add-to-cart'

const ProductDescription = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <ProductPrice
            amount={product.stock as unknown as string}
            currencyCode="USD"
          />
        </div>
      </div>
      <div className="mb-6 text-sm leading-tight dark:text-white/[60%] prose mx-auto max-w-6xl text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white">
        {product.description}
      </div>
      <ButtonAddToCart product={product} />
    </>
  )
}

export default ProductDescription
