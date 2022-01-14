import Box from '@mui/material/Box'
import { TypographyVariant } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import React, { useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'

interface Props {
  textProp: string
  variant: TypographyVariant
  delay: number
  containerStyle?: SxProps
  textStyle?: SxProps
}

const TransitionText = ({
  textProp,
  variant,
  delay,
  containerStyle,
  textStyle
}: Props) => {
  const initial = '\u00a0'.repeat(textProp.length)
  const [text, setText] = useState(initial)

  useEffect(() => {
    setTimeout(() => {
      setText(textProp)
    }, delay * 500)
  }, [textProp, delay])

  return (
    <Box sx={containerStyle}>
      <Typography sx={textStyle} variant={variant}>
        {text.split('').map((c, i) => (
          <TextTransition
            key={i}
            text={c}
            delay={i * 100}
            noOverflow
            inline
            springConfig={presets.slow}
          />
        ))}
      </Typography>
    </Box>
  )
}

export default TransitionText
