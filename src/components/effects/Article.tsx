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
    scrollSnapAlign: 'start'
  },
  image: {
    width: '100%',
    height: '50%',
    backgroundSize: 'cover'
  },
  article: {
    py: 2,
    px: 4,
    width: '100%',
    height: '50%'
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
    color: 'grey.400'
  }
}

interface Props extends ViewTriggerer {
  image: string
  title: string
  color: string
  name: string
}

const Article = ({ image, title, color, name, handleInView }: Props) => {
  const handleEnterOnView = () => handleInView(name)

  return (
    <Box
      id={name}
      sx={sx.root}
      component={motion.div}
      onViewportEnter={handleEnterOnView}
      viewport={{ amount: 'all' }}
    >
      <Box sx={{ ...sx.image, background: `url(${image}) center` }} />
      <Box sx={{ ...sx.article, backgroundColor: `${color}` }}>
        <Box sx={sx.title}>
          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box sx={sx.body}>
          <Typography sx={sx.par}>
            Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.
            Fusce quis mauris non massa commodo pharetra. Nullam euismod
            fringilla nibh quis mattis.
          </Typography>

          <Typography sx={sx.par}>
            Phasellus eu felis sapien. Mauris vitae dapibus diam. Pellentesque
            nec mattis quam, a fermentum sapien. Donec ac tortor neque. Etiam
            non aliquet elit, eu tempus massa.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Article
