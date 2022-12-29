import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./context/product-context/ProductsContextProvider";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import GlobalStyle from "./style/global-style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProductProvider>
      <App />
    </ProductProvider>
  </ThemeProvider>
);
