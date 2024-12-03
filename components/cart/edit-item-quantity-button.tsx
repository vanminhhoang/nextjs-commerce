'use client'

import { CartProduct } from '@/types/cart'
import { useCart } from './cart-context'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

interface EditItemQuantityButtonProps {
  item: CartProduct
  type: 'plus' | 'minus'
}

export function EditItemQuantityButton({
  item,
  type,
}: EditItemQuantityButtonProps) {
  const { updateCartItem } = useCart()

  return (
    <button
      onClick={() => updateCartItem(item.id, type)}
      aria-label={
        type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'
      }
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full p-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'ml-auto': type === 'minus',
        }
      )}>
      {type === 'plus' ? (
        <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
      ) : (
        <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
      )}
    </button>
  )
}
