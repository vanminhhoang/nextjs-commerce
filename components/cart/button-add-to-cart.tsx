'use client'

import { Product } from '@/types/product'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useCart } from './cart-context'
import { useApp } from '../app-context'

const ButtonAddToCart = ({ product }: { product: Product }) => {
  const { addCartItem, toggleIsOpen } = useCart()
  const { locale } = useApp()

  return (
    <button
      onClick={() => {
        addCartItem(product)
        toggleIsOpen()
      }}
      aria-label={locale.cart.addToCart}
      className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90">
      <div className="absolute left-0 ml-4">
        <PlusIcon className="h-5" />
      </div>
      {locale.cart.addToCart}
    </button>
  )
}
export default ButtonAddToCart
