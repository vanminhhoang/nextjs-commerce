import { getProducts } from '@/lib'
import ThreeProductGridProduct from './three-product-grid-product'

const ThreeProductsGrid = async () => {
  const { products } = await getProducts({ limit: 10 })

  if (!products.length) return null

  const [firstProduct, secondProduct, thirdProduct] = products

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeProductGridProduct size="full" product={firstProduct} priority />
      <ThreeProductGridProduct size="half" product={secondProduct} priority />
      <ThreeProductGridProduct size="half" product={thirdProduct} />
    </section>
  )
}

export default ThreeProductsGrid
