import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { StrictMode } from 'react'
import { ThemeProvider } from 'theme-ui'
import { InitializeColorMode } from 'theme-ui'
import { theme } from './theme'
import { App } from './pages/App'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') || new HTMLElement()).render(
  <StrictMode>
    <InitializeColorMode />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
