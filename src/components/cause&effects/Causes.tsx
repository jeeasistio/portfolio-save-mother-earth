import { SxProps } from '@mui/system'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Article from './Article'
import Nav from './Nav'
import Clips from './Clips'
import HowCanWeHelp from './HowCanWeHelp'
import TransitionPage from '../utilityComponents/TransitionPage'
import { causesArticles } from '../../utils/articles'

const sx: SxProps = {
  root: {
    scrollSnapType: 'y mandatory',
    height: '100vh',
    overflowY: 'scroll'
  },
  effects: {
    scrollSnapAlign: 'start',
    scrollSnapType: 'y mandatory',
    scrollBehavior: 'smooth',
    overflowY: 'scroll',
    height: '100vh'
  },
  clip: {
    position: 'sticky',
    top: 0,
    height: '100%',
    display: { xs: 'none', md: 'block' }
  },
  article: {
    height: '100%'
  },
  nav: {
    position: 'sticky',
    top: 0,
    height: '100%',
    display: { xs: 'none', md: 'block' }
  },
  whatCauses: {
    scrollSnapAlign: 'start',
    background: 'url(/images/how_can_we_help.jpg) center',
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
}

const Causes = () => {
  const [inView, setInView] = useState('save mother earth')
  const [whatInView, setWhatInView] = useState(false)

  const handleWhatInView = () => setWhatInView(true)
  const handleWhatNotInView = () => setWhatInView(false)

  const handleInView = (articleName: string) => {
    setInView(articleName)
  }

  return (
    <TransitionPage>
      <Box sx={sx.root}>
        <Grid container sx={sx.effects}>
          <Grid item sx={sx.clip} xs={4}>
            <Clips inView={inView} articles={causesArticles} />
          </Grid>
          <Grid item sx={sx.article} xs={12} md={4}>
            {causesArticles.map((art) => (
              <Article {...art} handleInView={handleInView} />
            ))}
          </Grid>
          <Grid item sx={sx.nav} xs={4}>
            <Nav inView={inView} articles={causesArticles} />
          </Grid>
        </Grid>

        <Box
          sx={sx.whatCauses}
          component={motion.div}
          onViewportEnter={handleWhatInView}
          onViewportLeave={handleWhatNotInView}
          viewport={{ margin: '-50%' }}
        >
          <AnimatePresence>{whatInView && <HowCanWeHelp />}</AnimatePresence>
        </Box>
      </Box>
    </TransitionPage>
  )
}

export default Causes
