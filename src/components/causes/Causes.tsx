import { SxProps } from '@mui/system'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import IArticle from '../../interfaces/Article'
import { motion, AnimatePresence } from 'framer-motion'
import Article from '../effects/Article'
import Nav from '../effects/Nav'
import Clips from '../effects/Clips'
import HowCanWeHelp from './HowCanWeHelp'
import NavUtils from '../utilityComponents/Nav'

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

const ARTICLES: IArticle[] = [
  {
    name: 'fossil-fuel',
    image: '/images/fossil_fuel.jpg',
    clip: '/videos/fossil_fuel.mp4',
    title: 'Fossil Fuel',
    body: '',
    summary: '',
    color: '#3B4145'
  },
  {
    name: 'livestock-farming',
    image: '/images/livestock_farming.jpg',
    clip: '/videos/livestock_farming.mp4',
    title: 'Livestock Farming',
    body: '',
    summary: '',
    color: '#876840'
  },
  {
    name: 'deforestation',
    image: '/images/deforestation.jpg',
    clip: '/videos/deforestation.mp4',
    title: 'Deforestation',
    body: '',
    summary: '',
    color: '#3B261C'
  },
  {
    name: 'manufacturing-goods',
    image: '/images/manufacturing_goods.jpg',
    clip: '/videos/manufacturing_goods.mp4',
    title: 'Manufacturing Goods',
    body: '',
    summary: '',
    color: '#3B4145'
  }
]

const Causes = () => {
  const [inView, setInView] = useState('save mother earth')
  const [whatInView, setWhatInView] = useState(false)

  const handleWhatInView = () => setWhatInView(true)
  const handleWhatNotInView = () => setWhatInView(false)

  const handleInView = (articleName: string) => {
    setInView(articleName)
  }

  return (
    <>
      <NavUtils />
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
          <AnimatePresence>{whatInView && <HowCanWeHelp />}</AnimatePresence>
        </Box>
      </Box>
    </>
  )
}

export default Causes
