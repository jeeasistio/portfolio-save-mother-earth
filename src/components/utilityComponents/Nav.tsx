import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { useCycle } from 'framer-motion'
import React from 'react'
import NavButton from './NavButton'
import NavPage from './NavPage'

const sx: SxProps = {
  root: {
    position: 'fixed',
    zIndex: 'appBar'
  },
  innerRoot: {
    position: 'relative',
    width: '100vw'
  }
}

const Nav = () => {
  const [isOpen, onTap] = useCycle(false, true)

  const handleTap = () => onTap()

  return (
    <Box sx={sx.root}>
      <Box sx={sx.innerRoot}>
        <Typography>EFFECTS</Typography>
        {isOpen && <NavPage />}
        <NavButton handleTap={handleTap} isOpen={isOpen} />
      </Box>
    </Box>
  )
}

export default Nav
