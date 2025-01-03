'use client'

import { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  return (
    <div className="flex flex-col gap-10">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product: { id: number; title: string }) => (
          <h4 key={product.id}>{product.title}</h4>
        ))
      )}
    </div>
  )
}

export default Products
