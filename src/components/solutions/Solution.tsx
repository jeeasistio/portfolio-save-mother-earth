import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { childrenVar, pageVar } from '../../animations/solutionVariant'
import ISolution from '../../interfaces/Solution'
import SolutionButtons from './SolutionButtons'

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
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 1fr)',
    columnGap: 0.5,
    rowGap: 0.5,
    p: 4
  },
  textCtn: {
    width: '50%',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
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
    color: 'grey.300'
  }
}

interface Props extends ISolution {
  isActive: boolean
  page: number
  handleChangePage(page: number): void
}

const Solution = ({
  name,
  title,
  images,
  body,
  summary,
  color,
  isActive,
  page,
  handleChangePage
}: Props) => {
  const pageControls = useAnimation()

  const handleShow = () => {
    pageControls.start('animate')
  }

  const handleHide = () => {
    pageControls.start('initial')
  }

  const handleNext = () => {
    handleChangePage(page + 1)
  }

  const handlePrev = () => {
    handleChangePage(page - 1)
  }

  const handleBack = () => {
    handleChangePage(-1)
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
          <Box sx={sx.imageList}>
            {images.map((image) => (
              <Box
                sx={{
                  background: `url(${image.src}) center`,
                  backgroundSize: 'cover',
                  gridRow: image.rows,
                  gridColumn: image.cols
                }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={sx.textCtn}>
          <Box>
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
                  Sed arcu libero, gravida eu orci sed, fermentum volutpat
                  neque. Fusce quis mauris non massa commodo pharetra. Nullam
                  euismod fringilla nibh quis mattis.
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

          <SolutionButtons
            handleBack={handleBack}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Solution
