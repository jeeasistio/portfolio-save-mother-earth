import { Variants } from 'framer-motion'
import {
  easeInTransition,
  easeOutTransition,
  fullOverlay,
  gradientOverlay
} from '../utils/designUtils'

export const backgroundVar: Variants = {
  changeBg: {
    background: fullOverlay,
    transition: easeOutTransition()
  },
  gradientBg: {
    background: gradientOverlay
  }
}

export const buttonVar: Variants = {
  fadeUp: {
    y: '10%',
    opacity: 0,
    transition: easeOutTransition()
  }
}

export const dividerVar: Variants = {
  short: {
    width: '50%',
    transition: easeInTransition()
  },
  long: {
    width: '100%',
    transition: easeOutTransition()
  },
  exit: {
    y: '-50%',
    opacity: '0'
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
    transition: easeOutTransition()
  }
}
