export const easeInTransition = (duration = 0.5) => ({
  type: 'tween',
  duration,
  ease: 'easeIn'
})

export const easeOutTransition = (duration = 0.5) => ({
  type: 'tween',
  duration,
  ease: 'easeOut'
})

export const gradientOverlay =
  'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))'

export const fullOverlay =
  'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'

export const textShadow = '0px 4px 4px #00000040'

export const textShadowHovered = '0px 8px 8px #00000040'
