import { getProduct, getProductSlug } from '@/lib'
import { notFound } from 'next/navigation'
import { redirect } from '@/i18n/routing'

const ImagePage = async ({ params }: { params: Promise<{ slug: string, lang: string }> }) => {
  const slug = (await params).slug
  const lang = (await params).lang
  const product = await getProduct(slug)

  if (!product) return notFound()

  return redirect({
    href: `/product/${getProductSlug(product.title)}`,
    locale: lang
  })
}

export default ImagePage
