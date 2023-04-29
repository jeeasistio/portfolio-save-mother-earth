import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import React from 'react'
import Box from '@mui/material/Box'

interface Props {
  expanded: string
  expand(): void
}

const ExpandButton = ({ expanded, expand }: Props) => {
  return (
    <Box component="button" color="inherit" onClick={expand}>
      {expanded === '20%' && <ExpandMore fontSize="large" />}
      {expanded === '60%' && <ExpandLess fontSize="large" />}
    </Box>
  )
}

export default ExpandButton
