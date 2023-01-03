import useProducts from '../../../context/product-context/useProducts'

function Product() {
  const { fetchProducts, products, isFetching } = useProducts()
  fetchProducts()
  return !isFetching ? (
    <div>
      {products.map((product) => {
        return <div key={product.id}>{product.title}</div>
      })}
    </div>
  ) : (
    <div>Loading</div>
  )
}

export default Product
