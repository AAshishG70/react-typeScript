import { BuyButton, Container, Image, Price, Shipping, Title, Value } from './style'

function Product() {
  const freeShipping = true
  return (
    <Container>
      {freeShipping && <Shipping>Free Shipping</Shipping>}
      <Image></Image>
      <Title></Title>
      <Price>
        <Value>
          <div></div>
          <div></div>
        </Value>
      </Price>
      <BuyButton>Add to Cart</BuyButton>
    </Container>
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
