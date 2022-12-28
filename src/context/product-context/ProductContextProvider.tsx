import { createContext, useEffect, useState, ReactNode } from "react";
import { IProduct } from "../../model/index";
import { getProducts } from "../../services/product";

interface IProductContext {
  isFetching: boolean;
  products?: IProduct[];
}

export const ProductContext = createContext<undefined | IProductContext>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[] | undefined>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <ProductContext.Provider value={{ isFetching: isFetching, products }}>
      {children}
    </ProductContext.Provider>
  );
};

/* <> --> This is typescript generics 
Typescript was introduced by Microsoft

*/
