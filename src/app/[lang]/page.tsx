import ThreeProductsGrid from '@/components/grid/three-products'
import CarouselProducts from '@/components/product/carousel-products'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js',
  openGraph: {
    type: 'website',
  },
}

export default function HomePage() {
  console.log('Hello world 1 123!')

  return (
    <>
      <ThreeProductsGrid />
      <CarouselProducts />
    </>
  )
}
