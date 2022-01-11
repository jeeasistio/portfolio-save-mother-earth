import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import SaveMotherEarth from './components/heropage/SaveMotherEarth'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Routes>
              <Route path="/home" element={<SaveMotherEarth />} />
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  )
}

export default App
