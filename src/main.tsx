import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css'
import './styles/global.css'
import App from './App'

const theme = createTheme({
  primaryColor: 'brown',
  colors: {
    brown: [
      '#faf7f2',
      '#e8dfd4',
      '#c4a882',
      '#a67c52',
      '#6b4423',
      '#3d2314',
      '#3d2314',
      '#2d1a0e',
      '#1f1209',
      '#120a05',
    ],
  },
  fontFamily: '"Inter", system-ui, sans-serif',
  headings: {
    fontFamily: '"Playfair Display", Georgia, serif',
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)
