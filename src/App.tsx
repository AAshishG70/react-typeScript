import { useEffect, useState } from "react";
import { useProductContext } from "./context/product-context/ProductsContextProvider";
import useProducts from "./context/product-context/useProducts";

const App = () => {
  const { fetchProducts, products, isFetching } = useProducts();

  fetchProducts();

  return !isFetching ? (
    <div>
      {products.map((product) => {
        return <div key={product.id}>{product.title}</div>;
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default App;

// const [firstNumber, setFirstNumber] = useState<number>();
// const [secondNumber] = useState();

// useEffect(() => {
//   const number = 10;
//   setFirstNumber(10);
// }, []);
// const [number, setNumber] = useState<string | undefined>(null);
// function createPair<S, T>(v1: S, v2: T): [S, T] | 0 {
//   if (typeof v1 !== undefined && typeof v2 !== undefined) {
//     return [v1, v2];
//   }
//   return 0;
// }
// console.log(createPair<string, number>("hello", 42));

// const result = createPair<number | undefined, number | undefined>(
//   firstNumber,
//   secondNumber
// );
