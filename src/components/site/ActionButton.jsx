import { cn } from "@/lib/utils"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { forwardRef, useRef } from "react"
import { Link } from "react-router-dom"

const VARIANTS = {
  primary: "bg-brand-400 text-ink-950 hover:bg-brand-300 shadow-[0_8px_24px_-12px_rgba(235,145,16,0.8)]",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
  light: "bg-white text-ink-900 hover:bg-ink-50",
  "outline-light": "text-white ring-1 ring-inset ring-white/30 hover:ring-white/70 hover:bg-white/[0.06]",
  outline: "text-ink-900 ring-1 ring-inset ring-ink-900/20 hover:ring-ink-900/60 hover:bg-ink-900/[0.03]",
}

const SIZES = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px] sm:h-14 sm:px-7",
}

/** Arrow that swaps → for ↗ on hover. */
export const SwapArrow = ({ className }) => (
  <span className={cn("relative inline-flex h-4 w-4 overflow-hidden", className)} aria-hidden="true">
    <ArrowRight className="absolute inset-0 h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-4 group-hover:-translate-y-4" />
    <ArrowUpRight className="absolute inset-0 h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0" />
  </span>
)

/**
 * Primary call-to-action. Renders a router <Link> (to), an <a> (href) or a <button>.
 * `magnetic` adds a subtle pointer-follow on fine-pointer devices.
 */
const ActionButton = forwardRef(({
  to, href, children, variant = "primary", size = "lg", icon = "arrow", magnetic = false, className, ...rest
}, forwardedRef) => {
  const reduce = useReducedMotion()
  const localRef = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18, mass: 0.4 })
  const enableMagnet = magnetic && !reduce

  const handleMove = (e) => {
    if (!enableMagnet || e.pointerType !== "mouse") return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }
  const reset = () => { x.set(0); y.set(0) }

  const classes = cn(
    "group relative inline-flex select-none items-center justify-center gap-2.5 rounded-lg font-semibold tracking-[-0.005em]",
    "transition-[background-color,box-shadow,color] duration-200 active:scale-[0.98]",
    "focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    VARIANTS[variant],
    SIZES[size],
    className,
  )

  const content = (
    <>
      {typeof icon !== "string" && icon}
      <span>{children}</span>
      {icon === "arrow" && <SwapArrow />}
    </>
  )

  const motionProps = {
    ref: forwardedRef ?? localRef,
    className: classes,
    style: enableMagnet ? { x, y } : undefined,
    onPointerMove: handleMove,
    onPointerLeave: reset,
    ...rest,
  }

  if (to) return <MotionLink to={to} {...motionProps}>{content}</MotionLink>
  if (href) {
    const external = href.startsWith("http")
    return (
      <motion.a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...motionProps}>
        {content}
      </motion.a>
    )
  }
  return <motion.button type="button" {...motionProps}>{content}</motion.button>
})
ActionButton.displayName = "ActionButton"

const MotionLink = motion.create(Link)

/** Understated inline link with an expanding underline. */
export const TextLink = ({ to, href, children, className, dark = false, ...rest }) => {
  const classes = cn(
    "group inline-flex items-center gap-2 text-sm font-semibold",
    dark ? "text-white" : "text-ink-900",
    className,
  )
  const inner = (
    <>
      <span className="relative">
        {children}
        <span className={cn("absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out-expo group-hover:scale-x-100", dark ? "bg-brand-300" : "bg-brand-500")} />
      </span>
      <SwapArrow className={dark ? "text-brand-300" : "text-brand-600"} />
    </>
  )
  if (to) return <Link to={to} className={classes} {...rest}>{inner}</Link>
  return <a href={href} className={classes} {...rest}>{inner}</a>
}

export default ActionButton
