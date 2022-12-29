import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { IProduct } from "../../model/index";
import { getProducts } from "../../services/product";

interface IProductContext {
  isFetching: boolean;
  products?: IProduct[];
  setProducts(products: IProduct[]): void;
  setIsFetching(value: boolean): void;
}

export const ProductContext = createContext<undefined | IProductContext>(
  undefined
);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data?.products);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{ isFetching: isFetching, products, setProducts, setIsFetching }}
    >
      {children}
    </ProductContext.Provider>
  );
};

/* <> --> This is typescript generics 
Typescript was introduced by Microsoft

*/
