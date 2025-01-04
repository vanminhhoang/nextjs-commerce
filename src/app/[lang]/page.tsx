import ThreeProductsGrid from '@/components/grid/three-products'
import CarouselProducts from '@/components/product/carousel-products'

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js',
  openGraph: {
    type: 'website',
  },
}

export default function HomePage() {
  console.log('My name Hoang!')
  console.log('My name Hoang 2!')

  return (
    <>
      <ThreeProductsGrid />
      <CarouselProducts />
    </>
  )
}
