import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { textShadow } from '../../utils/designUtils'

const sx: SxProps = {
  root: {
    position: 'absolute',
    top: 20,
    left: 20
  },
  text: {
    textShadow: textShadow,
    fontWeight: 'bold'
  }
}

const NavTitle = () => {
  const location = useLocation()

  return (
    <Box sx={sx.root}>
      <Typography variant="h4" sx={sx.text}>
        {location.pathname.replace('/', '').toUpperCase()}
      </Typography>
    </Box>
  )
}

export default NavTitle
