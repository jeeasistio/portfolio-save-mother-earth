import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import React from 'react'

const sx: SxProps = {
  root: {
    p: 4,
    maxWidth: 0.5,
    textAlign: 'left'
  },
  divider: {
    backgroundColor: 'common.black',
    width: 1,
    height: 3
  }
}

const SaveMotherEarthButton = () => {
  return (
    <Box sx={sx.root} component="button">
      <Typography sx={sx.heading} variant="h3">
        Save Mother Earth
      </Typography>
      <Box sx={sx.divider} />
    </Box>
  )
}

export default SaveMotherEarthButton
