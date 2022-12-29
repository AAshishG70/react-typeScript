import { useEffect } from "react";
import { getProducts } from "../../services/product";
import { useProductContext } from "./ProductsContextProvider";

function useProducts() {
  const { setProducts, setIsFetching } = useProductContext();

  const fetchProducts = () => {
    setIsFetching(true);
    getProducts().then((data) => {
      setIsFetching(false);
      setProducts(data?.products);
    });
  };
}

export default useProducts;
