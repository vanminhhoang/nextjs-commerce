import OpengraphImage from '@/components/opengraph-image'
import { getCategoryNameBySlug } from '@/lib'

export const runtime = 'edge'

export default async function Image({ params }: { params: { slug: string } }) {
  const categoryName = getCategoryNameBySlug(params.slug)

  return await OpengraphImage({ title: categoryName })
}
