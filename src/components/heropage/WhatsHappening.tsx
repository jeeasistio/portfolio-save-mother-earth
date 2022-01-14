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

const WORDS = ["What's\u00a0", 'Happening\u00a0', 'and\u00a0Why?']

const WhatsHappening = () => {
  return (
    <Box sx={sx.root} component={Link} to="/effects">
      <Box
        sx={sx.whatsCtn}
        component={motion.div}
        variants={whatsVar}
        animate="animate"
        initial="initial"
        whileHover="hovered"
      >
        {WORDS.map((word, i) => (
          <TransitionText textProp={word} variant="h1" delay={i} />
        ))}
      </Box>
    </Box>
  )
}

export default WhatsHappening
