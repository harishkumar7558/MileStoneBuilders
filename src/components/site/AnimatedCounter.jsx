import { useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/** Counts from 0 to `value` once, when it first enters the viewport. */
const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 1.8, className }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setDisplay(Math.round(easeOutExpo(progress) * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{`${prefix}${value}${suffix}`}</span>
      <span aria-hidden="true" className="tabular">{prefix}{(reduce ? value : display).toLocaleString("en-IN")}{suffix}</span>
    </span>
  )
}

export default AnimatedCounter
