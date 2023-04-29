import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { ViewTriggerer } from '../../interfaces/Article'
import { motion, useCycle } from 'framer-motion'
import ExpandButton from './ExpandButton'
import { articleVar } from '../../animations/effectsVariants'

const sx: SxProps = {
  root: {
    width: '100%',
    height: '100vh',
    scrollSnapAlign: 'start',
    position: 'relative',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row', md: 'column' },
    overflow: 'hidden'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    boxShadow: '2px 0 8px -6px #000, inset -2px 0 8px -6px #000',
    pointerEvents: 'none'
  },
  image: {
    width: '100%',
    height: '60%',
    backgroundSize: 'cover'
  },
  article: {
    py: 2,
    px: 4,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  body: {
    p: 2
  },
  title: {
    mb: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  par: {
    lineHeight: 1.7,
    mb: 3,
    color: 'grey.300'
  },
  fadeOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '20%'
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
  const [expanded, expand] = useCycle('60%', '20%')
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
      <Box sx={{ ...sx.image, background: `url(${image}) center` }} />
      <Box
        component={motion.div}
        variants={articleVar}
        custom={expanded}
        animate="animate"
        sx={{ ...sx.article, backgroundColor: `${color}` }}
      >
        <Box sx={sx.title}>
          <Typography variant="h4">{title}</Typography>
          <ExpandButton expanded={expanded} expand={expand} />
        </Box>
        <Box sx={sx.body}>
          <Typography sx={sx.par}>{par1}</Typography>

          <Typography sx={sx.par}>{par2}</Typography>
        </Box>
      </Box>
      <Box sx={sx.overlay} />
      <Box
        sx={{
          ...sx.fadeOverlay,
          background: `linear-gradient(${color}00, ${color}33, ${color}ff 90%)`
        }}
      />
    </Box>
  )
}

export default Article
