import { motion, useReducedMotion } from "framer-motion"
import { DURATION, EASE_OUT, VIEWPORT, fadeUp, stagger } from "./motion"

/** Fades and lifts content into place when it scrolls into view. */
export const Reveal = ({ as = "div", children, delay = 0, y = 28, x = 0, className, amount = VIEWPORT.amount, ...rest }) => {
  const Component = motion[as]
  return (
    <Component
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: DURATION.section, ease: EASE_OUT, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

/** Parent that staggers its <RevealItem> children. */
export const RevealGroup = ({ as = "div", children, className, gap = 0.08, delay = 0, amount = 0.15, ...rest }) => {
  const Component = motion[as]
  return (
    <Component
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  )
}

export const RevealItem = ({ as = "div", children, className, variants = fadeUp, ...rest }) => {
  const Component = motion[as]
  return (
    <Component variants={variants} className={className} {...rest}>
      {children}
    </Component>
  )
}

/**
 * Masked word-by-word headline reveal. Screen readers get the plain text once.
 * `trigger="mount"` animates immediately (heroes); default animates in view.
 */
export const SplitReveal = ({ text, as = "span", className, wordClassName, delay = 0, trigger = "view", gap = 0.06 }) => {
  const reduce = useReducedMotion()
  const Component = motion[as]
  const lines = Array.isArray(text) ? text : [text]
  const animateProps = trigger === "mount"
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } }

  return (
    <Component
      className={className}
      aria-label={lines.map((l) => (typeof l === "string" ? l : l.text)).join(" ")}
      variants={stagger(gap, delay)}
      {...animateProps}
    >
      {lines.map((line, lineIdx) => {
        const lineText = typeof line === "string" ? line : line.text
        const lineClass = typeof line === "string" ? "" : line.className
        return (
          <span key={lineIdx} className={`block ${lineClass ?? ""}`} aria-hidden="true">
            {lineText.split(" ").map((word, wordIdx) => {
              return (
                <span key={`${lineIdx}-${wordIdx}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                  <motion.span
                    className={`inline-block ${wordClassName ?? ""}`}
                    variants={{
                      hidden: reduce ? { opacity: 0 } : { y: "105%" },
                      show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
                    }}
                  >
                    {word}
                  </motion.span>
                  <span className="inline-block">&nbsp;</span>
                </span>
              )
            })}
          </span>
        )
      })}
    </Component>
  )
}

/** A hairline that draws itself from left to right. */
export const DrawLine = ({ className = "", delay = 0, origin = "left" }) => (
  <motion.span
    aria-hidden="true"
    className={`block h-px ${className}`}
    style={{ transformOrigin: origin }}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 1.1, ease: EASE_OUT, delay }}
  />
)
