import { createGlobalStyle } from 'styled-components';

const GlobalSquireStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-size: 16px;
    font-family: 'Fira Sans', sans-serif;
  }
`;

export default GlobalSquireStyle;
