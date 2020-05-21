import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset-advanced'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    user-select: auto;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
    line-height: 1.43;
    color: #000;
  }

  iframe,
  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyle
