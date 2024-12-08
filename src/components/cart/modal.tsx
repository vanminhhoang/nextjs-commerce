'use client'

import { Dialog, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import IconOpenCartSquare from './icon-open-cart-square'
import { EditItemQuantityButton } from './edit-item-quantity-button'
import CloseCart from './close-cart'
import ProductPrice from '../product/product-price'
import { useCart } from './cart-context'
import DeleteItemButton from './delete-item-button'
import { getProductSlug } from '@/lib'
import { useTranslations } from 'next-intl'

const CartModal = () => {
  const { products, totalQuantity, totalAmount, isOpen, toggleIsOpen } =
    useCart()
  const t = useTranslations('cart');

  return (
    <>
      <button aria-label="Open cart" onClick={toggleIsOpen}>
        <IconOpenCartSquare quantity={totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={toggleIsOpen} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full">
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl md:w-[390px] dark:border-neutral-700 dark:bg-black/80 dark:text-white">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{t('myCart')}</p>
                <button aria-label="Close cart" onClick={toggleIsOpen}>
                  <CloseCart />
                </button>
              </div>

              {products.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16" />
                  <p className="mt-6 text-center text-2xl font-bold">
                    {t('cartEmpty')}
                  </p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="flex-grow overflow-auto py-4">
                    {products.map((product) => {
                      const productSlug = getProductSlug(product.title)

                      return (
                        <li
                          key={product.id}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700">
                          <div className="relative flex w-full flex-row justify-between px-1 py-4">
                            <div className="absolute z-40 -ml-1 -mt-2">
                              <DeleteItemButton item={product} />
                            </div>
                            <div className="flex flex-row">
                              <div className="relative min-w-16 max-w-16 min-h-16 max-h-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                <Image
                                  className="w-full h-full object-cover"
                                  width={64}
                                  height={64}
                                  alt={product.title}
                                  src={product.thumbnail}
                                />
                              </div>
                              <Link
                                href={`/product/${productSlug}`}
                                onClick={toggleIsOpen}
                                className="z-30 ml-2 flex flex-row space-x-4">
                                <div className="flex flex-1 flex-col text-base">
                                  <span className="leading-tight">
                                    {product.title}
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="flex h-16 flex-col justify-between">
                              <ProductPrice
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={product.stock as unknown as string}
                                currencyCode="USD"
                              />
                              <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                                <EditItemQuantityButton
                                  item={product}
                                  type="minus"
                                />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm">
                                    {product.quantity}
                                  </span>
                                </p>
                                <EditItemQuantityButton
                                  item={product}
                                  type="plus"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                  <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p>{t('taxes')}</p>
                      <ProductPrice
                        className="text-right text-base text-black dark:text-white"
                        amount="0"
                        currencyCode="USD"
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>{t('shipping')}</p>
                      <p className="text-right">
                        {t('calculatedAtCheckout')}
                      </p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                      <p>{t('total')}</p>
                      <ProductPrice
                        className="text-right text-base text-black dark:text-white"
                        amount={totalAmount as unknown as string}
                        currencyCode="USD"
                      />
                    </div>
                  </div>
                  <button className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100">
                    {t('proceedToCheckout')}
                  </button>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

export default CartModal
