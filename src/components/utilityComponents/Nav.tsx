import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { AnimatePresence, useCycle } from 'framer-motion'
import React from 'react'
import NavButton from './NavButton'
import NavPage from './NavPage'
import NavTitle from './NavTitle'

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
        <AnimatePresence>{isOpen && <NavPage />}</AnimatePresence>
        <NavTitle />
        <NavButton handleTap={handleTap} isOpen={isOpen} />
      </Box>
    </Box>
  )
}

export default Nav
