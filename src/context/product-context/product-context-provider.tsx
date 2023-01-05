import { createContext, useState, ReactNode, useContext } from 'react'
import { IProduct } from '@/model'

interface IProductContext {
  isFetching: boolean
  products: IProduct[]
  setProducts(products: IProduct[]): void
  setIsFetching(value: boolean): void
}

export const ProductContext = createContext<undefined | IProductContext>(undefined)

export const useProductContext = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('Context must be within provider!!')
  }

  return context
}

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [isFetching, setIsFetching] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])

  return (
    <ProductContext.Provider
      value={{ isFetching: isFetching, products, setProducts, setIsFetching }}
    >
      {children}
    </ProductContext.Provider>
  )
}
