import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { dividerVar, readVar } from '../../animations/saveMotherEarthVariant'

const sx: SxProps = {
  root: {
    p: 4,
    maxWidth: 0.5,
    textAlign: 'left',
    color: 'common.white',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    ml: '5%',
    mb: '5%'
  },
  divider: {
    backgroundColor: 'common.white',
    width: 0.5,
    height: 3,
    mt: 2,
    mb: 1,
    borderRadius: 2
  },
  read: {
    color: 'grey.500'
  }
}

const SaveMotherEarthButton = () => {
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
      component={motion.button}
      onHoverStart={handleHover}
      onHoverEnd={handleNotHover}
    >
      <Typography variant="h3">Save Mother Earth</Typography>
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
  )
}

export default SaveMotherEarthButton
