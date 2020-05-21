import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import GlobalStyle from './common/GlobalStyle'
import Explorer from './components/Explorer/'
import theme from './themes/theme'
import store from './store/store'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Explorer />
    </ThemeProvider>
  </Provider>
)

export default App
