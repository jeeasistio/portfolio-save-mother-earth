import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import Article, { ChangesInView } from '../../interfaces/Article'
import { motion, useAnimation } from 'framer-motion'
import { clipVar } from '../../animations/clipVariant'

const sx: SxProps = {
  video: {
    objectFit: 'cover',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0
  }
}

interface Props extends ChangesInView {
  article: Article
}

const Clip = ({ inView, article }: Props) => {
  const clipControls = useAnimation()

  useEffect(() => {
    if (inView === article.name) {
      clipControls.start('fadeIn')
    } else {
      clipControls.start('fadeOut')
    }
  }, [inView, article, clipControls])

  return (
    <Box
      component={motion.video}
      variants={clipVar}
      initial="initial"
      animate={clipControls}
      sx={sx.video}
      width={'100%'}
      height={'100%'}
      autoPlay
      loop
      muted
    >
      <source src={article.clip} type="video/mp4" />
    </Box>
  )
}

export default Clip
