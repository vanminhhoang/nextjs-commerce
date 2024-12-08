'use client'

import { CartProduct } from '@/types/cart'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useCart } from './cart-context'

const DeleteItemButton = ({ item }: { item: CartProduct }) => {
  const { updateCartItem } = useCart()

  return (
    <button
      onClick={() => updateCartItem(item.id, 'delete')}
      type="submit"
      aria-label="Remove cart item"
      className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500">
      <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
    </button>
  )
}

export default DeleteItemButton
