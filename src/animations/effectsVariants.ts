import { Variants } from 'framer-motion'

export const articleVar: Variants = {
  animate: (expanded) => ({
    y: expanded,
    transition: {
      type: 'spring',
      bounce: 0,
      damping: 18,
      stiffness: 100
    }
  })
}
