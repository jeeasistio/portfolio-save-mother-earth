import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const ClickAnywhere = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
    >
      <Typography>Click anywhere to learn more</Typography>
    </Box>
  )
}

export default ClickAnywhere
