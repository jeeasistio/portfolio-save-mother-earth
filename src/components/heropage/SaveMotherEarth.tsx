import Box from '@mui/material/Box'
import { SxProps } from '@mui/material/styles'
import React from 'react'
import SaveMotherEarthButton from './SaveMotherEarthButton'

const sx: SxProps = {
  root: {
    background: 'url(/nature.jpg) no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh'
  }
}

const SaveMotherEarth = () => {
  return (
    <Box sx={sx.root}>
      <SaveMotherEarthButton />
    </Box>
  )
}

export default SaveMotherEarth
