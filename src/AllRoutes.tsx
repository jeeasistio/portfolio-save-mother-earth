import React from 'react'
import Causes from './components/cause&effects/Causes'
import Solutions from './components/solutions/Solutions'
import { AnimatePresence } from 'framer-motion'
import SaveMotherEarth from './components/heropage/SaveMotherEarth'
import Effects from './components/cause&effects/Effects'
import { Route, Routes, useLocation } from 'react-router-dom'

const AllRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<SaveMotherEarth />} />
        <Route path="/effects" element={<Effects />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AllRoutes
