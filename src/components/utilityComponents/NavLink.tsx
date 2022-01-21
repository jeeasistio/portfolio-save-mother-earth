import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import { linksVar } from '../../animations/navVariant'
import { dividerVar } from '../../animations/saveMotherEarthVariant'

const sx: SxProps = {
  root: {
    my: 5,
    overflow: 'hidden'
  },
  link: {
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  hoverLine: {
    width: '100%',
    height: 5,
    backgroundColor: 'common.white'
  }
}

interface Props {
  link: string
}

const NavLink = ({ link }: Props) => {
  const hoverControls = useAnimation()

  const handleHover = () => {
    hoverControls.start('long')
  }

  const handleNotHover = () => {
    hoverControls.start('short')
  }

  return (
    <Link to={`/${link.toLowerCase()}`}>
      <Box
        sx={sx.root}
        component={motion.div}
        variants={linksVar}
        whileInView="animate"
        onHoverStart={handleHover}
        onHoverEnd={handleNotHover}
      >
        <Typography sx={sx.link} variant="h1">
          {link}
        </Typography>
        <Box
          sx={sx.hoverLine}
          component={motion.div}
          variants={dividerVar}
          initial="short"
          animate={hoverControls}
        />
      </Box>
    </Link>
  )
}

export default NavLink
