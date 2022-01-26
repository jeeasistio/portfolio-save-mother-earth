import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { ViewTriggerer } from '../../interfaces/Article'
import { motion } from 'framer-motion'

const sx: SxProps = {
  root: {
    width: '100%',
    height: '100vh',
    scrollSnapAlign: 'start',
    position: 'relative',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row', md: 'column' }
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: '2px 0 8px -6px #000, inset -2px 0 8px -6px #000'
  },
  image: {
    width: '100%',
    height: { xs: '50%', sm: '100%', md: '50%' },
    backgroundSize: 'cover'
  },
  article: {
    py: 2,
    px: 4,
    width: '100%',
    height: '100%'
  },
  body: {
    p: 2
  },
  title: {
    mb: 2
  },
  par: {
    lineHeight: 1.7,
    mb: 3,
    color: 'grey.300'
  }
}

interface Props extends ViewTriggerer {
  image: string
  title: string
  color: string
  name: string
  body: string
}

const Article = ({ image, title, color, name, body, handleInView }: Props) => {
  const handleEnterOnView = () => handleInView(name)
  const par1 = body.split('/')[0]
  const par2 = body.split('/')[1]

  return (
    <Box
      id={name}
      sx={sx.root}
      component={motion.div}
      onViewportEnter={handleEnterOnView}
      viewport={{ amount: 'all' }}
    >
      <Box sx={sx.overlay} />
      <Box sx={{ ...sx.image, background: `url(${image}) center` }} />
      <Box sx={{ ...sx.article, backgroundColor: `${color}` }}>
        <Box sx={sx.title}>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={sx.body}>
          <Typography sx={sx.par}>{par1}</Typography>

          <Typography sx={sx.par}>{par2}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Article
