import ProductDescription from '@/components/product/product-description'
import ProductGallery from '@/components/product/product-gallery'
import RelatedProducts from '@/components/product/related-products'
import { getProduct, getProducts, getProductSlug } from '@/lib'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const generateStaticParams = async () => {
  const { products } = await getProducts({ limit: 20 })

  if (!products) return []

  return products.map((product) => {
    const productSlug = getProductSlug(product.title)

    return { slug: productSlug }
  })
}

const ProductPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  const product = await getProduct(params.slug)

  if (!product) return notFound()

  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Suspense
            fallback={
              <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
            }>
            <ProductGallery
              images={product.images
                .slice(0, 5)
                .map((image: string) => ({ src: image, alt: product.title }))}
            />
          </Suspense>
        </div>
        <div className="basis-full lg:basis-2/6">
          <Suspense fallback={null}>
            <ProductDescription product={product} />
          </Suspense>
        </div>
      </div>
      <RelatedProducts category={product.category} />
    </div>
  )
}

export default ProductPage
