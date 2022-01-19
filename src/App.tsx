import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SaveMotherEarth from './components/heropage/SaveMotherEarth'
import Effects from './components/effects/Effects'
import './theme/index.css'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Routes>
              <Route path="/" element={<SaveMotherEarth />} />
              <Route path="/effects" element={<Effects />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  )
}

export default App
