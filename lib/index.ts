import { Locale } from '@/i18n-config'
import { Params, Product } from '@/types/product'
import queryString from 'query-string'

interface FetchData {
  endpoint: string
  options?: RequestInit
}

const MENU_ALL = { slug: '', name: 'All' }
const CATEGORY_ALL = { name: 'All', path: '/search' }

const locales = {
  en: () => import('../locales/en.json').then((module) => module.default),
  vi: () => import('../locales/vi.json').then((module) => module.default),
}

export const fetchData = async ({ endpoint, options }: FetchData) => {
  try {
    const result = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
      cache: 'force-cache',
      ...options,
    })
    const data = await result.json()

    return data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw {
      cause: error.cause?.toString() || 'unknown',
      status: error.status || 500,
      message: error.message,
    }
  }
}

export const getMenus = async (): Promise<
  Array<{ slug: string; name: string }>
> => {
  const menus = await fetchData({ endpoint: '/products/categories' })
  const menusSlice = menus.slice(0, 2)

  return menus ? [MENU_ALL, ...menusSlice] : []
}

export const getProducts = async (
  params?: Params
): Promise<{
  products: Product[]
  total: number
  skip: number
  limit: number
}> => {
  let endpoint = '/products'
  if (params?.q) endpoint += '/search'
  const productData = await fetchData({
    endpoint: `${endpoint}?${queryString.stringify(params || {})}`,
  })

  return productData
}

export const getProductsByCategory = async (
  category: string,
  params?: Params
): Promise<{
  products: Product[]
  total: number
  skip: number
  limit: number
}> => {
  const productData = await fetchData({
    endpoint: `/products/category/${category}?${queryString.stringify(
      params || {}
    )}`,
  })

  return productData
}

export const getCategories = async (): Promise<
  Array<{
    path: string
    name: string
  }>
> => {
  const data = await fetchData({ endpoint: '/products/categories' })
  const categories = data.map((category: { slug: string }) => ({
    ...category,
    path: `/search/${category.slug}`,
  }))

  return [CATEGORY_ALL, ...categories]
}

export const getCategoryNameBySlug = (slug: string) => {
  const names = slug.split('-')
  const categoryName = names
    .map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    })
    .join(' ')

  return categoryName
}

export const getProduct = async (slug: string): Promise<Product> => {
  const productData = await fetchData({
    endpoint: `/products/search?q=${slug}`,
  })

  return productData.products.length ? productData.products[0] : null
}

export const getProductSlug = (title: string) => {
  return title.replace(/ /g, '-').toLowerCase()
}

export const createUrl = (
  pathname: string,
  params: Record<string, string | null | undefined>
) =>
  `${pathname}?${queryString.stringify(params, {
    skipNull: true,
  })}`

export const onAwait = async (ms = 1000) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, ms)
  })
}

export const getLocale = async (locale: Locale) =>
  locales[locale]?.() ?? locales.en()
