import { getCategories, getProducts, getProductSlug } from '@/lib'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  const categoriesPromise = getCategories().then((categories) =>
    categories.map((category) => ({
      url: `${baseUrl}${category.path}`,
      lastModified: new Date().toISOString(),
    }))
  )

  const productsPromise = getProducts().then((result) =>
    (result.products || []).map((product) => ({
      url: `${baseUrl}/product/${getProductSlug(product.title)}`,
      lastModified: new Date().toISOString(),
    }))
  )

  let fetchedRoutes: Route[] = []

  try {
    fetchedRoutes = (
      await Promise.all([categoriesPromise, productsPromise])
    ).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }

  return [...routesMap, ...fetchedRoutes]
}
