import axios from "axios";
import { IProduct, IProductResponse } from "../model/index";

export async function getProducts() {
  const { data }: IProductResponse = await axios(
    "https://react-shopping-cart-67954.firebaseio.com/products.json"
  );

  const { products } = data || [];
  return products;
}
