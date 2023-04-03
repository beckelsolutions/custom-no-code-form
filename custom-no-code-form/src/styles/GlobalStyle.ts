import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 50px;
    width: 100%;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
