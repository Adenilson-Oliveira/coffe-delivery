import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #333;
    color: #fff;

  }

  body, input, textarea, button {
    /* font-family: ; */
    /* font-weight: ; */
    font-size: 1rem;
  }

`
