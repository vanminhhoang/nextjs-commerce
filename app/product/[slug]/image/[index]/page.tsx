import { getProduct, getProductSlug } from '@/lib'
import { notFound, redirect } from 'next/navigation'

const ImagePage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const product = await getProduct(slug)

  if (!product) return notFound()

  return redirect(`/product/${getProductSlug(product.title)}`)
}

export default ImagePage
