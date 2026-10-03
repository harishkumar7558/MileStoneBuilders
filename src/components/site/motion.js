// Shared motion tokens. Micro: 150–250ms · UI: 250–400ms · Sections: 500–800ms.
export const EASE_OUT = [0.22, 1, 0.36, 1]
export const EASE_IN_OUT = [0.65, 0, 0.35, 1]

export const DURATION = {
  micro: 0.2,
  ui: 0.35,
  section: 0.7,
}

// Springs for pointer-driven 3D (tilt, hero stage). Soft enough to feel physical, damped to avoid wobble.
export const SPRING_SOFT = { stiffness: 150, damping: 18, mass: 0.6 }
export const SPRING_STAGE = { stiffness: 60, damping: 20 }

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.section, ease: EASE_OUT } },
}

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

export const VIEWPORT = { once: true, amount: 0.2 }
