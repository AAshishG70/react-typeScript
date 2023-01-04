import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { ThemeInterface } from './theme'

const {
  default: styled,
  css,
  ThemeProvider,
  keyframes,
  createGlobalStyle,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

export { css, ThemeProvider, keyframes, createGlobalStyle }

export default styled

// import { createGlobalStyle } from "styled-components";

// const GlobalStyles = createGlobalStyle`
// body{
//     margin: 0;
//     font-family: Open-Sans, Hellvetica, Sans-Serif;
// }
// `;

// export default GlobalStyles;
