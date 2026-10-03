import { cn } from "@/lib/utils"
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"
import { RevealGroup, RevealItem } from "./Reveal"

/** Numbered process whose connecting line draws as the section scrolls through. */
const ProcessTimeline = ({ steps, dark = false }) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <div ref={ref} className="relative">
      {/* Track + progress (horizontal ≥ md, vertical below) */}
      <div className={cn("absolute left-[15px] top-2 bottom-2 w-px md:left-0 md:right-0 md:top-[15px] md:bottom-auto md:h-px md:w-auto", dark ? "bg-white/10" : "bg-ink-900/10")} />
      <motion.div
        className="absolute left-[15px] top-2 bottom-2 w-px origin-top bg-brand-500 md:hidden"
        style={{ scaleY: reduce ? 1 : progress }}
      />
      <motion.div
        className="absolute left-0 right-0 top-[15px] hidden h-px origin-left bg-brand-500 md:block"
        style={{ scaleX: reduce ? 1 : progress }}
      />

      <RevealGroup as="ol" className="relative grid gap-10 md:grid-cols-4 md:gap-8" gap={0.12}>
        {steps.map((step, i) => (
          <RevealItem as="li" key={step.title} className="relative pl-12 md:pl-0 md:pt-14">
            <span className={cn(
              "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[11px] tabular",
              dark ? "border-brand-400/60 bg-ink-950 text-brand-300" : "border-brand-500/50 bg-white text-brand-700",
            )}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={cn("t-h3", dark ? "text-white" : "text-ink-900")}>{step.title}</h3>
            <p className={cn("mt-3 text-[15px] leading-relaxed", dark ? "text-white/60" : "text-ink-500")}>{step.desc}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}

export default ProcessTimeline
