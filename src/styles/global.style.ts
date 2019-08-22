import { createGlobalStyle } from 'styled-components'

import colors from './color.style'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    color: #333;
  }

  label {
    color: ${ colors.lightGrey };
    display: inline-block;
    margin-bottom: .5rem;
  }
`
