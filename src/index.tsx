/** @jsxImportSource theme-ui */
import 'react-toastify/dist/ReactToastify.css'
import App from 'pages/App'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'theme-ui'
import { InitializeColorMode } from 'theme-ui'
import { theme } from './theme'

ReactDOM.render(
  <StrictMode>
    <InitializeColorMode />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
)
