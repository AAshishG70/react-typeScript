import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./context/product-context/ProductsContextProvider";
import GlobalStyle from "./style/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { CartProvider } from "./context/cart-context/CartContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </ThemeProvider>
);
