import { Variants } from 'framer-motion'
import { easeInTransition, textShadowHovered } from '../utils/designUtils'

export const whatsVar: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: easeInTransition()
  },
  hover: {
    y: -5,
    textShadow: textShadowHovered
  }
}
