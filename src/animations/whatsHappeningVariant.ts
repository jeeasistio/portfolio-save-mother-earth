import { Variants } from 'framer-motion'
import { easeInTransition } from '../utils/designUtils'

export const whatsVar: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: easeInTransition(1)
  },
  hovered: {
    cursor: 'pointer'
  }
}
