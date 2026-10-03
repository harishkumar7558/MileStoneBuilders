import { cn } from "@/lib/utils"
import { motion, useReducedMotion, useTransform } from "framer-motion"
import CropMarks from "./CropMarks"
import { EASE_OUT } from "./motion"
import { PAUSED, useInViewport } from "./useInViewport"

// Resting orientation of the stage, in degrees.
const REST = { rotateX: 6, rotateY: -12 }

/**
 * Layered 3D hero composition: a framed image plane with panels floating at different depths.
 * `pointer` = { x, y } motion values in [-0.5, 0.5], supplied by the hero so the whole section drives the tilt.
 * Opacity is only ever animated on leaf layers — fading a preserve-3d ancestor would flatten the scene.
 */
const HeroStage = ({ image, imageAlt = "", imagePosition = "center", panels = [], pointer, caption, className }) => {
  const reduce = useReducedMotion()
  const [ref, inView] = useInViewport()
  const rotateY = useTransform(pointer.x, (v) => REST.rotateY + v * 14)
  const rotateX = useTransform(pointer.y, (v) => REST.rotateX - v * 10)
  const imgX = useTransform(pointer.x, (v) => v * -24)
  const imgY = useTransform(pointer.y, (v) => v * -16)

  return (
    <div ref={ref} className={cn("perspective-far relative", !inView && PAUSED, className)}>
      {/* Entrance: swings in from a steeper angle. */}
      <motion.div
        initial={reduce ? false : { rotateY: -30, rotateX: 14, y: 40 }}
        animate={{ rotateY: 0, rotateX: 0, y: 0 }}
        transition={{ duration: 1.3, ease: EASE_OUT, delay: 0.15 }}
        className="preserve-3d"
      >
        <motion.div
          style={reduce ? REST : { rotateX, rotateY }}
          className="preserve-3d relative mx-auto aspect-[5/4] w-full max-w-[36rem]"
        >
          {/* Offset back plate for parallax depth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl border border-brand-300/20 bg-brand-400/[0.05]"
            style={{ transform: "translate3d(28px, 28px, -90px)" }}
          />

          {/* Image plane */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-float"
          >
            <motion.img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              decoding="async"
              style={reduce ? { objectPosition: imagePosition } : { x: imgX, y: imgY, scale: 1.1, objectPosition: imagePosition }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/5 to-ink-950/20" />
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-brand-400/10 to-transparent motion-safe:animate-scan" />
            <CropMarks className="m-4" />
            {caption && (
              <p className="t-eyebrow absolute bottom-4 left-5 right-5 text-white/65">{caption}</p>
            )}
          </motion.div>

          {/* Floating panels */}
          {panels.map((panel, i) => (
            <div
              key={i}
              className={cn("absolute", panel.className)}
              style={{ transform: `translateZ(${panel.depth ?? 60}px)` }}
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.75 + i * 0.14 }}
              >
                <div className="motion-safe:animate-float" style={{ animationDelay: `${-i * 1.7}s` }}>
                  {panel.content}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroStage
