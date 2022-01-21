import { Variants } from 'framer-motion'
import { easeInTransition, easeOutTransition } from '../utils/designUtils'

export const buttonVar: Variants = {
  initial: {
    rotateZ: 0,
    y: 0
  },
  animate: (i) => ({
    rotateZ: i === 0 ? 45 : -45,
    y: i === 0 ? '145%' : '-145%'
  })
}

export const navPageVar: Variants = {
  initial: {
    y: '-100%',
    transition: easeInTransition()
  },
  animate: {
    y: '0%',
    transition: { ...easeOutTransition(), when: 'beforeChildren' }
  }
}

export const linksVar: Variants = {
  initial: {
    x: '-100%',
    transition: easeOutTransition()
  },
  animate: {
    x: '0%',
    transition: easeOutTransition(0.8)
  }
}
