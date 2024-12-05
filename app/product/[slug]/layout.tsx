import { ReactNode } from 'react'

const ProductLayout = ({
  children,
  modal,
}: {
  modal: ReactNode
  children: ReactNode
}) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default ProductLayout
