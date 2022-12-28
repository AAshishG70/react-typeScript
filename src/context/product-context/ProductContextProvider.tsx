import { createContext, useState } from "react";
import { IProduct } from "../../model/index";

interface IProductContext {
  isFetching: boolean;
  products?: IProduct[];
}

const ProductContext = createContext<undefined | IProductContext>(undefined);

const ProductProvider = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  return (
    <ProductContext.Provider value={{ isFetching: false }}>
      hello
    </ProductContext.Provider>
  );
};

/* <> --> This is typescript generics 
Typescript was introduced by Microsoft
*/
