import { SxProps } from '@mui/system'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import Article from './Article'
import Nav from './Nav'
import Clip from './Clip'
import IArticle from '../../interfaces/Article'

const sx: SxProps = {
  root: {
    scrollSnapType: 'y mandatory',
    height: '100vh',
    overflowY: 'scroll',
    scrollBehavior: 'smooth'
  },
  clip: {
    backgroundColor: 'rgba(102, 204, 255, 0.5)',
    position: 'sticky',
    top: 0,
    height: '100%'
  },
  article: {
    height: '100%'
  },
  nav: {
    backgroundColor: 'rgba(102, 255, 102, 0.5)',
    position: 'sticky',
    top: 0,
    height: '100%'
  }
}

const ARTICLES: IArticle[] = [
  {
    name: 'save-mother-earth',
    image: '/nature.jpg',
    clip: '/nature.mp4',
    title: 'Save Mother Earth',
    body: '',
    summary: '',
    color: '#1D471D'
  },
  {
    name: 'ice-melting',
    image: '/ice.jpg',
    clip: '/ice.mp4',
    title: 'Ice Melting',
    body: '',
    summary: '',
    color: '#4E88B2'
  },
  {
    name: 'drought',
    image: '/ground_cracked.jpg',
    clip: '/drought.mp4',
    title: 'Drought',
    body: '',
    summary: '',
    color: '#573E2C'
  },
  {
    name: 'forest-burning',
    image: '/forest_burning.jpg',
    clip: '/forest_burning.mp4',
    title: 'Forest Burning',
    body: '',
    summary: '',
    color: '#391717'
  },
  {
    name: 'crops-dying',
    image: '/crops_dying.jpg',
    clip: '/crops_dying.mp4',
    title: 'Crops Dying',
    body: '',
    summary: '',
    color: '#888144'
  }
]

const Effects = () => {
  const [inView, setInView] = useState('save mother earth')

  const handleInView = (articleName: string) => {
    setInView(articleName)
  }

  return (
    <Grid container sx={sx.root}>
      <Grid item sx={sx.clip} xs={4}>
        <Clip inView={inView} />
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
  )
}

export default Effects
