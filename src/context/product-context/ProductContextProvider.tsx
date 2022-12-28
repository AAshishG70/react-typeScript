import { createContext, useState } from "react";

interface IProductContext {
  isFetching: boolean;
  products?: [];
}

interface IProduct {
  availableSizes: string[];
}

const ProductContext = createContext<undefined | IProductContext>(undefined);

const ProductProvider = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState();
  return (
    <ProductContext.Provider value={{ isFetching: false }}>
      hello
    </ProductContext.Provider>
  );
};

/* <> --> This is typescript generics 
Typescript was introduced by Microsoft
*/
