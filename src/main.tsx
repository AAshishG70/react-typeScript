import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { ProductProvider } from './context/product-context/product-context-provider'
import GlobalStyle from './style/global-style'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/theme'
import { CartProvider } from './context/cart-context/cart-context-provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </ThemeProvider>,
)
