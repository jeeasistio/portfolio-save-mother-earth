import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { buttonVar } from '../../animations/navVariant'

const sx: SxProps = {
  root: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 50,
    height: 22,
    background: 'transparent',
    outline: 'none',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer'
  },
  line1: {
    width: '100%',
    height: 5,
    borderRadius: 10,
    backgroundColor: 'common.white'
  },
  line2: {
    width: '100%',
    height: 5,
    borderRadius: 10,
    backgroundColor: 'common.white'
  }
}

interface Props {
  handleTap(): void
  isOpen: boolean
}

const NavButton = ({ handleTap, isOpen }: Props) => {
  const openControls = useAnimation()

  useEffect(() => {
    isOpen ? openControls.start('animate') : openControls.start('initial')
  }, [openControls, isOpen])

  return (
    <Box sx={sx.root} component={motion.button} onClick={handleTap}>
      <Box
        sx={sx.line1}
        component={motion.div}
        variants={buttonVar}
        initial="initial"
        animate={openControls}
        custom={0}
      />
      <Box
        sx={sx.line2}
        component={motion.div}
        variants={buttonVar}
        initial="initial"
        animate={openControls}
        custom={1}
      />
    </Box>
  )
}

export default NavButton
