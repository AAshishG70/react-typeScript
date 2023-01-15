import { useCallback } from 'react'
import { getProducts } from '@/services/product'
import { useProductContext } from './product-context-provider'

const useProducts = () => {
  const { setProducts, setIsFetching, products, isFetching } = useProductContext()

  const fetchProducts = useCallback(() => {
    // TODO
    // setIsFetching(true);
    getProducts().then((products) => {
      setProducts(products)
      setIsFetching(false)
    })
  }, [setIsFetching, setProducts])

  return { fetchProducts, isFetching, products }
}

export default useProducts