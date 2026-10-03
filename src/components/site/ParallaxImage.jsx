import { cn } from "@/lib/utils"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { EASE_OUT } from "./motion"

/**
 * Image that reveals with a clip mask and drifts on scroll.
 * Parallax distance is small by design; disabled for reduced motion.
 */
const ParallaxImage = ({ src, alt, className, imgClassName, strength = 8, reveal = true, radius = 24, overlay, priority = false, children }) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial={reveal && !reduce ? { clipPath: `inset(12% 12% 12% 12% round ${radius}px)` } : false}
      whileInView={{ clipPath: `inset(0% 0% 0% 0% round ${radius}px)` }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.2, ease: EASE_OUT }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={reduce ? undefined : { y, scale: 1 + (strength * 2.2) / 100 }}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      {overlay && <div className={cn("absolute inset-0", overlay)} />}
      {children}
    </motion.div>
  )
}

export default ParallaxImage
