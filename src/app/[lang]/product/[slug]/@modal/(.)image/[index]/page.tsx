import { getProduct } from '@/lib'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ImageModal from './modal'

const ImagePage = async ({
  params,
}: {
  params: Promise<{ slug: string; index: string }>
}) => {
  const { slug, index } = await params

  const product = await getProduct(slug)

  if (!product) return notFound()

  return (
    <ImageModal>
      <Image
        src={product.images?.[index as unknown as number] || product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
        className=" max-w-[400px] max-h-[400px] object-contain"
      />
    </ImageModal>
  )
}

export default ImagePage
