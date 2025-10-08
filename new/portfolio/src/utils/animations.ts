// Animation presets for @vueuse/motion
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 300,
    },
  },
}

export const slideUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 300,
    },
  },
}

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 200,
    },
  },
}

export const slideInLeft = {
  initial: {
    opacity: 0,
    x: -20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 300,
    },
  },
}

export const slideInRight = {
  initial: {
    opacity: 0,
    x: 20,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 300,
    },
  },
}

export const bounce = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
}
