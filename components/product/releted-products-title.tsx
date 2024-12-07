'use client'

import { useApp } from '../app-context'

const RelatedProductsTitle = () => {
  const { locale } = useApp()

  return (
    <h2 className="mb-4 text-2xl font-bold">
      {locale.product.relatedProducts}
    </h2>
  )
}

export default RelatedProductsTitle
