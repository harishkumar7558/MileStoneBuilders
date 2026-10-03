import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Reveal, SplitReveal } from "./Reveal"
import TechnicalBackdrop from "./TechnicalBackdrop"

/**
 * Closing call-to-action: an elevated dark panel that settles into place as it scrolls in
 * (a slight perspective tilt flattening out).
 */
const CTASection = ({ eyebrow = "Start a project", title, lead, actions, footnote }) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 35%"] })
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])

  return (
    <section ref={ref} className="perspective-far bg-white py-16 sm:py-24">
      <div className="container">
        <motion.div
          style={reduce ? undefined : { rotateX, scale, transformOrigin: "50% 100%" }}
          className="relative isolate overflow-hidden rounded-3xl bg-ink-950 px-6 py-16 text-center text-white shadow-float sm:px-12 sm:py-24"
        >
          <div className="glow-brand absolute inset-0 -z-10" aria-hidden="true" />
          <TechnicalBackdrop tone="dark" flow={false} />
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-400/70 to-transparent" aria-hidden="true" />

          <div className="relative">
            <Reveal className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-brand-400" />
              <span className="t-eyebrow text-brand-300">{eyebrow}</span>
              <span className="h-px w-10 bg-brand-400" />
            </Reveal>
            <SplitReveal as="h2" text={title} className="t-h1 mx-auto mt-6 max-w-4xl" />
            {lead && (
              <Reveal delay={0.15}>
                <p className="t-lead mx-auto mt-6 max-w-2xl text-white/65">{lead}</p>
              </Reveal>
            )}
            {actions && (
              <Reveal delay={0.25} className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                {actions}
              </Reveal>
            )}
            {footnote && (
              <Reveal delay={0.35}>
                <p className="t-eyebrow mt-10 text-white/45">{footnote}</p>
              </Reveal>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
