import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import { navPageVar } from '../../animations/navVariant'
import NavLink from './NavLink'

const LINKS = ['effects', 'causes', 'solutions']

const sx: SxProps = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#1D471D',
    p: 6
  }
}

const NavPage = () => {
  return (
    <Box
      sx={sx.root}
      component={motion.div}
      variants={navPageVar}
      animate="animate"
      initial="initial"
      exit="initial"
    >
      <Box>
        {LINKS.map((link) => (
          <NavLink link={link} />
        ))}
      </Box>
    </Box>
  )
}

export default NavPage
