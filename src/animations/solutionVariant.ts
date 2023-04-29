import { Variants } from 'framer-motion'
import { easeOutTransition, easeInTransition } from '../utils/designUtils'

export const hoverVar: Variants = {
  hide: {
    y: '100%',
    transition: easeInTransition()
  },
  show: {
    y: '0%',
    transition: easeOutTransition()
  }
}

export const pageVar: Variants = {
  initial: {
    y: '100%',
    transition: {
      ...easeInTransition(),
      staggerChildren: 0.1,
      when: 'afterChildren'
    }
  },
  animate: {
    y: '0%',
    transition: {
      ...easeOutTransition(),
      staggerChildren: 0.1,
      when: 'beforeChildren'
    }
  }
}

export const childrenVar: Variants = {
  initial: {
    y: '200%',
    transition: easeInTransition()
  },
  animate: {
    y: '0%',
    transition: easeOutTransition()
  }
}
