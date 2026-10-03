import { cn } from "@/lib/utils"
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import HeroStage from "./HeroStage"
import { EASE_OUT, SPRING_STAGE } from "./motion"
import { SplitReveal } from "./Reveal"
import TechnicalBackdrop from "./TechnicalBackdrop"

const enter = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_OUT, delay },
})

const HeroEyebrow = ({ children }) => (
  <motion.p
    {...enter(0.1)}
    className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4"
  >
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-400/15" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
    </span>
    <span className="t-eyebrow text-white/75">{children}</span>
  </motion.p>
)

/** Credibility line under the CTAs: a label and a short list of names or capabilities. */
const TrustRow = ({ label, items }) => (
  <motion.div {...enter(0.95)} className="mt-12 border-t border-white/10 pt-6">
    <p className="t-eyebrow text-white/40">{label}</p>
    <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-5 font-display text-[15px] font-semibold tracking-[-0.01em] text-white/75">
          {i > 0 && <span className="h-1 w-1 rotate-45 bg-brand-400/70" aria-hidden="true" />}
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

/**
 * Dark hero shared by every page.
 * layout="stage": copy beside a pointer-driven 3D composition (division landing pages).
 * layout="full":  full-bleed image behind the copy (About, Contact).
 * `overlap` leaves room for an <OverlapPanel> that rises over the hero's bottom edge.
 */
const PageHero = ({
  eyebrow, title, lead, actions, image, imageAlt = "", imagePosition = "center",
  layout = "stage", panels = [], caption, trust, compact = false, overlap = false,
}) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const stageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])

  // Normalised pointer position in [-0.5, 0.5]; fine pointers only.
  const pointer = {
    x: useSpring(useMotionValue(0), SPRING_STAGE),
    y: useSpring(useMotionValue(0), SPRING_STAGE),
  }
  const handlePointer = (e) => {
    if (reduce || e.pointerType !== "mouse") return
    const rect = e.currentTarget.getBoundingClientRect()
    pointer.x.set((e.clientX - rect.left) / rect.width - 0.5)
    pointer.y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const fullImgX = useTransform(pointer.x, (v) => v * -18)
  const fullImgY = useTransform(pointer.y, (v) => v * -12)

  const stage = layout === "stage"

  const copy = (
    <motion.div style={reduce ? undefined : { y: contentY, opacity: contentOpacity }} className={cn(!stage && "max-w-3xl")}>
      {eyebrow && <HeroEyebrow>{eyebrow}</HeroEyebrow>}
      <SplitReveal
        as="h1"
        trigger="mount"
        delay={0.2}
        text={title}
        className={cn("mt-7 text-white", stage ? "t-display" : "t-h1 !text-[clamp(2.5rem,5.4vw,4.75rem)]")}
      />
      {lead && (
        <motion.p {...enter(0.6)} className="t-lead mt-7 max-w-xl text-white/70">
          {lead}
        </motion.p>
      )}
      {actions && (
        <motion.div {...enter(0.75)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {actions}
        </motion.div>
      )}
      {trust && <TrustRow {...trust} />}
    </motion.div>
  )

  return (
    <section
      ref={ref}
      onPointerMove={handlePointer}
      className={cn(
        "relative isolate flex overflow-hidden bg-ink-950 text-white",
        compact ? "min-h-[72svh]" : "min-h-[100svh]",
      )}
    >
      {/* Background */}
      {!stage && image && (
        <motion.div className="absolute inset-0 -z-10" style={reduce ? undefined : { y: imageY }} aria-hidden="true">
          <motion.img
            src={image}
            alt=""
            fetchPriority="high"
            decoding="async"
            initial={reduce ? false : { scale: 1.14, opacity: 0 }}
            animate={{ scale: 1.06, opacity: 1 }}
            transition={{ duration: 1.6, ease: EASE_OUT }}
            style={reduce ? { objectPosition: imagePosition } : { x: fullImgX, y: fullImgY, objectPosition: imagePosition }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        </motion.div>
      )}
      <div className="glow-brand absolute inset-0 -z-10" aria-hidden="true" />
      <TechnicalBackdrop tone="dark" flow={stage} className={stage ? "opacity-80" : "opacity-60"} />

      <div
        className={cn(
          "container relative z-10 flex flex-col justify-center pt-32 sm:pt-36",
          overlap ? "pb-44 lg:pb-52" : compact ? "pb-20" : "pb-24",
        )}
      >
        {stage ? (
          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 xl:gap-14">
            {copy}
            <motion.div style={reduce ? undefined : { y: stageY }} className="px-3 sm:px-8 lg:px-0">
              <HeroStage
                image={image}
                imageAlt={imageAlt}
                imagePosition={imagePosition}
                panels={panels}
                pointer={pointer}
                caption={caption}
              />
            </motion.div>
          </div>
        ) : (
          copy
        )}
      </div>
    </section>
  )
}

export default PageHero
