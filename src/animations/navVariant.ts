import { Variants } from 'framer-motion'

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
