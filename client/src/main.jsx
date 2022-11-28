import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import App from './App'
import './index.css'
import { theme } from './theme.js'
import { AuthProvider } from './Context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>

        <App />
      </ThemeProvider>
    </AuthProvider>

  </React.StrictMode>
)
