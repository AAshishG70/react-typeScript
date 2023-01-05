import * as S from './style'

function Product() {
  const freeShipping = true
  return (
    <S.Container sku={10}>
      {freeShipping && <S.Shipping>Free Shipping</S.Shipping>}
      <S.Image imgUrl=''></S.Image>
      <S.Title></S.Title>
      <S.Price>
        <S.Val>
          <small>$</small>
          <div>100</div>
          <span>12</span>
        </S.Val>
      </S.Price>
      <S.BuyButton>Add to Cart</S.BuyButton>
    </S.Container>
  )
}

export default Product

// const { fetchProducts, products, isFetching } = useProducts()
// fetchProducts()

// {
//   !isFetching ? (
//     <div>
//       {products.map((product) => {
//         return <div key={product.id}>{product.title}</div>
//       })}
//     </div>
//   ) : (
//     <div>Loading</div>
//   )
// }
