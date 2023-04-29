import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import {
  dividerVar,
  readVar,
  buttonVar,
  backgroundVar
} from '../../animations/saveMotherEarthVariant'
import { textShadow } from '../../utils/designUtils'
import TransitionText from '../utilityComponents/TransitionText'

const sx: SxProps = {
  root: {
    width: '100vw',
    height: '100vh',
    position: 'relative'
  },
  buttonCtn: {
    minWidth: 300,
    textAlign: 'left',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    textShadow: textShadow
  },
  headingCtn: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  divider: {
    backgroundColor: 'common.white',
    width: '50%',
    height: 3,
    mt: 2,
    mb: 1,
    borderRadius: 2
  },
  read: {
    color: 'grey.400',
    fontWeight: 'bold'
  }
}

interface Props {
  handleClick(): void
}

const WORDS = ['Save\u00a0', 'Mother\u00a0', 'Earth']

const SaveMotherEarthButton = ({ handleClick }: Props) => {
  const dividerControls = useAnimation()
  const readControls = useAnimation()

  const handleNotHover = () => {
    dividerControls.start('short')
    readControls.start('hidden')
  }

  const handleHover = () => {
    dividerControls.start('long')
    readControls.start('show')
  }

  return (
    <Box
      sx={sx.root}
      component={motion.div}
      variants={backgroundVar}
      exit="changeBg"
      initial="gradientBg"
    >
      <Box
        sx={sx.buttonCtn}
        component={motion.button}
        onHoverStart={handleHover}
        onHoverEnd={handleNotHover}
        onClick={handleClick}
        variants={buttonVar}
        exit="fadeUp"
      >
        <Box sx={sx.headingCtn}>
          {WORDS.map((word, i) => (
            <TransitionText
              textProp={word}
              variant="h2"
              delay={i}
              textStyle={{ fontWeight: 'medium' }}
            />
          ))}
        </Box>

        <Box
          sx={sx.divider}
          component={motion.div}
          layout
          variants={dividerVar}
          animate={dividerControls}
        />

        <Typography
          sx={sx.read}
          component={motion.p}
          variants={readVar}
          animate={readControls}
          initial="hidden"
        >
          Read article
        </Typography>
      </Box>
    </Box>
  )
}

export default SaveMotherEarthButton
