import { createGlobalStyle } from 'styled-components';
import { fontFamily, fontSize } from './vars';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: ${fontSize};
  }

  body {
    font-family: ${fontFamily};
    font-size: 100%;
    font-weight: 300;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 1em 0;
    line-height: 1.35em;
  }

  p {
    line-height: 1.35em;
  }

  p + p {
    margin: 1em 0;
  }

  ul {
    li {
      margin: 10px 0;
    }
  }
`

export default GlobalStyle;
