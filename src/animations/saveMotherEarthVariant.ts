import { Variants } from 'framer-motion'
import { easeInTransition, easeOutTransition } from '../utils/designUtils'

export const dividerVar: Variants = {
  short: {
    width: '50%',
    transition: easeInTransition
  },
  long: {
    width: '100%',
    transition: easeOutTransition
  }
}

export const readVar: Variants = {
  hidden: {
    opacity: 0,
    y: '10%'
  },
  show: {
    opacity: 1,
    y: '0%',
    transition: easeOutTransition
  }
}
