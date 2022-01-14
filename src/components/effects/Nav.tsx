import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import React from 'react'
import IArticle from '../../interfaces/Article'
import Bar from './Bar'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  bar: { flexGrow: 1 }
}

const activeBar: SxProps = {
  ...sx.bar,
  flex: 20
}

interface Props {
  articles: IArticle[]
}

const Nav = ({ articles }: Props) => {
  return (
    <Box sx={sx.root} component={motion.div}>
      {articles.map((art, i) => (
        <Box sx={i + 1 === 1 ? activeBar : sx.bar}>
          <Bar isActive={i + 1 === 1} {...art} index={i + 1} />
        </Box>
      ))}
    </Box>
  )
}

export default Nav
