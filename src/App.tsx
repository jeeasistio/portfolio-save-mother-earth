import React, { useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import './theme/index.css'
import AllRoutes from './AllRoutes'

function App() {
  useEffect(() => {
    const el = document.querySelector('.loading')

    el?.remove()
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <AllRoutes />
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  )
}

export default App
