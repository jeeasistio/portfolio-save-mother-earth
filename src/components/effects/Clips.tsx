import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import React from 'react'
import Article, { ChangesInView } from '../../interfaces/Article'
import { fullOverlay } from '../../utils/designUtils'
import Clip from './Clip'

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

interface Props extends ChangesInView {
  articles: Article[]
}

const Clips = ({ inView, articles }: Props) => {
  return (
    <Box sx={sx.root}>
      {articles.map((art) => (
        <Clip inView={inView} article={art} />
      ))}
      <Box sx={sx.overlay} />
    </Box>
  )
}

export default Clips
