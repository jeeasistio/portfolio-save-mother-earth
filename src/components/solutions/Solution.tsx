import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { childrenVar, pageVar } from '../../animations/solutionVariant'

const sx: SxProps = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '120vh',
    display: 'flex',
    alignItems: 'flex-end',
    py: 4
  },
  innerRoot: {
    height: '80%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  imageCtn: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 2
  },
  imageList: {
    width: '80%',
    height: '100%'
  },
  imageListItem: {
    overflow: 'hidden'
  },
  imageInnerCtn: {
    overflow: 'hidden'
  },
  textCtn: {
    width: '50%'
  },
  title: {
    overflow: 'hidden'
  },
  body: {
    p: 2
  },
  parCtn: {
    overflow: 'hidden'
  },
  par: {
    lineHeight: 1.7,
    mb: 3,
    color: 'grey.300',
    overflow: 'hidden'
  }
}

interface Props {
  name: string
  title: string
  images: string[]
  body: string
  summary: string
  color: string
  isActive: boolean
  handleBack(): void
}

const Solution = ({
  name,
  title,
  images,
  body,
  summary,
  color,
  isActive,
  handleBack
}: Props) => {
  const pageControls = useAnimation()

  const handleShow = () => {
    pageControls.start('animate')
  }

  const handleHide = () => {
    pageControls.start('initial')
  }

  useEffect(() => {
    isActive ? handleShow() : handleHide()
  })

  return (
    <Box
      sx={{ ...sx.root, backgroundColor: color }}
      component={motion.div}
      variants={pageVar}
      initial="initial"
      animate={pageControls}
    >
      <Box sx={sx.innerRoot}>
        <Box sx={sx.imageCtn}>
          <ImageList sx={sx.imageList}>
            {images.map((image) => (
              <ImageListItem sx={sx.imageListItem}>
                <Box sx={sx.imageinnerCtn}>
                  <motion.img
                    variants={childrenVar}
                    src={image}
                    alt={name}
                    width={'100%'}
                    height={'100%'}
                  />
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box sx={sx.textCtn}>
          <Box sx={sx.parCtn}>
            <Typography
              sx={sx.title}
              component={motion.h2}
              variants={childrenVar}
              variant="h2"
            >
              {title}
            </Typography>
          </Box>
          <Box sx={sx.body}>
            <Box sx={sx.parCtn}>
              <Typography
                sx={sx.par}
                component={motion.p}
                variants={childrenVar}
              >
                Sed arcu libero, gravida eu orci sed, fermentum volutpat neque.
                Fusce quis mauris non massa commodo pharetra. Nullam euismod
                fringilla nibh quis mattis.
              </Typography>
            </Box>

            <Box sx={sx.parCtn}>
              <Typography
                sx={sx.par}
                component={motion.p}
                variants={childrenVar}
              >
                Phasellus eu felis sapien. Mauris vitae dapibus diam.
                Pellentesque nec mattis quam, a fermentum sapien. Donec ac
                tortor neque. Etiam non aliquet elit, eu tempus massa.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <button onClick={handleBack}>back</button>
    </Box>
  )
}

export default Solution