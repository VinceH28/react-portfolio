import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --blue: #036dc4;
    --white: #fff;
    --grey: #efefef;
  }
  
  
  /* Scrollbar */
  body::-webkit-scrollbar {
    width: 8px;
  }
  html {
    scrollbar-width: auto;
    scrollbar-color: var(--blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
`;

export default GlobalStyles;