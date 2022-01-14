import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { barVar } from '../../animations/barVar'

const sx: SxProps = {
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    px: 2,
    position: 'relative',
    overflow: 'hidden',
    color: 'transparent',
    cursor: 'pointer'
  },
  text: {
    color: 'transparent'
  },
  summary: {
    color: 'grey.400'
  },
  active: {
    backgroundColor: 'rgb(21, 71, 29)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 4
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '150%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    px: 2,
    pointerEvents: 'none'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  }
}

interface Props {
  isActive?: boolean
  title: string
  summary: string
  index: number
  image: string
  color: string
}

const Bar = ({
  isActive = false,
  title,
  summary,
  index,
  image,
  color
}: Props) => {
  const hoverControls = useAnimation()

  const handleHover = () => hoverControls.start('hover')

  const handleNotHover = () => hoverControls.start('initial')

  if (isActive)
    return (
      <Box sx={sx.active}>
        <Box sx={sx.title}>
          <Typography variant="h3" paragraph>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={sx.summary}>
            Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.
          </Typography>
        </Box>
        <Typography fontWeight="bold" variant="h2">
          {`${index}`.padStart(2, '0')}
        </Typography>
      </Box>
    )

  return (
    <Box
      sx={{ ...sx.root, background: `url(${image}) center` }}
      component={motion.div}
      onHoverStart={handleHover}
      onHoverEnd={handleNotHover}
    >
      <Box
        sx={{
          ...sx.imageOverlay,
          background: `linear-gradient(to right, ${color}CC 10%, ${color}4D 60%, ${color}CC 90%)`
        }}
      />
      <Typography sx={sx.text} variant="h3">
        {`${index}`.padStart(2, '0')}&nbsp;
      </Typography>
      <Typography sx={sx.text} variant="h4">
        {title}
      </Typography>

      <Box
        sx={{
          ...sx.hoverOverlay,
          background: `linear-gradient(to right, ${color} 70%, ${color}1A) 100%`
        }}
        component={motion.div}
        variants={barVar}
        animate={hoverControls}
        initial="initial"
      >
        <Typography fontWeight="bold" variant="h3">
          {`${index}`.padStart(2, '0')}&nbsp;
        </Typography>
        <Typography variant="h4">{title}</Typography>
      </Box>
    </Box>
  )
}

export default Bar
