/** @jsxImportSource theme-ui */
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import { InitializeColorMode } from 'theme-ui'
import { theme } from './theme'
import { LandingPage } from 'pages/LandingPage'

ReactDOM.render(
  <StrictMode>
    <InitializeColorMode />
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
