import { Product } from './product'

export type UpdateType = 'plus' | 'minus' | 'delete'

export interface CartProduct extends Product {
  quantity: number
}

export interface CartContextInterface {
  products: CartProduct[]
  totalQuantity: number
  totalAmount: number
  isOpen: boolean
  toggleIsOpen: () => void
  addCartItem: (product: Product) => void
  updateCartItem: (productId: number, updateType: UpdateType) => void
}
