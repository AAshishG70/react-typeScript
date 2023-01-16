// import Loader from '@/common/loader/loader'
import Products from '@/components/products/products'
import Filter from '../filter/filter'
import Cart from '@/components/cart/cart'
import * as S from './style'
import useProducts from '@/context/product-context/use-product'
import { useEffect } from 'react'

const App = () => {
  const { fetcProducts, products } = useProducts()

  useEffect(() => {
    fetcProducts()
  }, [])

  return (
    <>
      {products.length > 0 ? (
        <S.Container>
          <S.TwoColumnGrid>
            <S.Side>
              {' '}
              <Filter />{' '}
            </S.Side>
            <S.Main>
              <S.MainHeader>{/* <p>{products?.length} Product(s) found</p> */}</S.MainHeader>
              <Products products={products} />
            </S.Main>
          </S.TwoColumnGrid>
          <Cart />
          {/* <Loader /> */}
        </S.Container>
      ) : (
        'Loading'
      )}
    </>
  )
}

export default App