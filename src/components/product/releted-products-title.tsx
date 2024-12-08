'use client'

import { useTranslations } from 'next-intl'

const RelatedProductsTitle = () => {
  const t = useTranslations('product')

  return <h2 className="mb-4 text-2xl font-bold">{t('relatedProducts')}</h2>
}

export default RelatedProductsTitle
