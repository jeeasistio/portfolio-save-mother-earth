import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import React, { useState } from 'react'
import SaveMotherEarthButton from './SaveMotherEarthButton'
import { AnimatePresence } from 'framer-motion'
import WhatsHappening from './WhatsHappening'
import TransitionPage from '../utilityComponents/TransitionPage'

const sx: SxProps = {
  root: {
    background: 'url(/images/nature.jpg) no-repeat center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  }
}

const SaveMotherEarth = () => {
  const [onScreen, setOnScreen] = useState('save')

  const setOnScreenToWhats = () => setOnScreen('whats')

  return (
    <TransitionPage>
      <Box sx={sx.root}>
        <Box sx={sx.innerRoot}>
          <AnimatePresence>
            {onScreen === 'save' && (
              <SaveMotherEarthButton
                key="save"
                handleClick={setOnScreenToWhats}
              />
            )}
            {onScreen === 'whats' && <WhatsHappening />}
          </AnimatePresence>
        </Box>
      </Box>
    </TransitionPage>
  )
}

export default SaveMotherEarth
