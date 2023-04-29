import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import { whatsVar } from '../../animations/whatsHappeningVariant'
import { fullOverlay, textShadow } from '../../utils/designUtils'
import TransitionText from '../utilityComponents/TransitionText'
import { Link } from 'react-router-dom'
import ClickAnywhere from '../utilityComponents/ClickAnywhere'

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

const WORDS = ['What\u00a0', 'are\u00a0the\u00a0', 'Causes?']

const WhatCauses = () => {
  return (
    <Link to="/causes">
      <Box
        sx={sx.root}
        component={motion.div}
        variants={whatsVar}
        whileInView="animate"
        initial="initial"
        exit="initial"
      >
        <Box sx={sx.whatsCtn} component={motion.div} variants={whatsVar}>
          {WORDS.map((word, i) => (
            <TransitionText
              textProp={word}
              variant="h1"
              delay={i}
              textStyle={{ fontWeight: 'medium', textAlign: 'center' }}
            />
          ))}

          <ClickAnywhere />
        </Box>
      </Box>
    </Link>
  )
}

export default WhatCauses
