import { SxProps } from '@mui/system'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Article from './Article'
import Nav from './Nav'
import Clips from './Clips'
import WhatCauses from './WhatCauses'
import IArticle from '../../interfaces/Article'
import { motion, AnimatePresence } from 'framer-motion'
import TransitionPage from '../utilityComponents/TransitionPage'

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
    height: '100%'
  },
  article: {
    height: '100%'
  },
  nav: {
    position: 'sticky',
    top: 0,
    height: '100%'
  },
  whatCauses: {
    scrollSnapAlign: 'start',
    background: 'url(/images/what_are_the_causes.jpg) center',
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

const ARTICLES: IArticle[] = [
  {
    name: 'save-mother-earth',
    image: '/images/nature.jpg',
    clip: '/videos/nature.mp4',
    title: 'Save Mother Earth',
    body: '',
    summary: '',
    color: '#1D471D'
  },
  {
    name: 'ice-melting',
    image: '/images/ice_melting.jpg',
    clip: '/videos/ice_melting.mp4',
    title: 'Ice Melting',
    body: '',
    summary: '',
    color: '#4E88B2'
  },
  {
    name: 'drought',
    image: '/images/drought.jpg',
    clip: '/videos/drought.mp4',
    title: 'Drought',
    body: '',
    summary: '',
    color: '#573E2C'
  },
  {
    name: 'wildfires',
    image: '/images/wildfires.jpg',
    clip: '/videos/wildfires.mp4',
    title: 'Wildfires',
    body: '',
    summary: '',
    color: '#391717'
  },
  {
    name: 'crops-dying',
    image: '/images/crops_dying.jpg',
    clip: '/videos/crops_dying.mp4',
    title: 'Crops Dying',
    body: '',
    summary: '',
    color: '#888144'
  }
]

const Effects = () => {
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
            <Clips inView={inView} articles={ARTICLES} />
          </Grid>
          <Grid item sx={sx.article} xs={4}>
            {ARTICLES.map((art) => (
              <Article {...art} handleInView={handleInView} />
            ))}
          </Grid>
          <Grid item sx={sx.nav} xs={4}>
            <Nav inView={inView} articles={ARTICLES} />
          </Grid>
        </Grid>

        <Box
          sx={sx.whatCauses}
          component={motion.div}
          onViewportEnter={handleWhatInView}
          onViewportLeave={handleWhatNotInView}
          viewport={{ amount: 'all' }}
        >
          <AnimatePresence>{whatInView && <WhatCauses />}</AnimatePresence>
        </Box>
      </Box>
    </TransitionPage>
  )
}

export default Effects
