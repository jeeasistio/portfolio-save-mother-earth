import { Variants } from 'framer-motion'
import { easeInTransition, easeOutTransition } from '../utils/designUtils'

export const barVar: Variants = {
  hover: {
    x: '0%',
    transition: easeOutTransition()
  },
  initial: {
    x: '-120%',
    transition: easeInTransition()
  }
}
