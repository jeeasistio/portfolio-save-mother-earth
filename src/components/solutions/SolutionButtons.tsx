import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { motion, useAnimation } from 'framer-motion'
import { dividerVar } from '../../animations/saveMotherEarthVariant'
import { childrenVar } from '../../animations/solutionVariant'
import ArrowForward from '@mui/icons-material/ArrowForward'
import ArrowBack from '@mui/icons-material/ArrowBack'
import React from 'react'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'medium',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 0.5
  },
  divider: {
    width: '50%',
    height: 2,
    borderRadius: 2,
    mt: 1,
    backgroundColor: 'common.white'
  },
  buttonCtn: {
    overflow: 'hidden',
    my: 2,
    display: 'flex',
    gap: 2
  }
}

interface Props {
  handleNext(): void
  handlePrev(): void
  handleBack(): void
}

const SolutionButtons = ({ handleNext, handlePrev, handleBack }: Props) => {
  const backControls = useAnimation()
  const nextControls = useAnimation()
  const prevControls = useAnimation()

  const hoverBack = () => backControls.start('long')
  const notHoverBack = () => backControls.start('short')

  const hoverNext = () => nextControls.start('long')
  const notHoverNext = () => nextControls.start('short')

  const hoverPrev = () => prevControls.start('long')
  const notHoverPrev = () => prevControls.start('short')

  return (
    <Box sx={sx.root}>
      <Box sx={sx.buttonCtn}>
        <Box
          sx={sx.button}
          component={motion.button}
          onHoverStart={hoverBack}
          onHoverEnd={notHoverBack}
          onClick={handleBack}
          variants={childrenVar}
        >
          <Typography sx={sx.text}>Back to Solutions</Typography>

          <Box
            sx={sx.divider}
            component={motion.div}
            variants={dividerVar}
            initial="short"
            animate={backControls}
          />
        </Box>
      </Box>

      <Box sx={sx.buttonCtn}>
        <Box
          sx={sx.button}
          component={motion.button}
          onHoverStart={hoverPrev}
          onHoverEnd={notHoverPrev}
          onClick={handlePrev}
          variants={childrenVar}
        >
          <Typography sx={sx.text}>
            <ArrowBack />
            Prev
          </Typography>

          <Box
            sx={sx.divider}
            component={motion.div}
            variants={dividerVar}
            initial="short"
            animate={prevControls}
          />
        </Box>
        <Box
          sx={sx.button}
          component={motion.button}
          onHoverStart={hoverNext}
          onHoverEnd={notHoverNext}
          onClick={handleNext}
          variants={childrenVar}
        >
          <Typography sx={sx.text}>
            Next
            <ArrowForward />
          </Typography>

          <Box
            sx={sx.divider}
            component={motion.div}
            variants={dividerVar}
            initial="short"
            animate={nextControls}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SolutionButtons
