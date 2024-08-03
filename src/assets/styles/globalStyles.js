import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;

export default GlobalStyle;
