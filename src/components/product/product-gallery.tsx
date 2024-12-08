'use client'

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import ProductItem from './product-item'
import { useSearchParams } from 'next/navigation'
import { useUpdateURL } from '@/lib/hooks'
import { Link } from '@/i18n/routing'
import { getProductSlug } from '@/lib'

interface ProductGalleryProps {
  images: { src: string; alt: string }[]
  title: string
}

const ProductGallery = ({ images, title }: ProductGalleryProps) => {
  const updateURL = useUpdateURL()
  const searchParams = useSearchParams()

  const image = searchParams.get('image')
  const imageIndex = image ? parseInt(image) : 0

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0
  const previousImageIndex =
    imageIndex === 0 ? images.length - 1 : imageIndex - 1

  return (
    <form>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Link
            href={`/product/${getProductSlug(title)}/image/${imageIndex}`}
            passHref>
            <Image
              className="h-full w-full object-contain"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[imageIndex]?.alt as string}
              src={images[imageIndex]?.src as string}
              priority={true}
            />
          </Link>
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
              <div
                onClick={() =>
                  updateURL({ image: previousImageIndex.toString() })
                }
                aria-label="Previous product image"
                className="h-full cursor-pointer px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center">
                <ArrowLeftIcon className="h-5" />
              </div>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <div
                onClick={() => updateURL({ image: nextImageIndex.toString() })}
                aria-label="Next product image"
                className="h-full cursor-pointer px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center">
                <ArrowRightIcon className="h-5" />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex

            return (
              <li
                key={`${image.src}${index}`}
                className="h-20 w-20 cursor-pointer">
                <div
                  onClick={() => updateURL({ image: index.toString() })}
                  aria-label="Select product image"
                  className="h-full w-full">
                  <ProductItem
                    alt={image.alt}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      ) : null}
    </form>
  )
}

export default ProductGallery
