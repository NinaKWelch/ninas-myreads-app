import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components/macro'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'
import AppTheme from './AppTheme'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppTheme />
      <App />  
    </BrowserRouter> 
  </ThemeProvider>,
  document.getElementById('root')
)