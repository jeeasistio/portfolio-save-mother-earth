import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import {
  transitionInVar,
  transitionOutVar
} from '../../animations/transitionVar'
import Nav from './Nav'

const sx: SxProps = {
  transitionPage: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '150%',
    width: '100%',
    backgroundColor: '#1D471D',
    zIndex: 'tooltip'
  }
}

interface Props {
  children: React.ReactNode
}

const TransitionPage = ({ children }: Props) => {
  return (
    <>
      <Box
        sx={sx.transitionPage}
        component={motion.div}
        variants={transitionInVar}
        animate="animate"
        initial="initial"
        exit="exit"
      />
      <Box
        sx={sx.transitionPage}
        component={motion.div}
        variants={transitionOutVar}
        initial="initial"
        exit="exit"
      />
      <Nav />
      {children}
    </>
  )
}

export default TransitionPage
