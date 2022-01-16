import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import React from 'react'
import { ChangesInView } from '../../interfaces/Article'
import { fullOverlay } from '../../utils/designUtils'

const sx: SxProps = {
  root: {
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    background: fullOverlay
  }
}

interface Props extends ChangesInView {}

const Clip = ({ inView }: Props) => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.overlay} />
      <video
        style={{ objectFit: 'cover' }}
        width={'100%'}
        height={'100%'}
        autoPlay
        loop
        muted
      >
        <source src="/nature.mp4" type="video/mp4" />
      </video>
    </Box>
  )
}

export default Clip
