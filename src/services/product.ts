import axios from "axios";
import { IProduct } from "../model";

export async function getProducts() {
  try {
    const { data }: { data: { products: IProduct } } = await axios(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
    const { products } = data || [];
    return products;
  } catch (error) {
    console.log(error);
  }
}
