import { Variants } from 'framer-motion'
import { easeInTransition, easeOutTransition } from '../utils/designUtils'

export const transitionInVar: Variants = {
  initial: {
    y: '0%'
  },
  animate: {
    y: '100%',
    transition: easeInTransition(1)
  },
  exit: {
    opacity: 0,
    transition: easeOutTransition(1)
  }
}

export const transitionOutVar: Variants = {
  initial: {
    y: '-100%'
  },
  exit: {
    y: '0%',
    transition: easeOutTransition(1)
  }
}
