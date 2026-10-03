import { useInView } from "framer-motion"
import { useRef } from "react"

/**
 * Tracks whether an element is on screen (not once) so continuous CSS animations
 * can be paused while off-screen.
 */
export const useInViewport = (margin = "120px") => {
  const ref = useRef(null)
  const inView = useInView(ref, { margin })
  return [ref, inView]
}

export const PAUSED = "[&_*]:[animation-play-state:paused]"
