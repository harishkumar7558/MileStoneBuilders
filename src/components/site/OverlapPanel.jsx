import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { EASE_OUT } from "./motion"

/**
 * Elevated white panel that rises over the bottom edge of the hero above it.
 * Two offset "sheets" behind it give the stack physical depth.
 * Pair with <PageHero overlap />.
 */
const OverlapPanel = ({ children, className, label, as: Tag = "section" }) => {
  const reduce = useReducedMotion()
  return (
    <Tag aria-label={label} className="relative z-10 -mt-28 sm:-mt-32 lg:-mt-36">
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.5 }}
          className="relative"
        >
          <div aria-hidden="true" className="absolute inset-x-4 -bottom-3 top-3 rounded-3xl bg-ink-100 sm:inset-x-8" />
          <div aria-hidden="true" className="absolute inset-x-10 -bottom-6 top-6 rounded-3xl bg-ink-50 sm:inset-x-16" />
          <div className={cn("relative overflow-hidden rounded-3xl border border-ink-900/[0.06] bg-white shadow-lift", className)}>
            {children}
          </div>
        </motion.div>
      </div>
    </Tag>
  )
}

export default OverlapPanel
