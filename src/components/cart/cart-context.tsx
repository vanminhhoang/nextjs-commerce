'use client'

import { CartContextInterface, CartProduct, UpdateType } from '@/types/cart'
import { Product } from '@/types/product'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const CartContext = createContext<CartContextInterface | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const addCartItem = useCallback(
    (product: Product) => {
      const productIndex = products.findIndex((pd) => pd.id === product.id)
      const newProducts = [...products]

      if (productIndex !== -1) {
        newProducts[productIndex].quantity += 1
      } else {
        const newProduct = { ...product, quantity: 1 }
        newProducts.unshift(newProduct)
      }

      localStorage.setItem('cartProducts', JSON.stringify(newProducts))

      setProducts([...newProducts])
    },
    [products]
  )

  const updateCartItem = useCallback(
    (productId: number, updateType: UpdateType) => {
      const productIndex = products.findIndex((pd) => pd.id === productId)
      const newProducts = [...products]

      if (productIndex !== -1) {
        switch (updateType) {
          case 'plus':
            newProducts[productIndex].quantity += 1
            break

          case 'minus':
            newProducts[productIndex].quantity -= 1
            if (newProducts[productIndex].quantity <= 0) {
              newProducts.splice(productIndex, 1)
            }
            break

          default:
            newProducts.splice(productIndex, 1)
            break
        }
      }

      localStorage.setItem('cartProducts', JSON.stringify(newProducts))

      setProducts([...newProducts])
    },
    [products]
  )

  const value = useMemo(() => {
    return {
      addCartItem,
      updateCartItem,
      toggleIsOpen,
      totalQuantity: products.reduce(
        (total, product) => total + product.quantity,
        0
      ),
      totalAmount: products.reduce(
        (total, product) => total + product.quantity * product.price,
        0
      ),
    }
  }, [addCartItem, updateCartItem, toggleIsOpen, products])

  // Handle get cart products from local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cartProducts = localStorage.getItem('cartProducts')
      setProducts(cartProducts ? JSON.parse(cartProducts) : [])
    }
  }, [])

  return (
    <CartContext.Provider value={{ ...value, products, isOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export default CartContext
