import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Black+Han+Sans&family=Dongle&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Instrument+Serif:ital@0;1&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Pixelify+Sans:wght@400..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  ${reset}  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    letter-spacing: -0.7px;
    font-family: "Archivo", sans-serif;
  }
`;

export default GlobalStyle;