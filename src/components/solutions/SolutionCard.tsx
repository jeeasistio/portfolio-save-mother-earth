import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import { hoverVar } from '../../animations/solutionVariant'
import { textShadow } from '../../utils/designUtils'

const sx: SxProps = {
  root: {
    width: '100%',
    height: { xs: '25vh', md: '50vh' },
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    outline: 'inherit',
    cursor: 'pointer',
    textAlign: 'left'
  },
  hoverOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: { xs: 'none', md: 'flex' },
    alignItems: 'flex-end'
  },
  hoverCtn: {
    p: 4
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))',
    display: 'flex',
    alignItems: 'flex-end',
    p: { xs: 1, sm: 2, md: 4 }
  },
  summary: {
    color: 'grey.300'
  },
  text: {
    textShadow: textShadow
  }
}

interface Props {
  name: string
  image: string
  title: string
  color: string
  summary: string
  index: number
  handleActive(name: string): void
}

const SolutionCard = ({
  name,
  image,
  title,
  color,
  summary,
  index,
  handleActive
}: Props) => {
  const hoverControls = useAnimation()

  const handleHover = () => {
    hoverControls.start('show')
  }

  const handleNotHover = () => {
    hoverControls.start('hide')
  }

  const handleClick = () => {
    handleActive(name)
  }

  return (
    <Box
      sx={{
        ...sx.root,
        background: `url(${image}) center`,
        backgroundSize: 'cover'
      }}
      component={motion.button}
      onHoverStart={handleHover}
      onHoverEnd={handleNotHover}
      onClick={handleClick}
    >
      <Box sx={sx.imageOverlay}>
        <Typography sx={sx.text} variant="h5">
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          ...sx.hoverOverlay,
          backgroundColor: color
        }}
        component={motion.div}
        variants={hoverVar}
        animate={hoverControls}
        initial="hide"
      >
        <Box sx={sx.hoverCtn}>
          <Typography variant="h2" fontWeight="bold">
            {`${index}`.padStart(2, '0')}
          </Typography>
          <Typography variant="h4" paragraph>
            {title}
          </Typography>
          <Typography sx={sx.summary}>{summary}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default SolutionCard
