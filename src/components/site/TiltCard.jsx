import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { SPRING_SOFT } from "./motion"

/**
 * Perspective tilt that follows a fine pointer.
 * Transform-only and driven by motion values, so pointer moves never re-render React.
 * Inert for touch input and for reduced-motion users.
 * Descendants can opt into depth with `style={{ transform: "translateZ(24px)" }}`
 * (their direct parent needs `preserve-3d` too).
 */
const TiltCard = ({ children, className, innerClassName, max = 7, glare = false }) => {
  const reduce = useReducedMotion()
  const rx = useSpring(0, SPRING_SOFT)
  const ry = useSpring(0, SPRING_SOFT)
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)
  const glareBg = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgb(255 255 255 / 0.18), transparent 45%)`

  // Measured on the untransformed wrapper so the rotation never feeds back into the maths.
  const handleMove = (e) => {
    if (reduce || e.pointerType !== "mouse") return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * max * 2)
    rx.set((0.5 - py) * max * 2)
    gx.set(px * 100)
    gy.set(py * 100)
  }
  const reset = () => { rx.set(0); ry.set(0) }

  return (
    <div className={cn("perspective", className)} onPointerMove={handleMove} onPointerLeave={reset}>
      <motion.div
        style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className={cn("group/tilt relative h-full", innerClassName)}
      >
        {children}
        {glare && !reduce && (
          <motion.span
            aria-hidden="true"
            style={{ background: glareBg }}
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          />
        )}
      </motion.div>
    </div>
  )
}

export default TiltCard
