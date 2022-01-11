import Box from '@mui/material/Box'
import { SxProps } from '@mui/material/styles'
import React from 'react'
import { cssOverlay } from '../../utils/designUtils'
import SaveMotherEarthButton from './SaveMotherEarthButton'

const sx: SxProps = {
  root: {
    background: 'url(/nature.jpg) no-repeat center',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh'
  },
  buttonCtn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    background: cssOverlay
  }
}

const SaveMotherEarth = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.buttonCtn}>
        <SaveMotherEarthButton />
      </Box>
    </Box>
  )
}

export default SaveMotherEarth
