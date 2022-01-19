import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import IArticle, { ChangesInView } from '../../interfaces/Article'
import { easeOutTransition } from '../../utils/designUtils'
import Bar from './Bar'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  bar: { flexGrow: 1 }
}

const activeBar: SxProps = {
  ...sx.bar,
  flex: 20
}

interface Props extends ChangesInView {
  articles: IArticle[]
}

const Nav = ({ articles, inView }: Props) => {
  return (
    <Box sx={sx.root}>
      {articles.map((art, i) => (
        <Box
          sx={inView === art.name ? activeBar : sx.bar}
          component={motion.div}
          layout
          transition={easeOutTransition()}
        >
          <Bar
            inView={inView}
            isActive={inView === art.name}
            {...art}
            index={i + 1}
          />
        </Box>
      ))}
    </Box>
  )
}

export default Nav
