import { Variants } from 'framer-motion'
import { easeOutTransition, easeInTransition } from '../utils/designUtils'

export const hoverVar: Variants = {
  hide: {
    y: '100%',
    transition: easeInTransition()
  },
  show: {
    y: '-33%',
    transition: easeOutTransition()
  }
}
