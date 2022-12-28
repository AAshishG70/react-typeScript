import axios from "axios";
import { IProduct } from "../model";

export async function getProducts() {
  try {
    const { data }: { data: IProduct[] } = await axios(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
