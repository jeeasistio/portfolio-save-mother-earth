import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import { whatsVar } from '../../animations/whatsHappeningVariant'
import { fullOverlay, textShadow } from '../../utils/designUtils'
import TransitionText from '../utilityComponents/TransitionText'
import { Link } from 'react-router-dom'

const sx: SxProps = {
  root: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: fullOverlay
  },
  whatsCtn: {
    textShadow: textShadow,
    display: 'flex',
    flexDirection: 'column',
    minWidth: 350
  }
}

const WORDS = ['How\u00a0Can\u00a0', 'We\u00a0Help?']

const WhatCauses = () => {
  return (
    <Box
      sx={sx.root}
      component={motion.div}
      variants={whatsVar}
      whileInView="animate"
      initial="initial"
      exit="initial"
    >
      <Link to="/solutions">
        <Box sx={sx.whatsCtn} component={motion.div} variants={whatsVar}>
          {WORDS.map((word, i) => (
            <TransitionText
              textProp={word}
              variant="h1"
              delay={i}
              textStyle={{ fontWeight: 'medium' }}
            />
          ))}
        </Box>
      </Link>
    </Box>
  )
}

export default WhatCauses