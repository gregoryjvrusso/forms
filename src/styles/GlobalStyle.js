import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    background: #ebebeb;
  }
  * {
    outline: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
