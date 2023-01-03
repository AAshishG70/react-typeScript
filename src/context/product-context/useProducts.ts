import { useCallback } from "react";
import { getProducts } from "../../services/product";
import { useProductContext } from "./ProductsContextProvider";

function useProducts() {
  const { setProducts, setIsFetching, products, isFetching } =
    useProductContext();

  const fetchProducts = useCallback(() => {
    setIsFetching(true);
    getProducts().then((products) => {
      setIsFetching(false);
      setProducts(products);
    });
  }, [setIsFetching, setProducts]);
  return { fetchProducts, isFetching, products };
}

export default useProducts;
