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

export const activeBarVar: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.4 } }
}

export const textVar: Variants = {
  initial: {
    y: '20%',
    opacity: 0
  },
  animate: {
    y: '0%',
    opacity: 1,
    transition: easeOutTransition()
  }
}

export const imageVar: Variants = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 0,
    transition: { ...easeOutTransition(), delay: 0.4 }
  }
}
