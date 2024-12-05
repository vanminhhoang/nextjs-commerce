import ProductDescription from '@/components/product/product-description'
import ProductGallery from '@/components/product/product-gallery'
import RelatedProducts from '@/components/product/related-products'
import { getProduct, getProducts, getProductSlug } from '@/lib'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const slug = (await params).slug
  const product = await getProduct(slug)

  if (!product) return notFound()

  const url = product.images?.[0] || product.thumbnail

  return {
    title: product.title,
    description: product.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width: 640,
              height: 640,
              alt: product.title,
            },
          ],
        }
      : null,
  }
}

export const generateStaticParams = async () => {
  const { products } = await getProducts({ limit: 20 })

  if (!products) return []

  return products.map((product) => ({ slug: getProductSlug(product.title) }))
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
              title={product.title}
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
