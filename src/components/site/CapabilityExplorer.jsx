import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useId, useState } from "react"
import { TextLink } from "./ActionButton"
import { EASE_OUT } from "./motion"
import CropMarks from "./CropMarks"
import { RevealGroup, RevealItem } from "./Reveal"
import TiltCard from "./TiltCard"

const pad = (n) => String(n).padStart(2, "0")

const Highlights = ({ items }) => (
  <motion.ul
    className="space-y-3"
    initial="hidden"
    animate="show"
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
  >
    {items.map((point) => (
      <motion.li
        key={point}
        variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: EASE_OUT } } }}
        className="flex gap-3 text-[15px] leading-relaxed text-ink-600"
      >
        <span className="mt-[0.6em] h-px w-4 shrink-0 bg-brand-500" />
        {point}
      </motion.li>
    ))}
  </motion.ul>
)

const Preview = ({ service, index }) => (
  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink-900 shadow-lift">
    <AnimatePresence initial={false} mode="popLayout">
      <motion.img
        key={service.id}
        src={service.img}
        alt={service.title}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 1.12, clipPath: "inset(0 0 0 100%)" }}
        animate={{ opacity: 1, scale: 1.02, clipPath: "inset(0 0 0 0%)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </AnimatePresence>
    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
    <CropMarks className="m-4" />
    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
      <div>
        <p className="t-eyebrow text-brand-300">Capability {pad(index + 1)}</p>
        <p className="mt-1.5 font-display text-lg font-semibold leading-snug sm:text-xl">{service.title}</p>
      </div>
      <service.icon className="h-6 w-6 shrink-0 text-white/70" aria-hidden="true" />
    </div>
  </div>
)

/**
 * Numbered list of capabilities with a sticky preview (desktop)
 * and inline expanding panels (mobile / tablet).
 */
const CapabilityExplorer = ({ services }) => {
  const [active, setActive] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(0)
  const baseId = useId()
  const current = services[active]

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <RevealGroup as="ol" className="lg:col-span-6" gap={0.06}>
        {services.map((service, i) => {
          const isActive = active === i
          const isOpen = mobileOpen === i
          const panelId = `${baseId}-panel-${i}`
          return (
            <RevealItem as="li" key={service.id} className="border-t border-ink-900/10 last:border-b">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => { setActive(i); setMobileOpen(isOpen ? -1 : i) }}
                className="group relative flex w-full items-center gap-5 py-6 text-left sm:gap-8 sm:py-7"
              >
                <span
                  className={cn(
                    "absolute -left-4 top-0 hidden h-full w-0.5 origin-top bg-brand-500 transition-transform duration-500 ease-out-expo lg:block",
                    isActive ? "scale-y-100" : "scale-y-0",
                  )}
                />
                <span className={cn("t-eyebrow tabular w-7 shrink-0 transition-colors", isActive ? "text-brand-600" : "text-ink-400")}>
                  {pad(i + 1)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={cn(
                    "block font-display text-lg font-semibold leading-snug tracking-[-0.015em] transition-all duration-300 ease-out-expo sm:text-[22px]",
                    isActive ? "text-ink-900 lg:translate-x-2" : "text-ink-700",
                  )}>
                    {service.title}
                  </span>
                  {service.subtitle && (
                    <span className={cn("mt-1 block text-sm text-ink-400 transition-transform duration-300 ease-out-expo", isActive && "lg:translate-x-2")}>
                      {service.subtitle}
                    </span>
                  )}
                </span>
                <span className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isActive ? "border-brand-500 bg-brand-400 text-ink-950" : "border-ink-900/15 text-ink-500",
                )}>
                  <Plus className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-45 lg:rotate-0")} aria-hidden="true" />
                </span>
              </button>

              {/* Mobile / tablet inline panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="overflow-hidden lg:hidden"
                  >
                    <div className="space-y-6 pb-8">
                      <Preview service={service} index={i} />
                      <Highlights items={service.content} />
                      <TextLink to="/contact">Discuss this service</TextLink>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </RevealItem>
          )
        })}
      </RevealGroup>

      {/* Desktop sticky preview */}
      <div className="hidden lg:col-span-6 lg:block">
        <div className="sticky top-28 space-y-8" aria-live="polite">
          <TiltCard max={3} innerClassName="rounded-2xl">
            <Preview service={current} index={active} />
          </TiltCard>
          <div className="grid grid-cols-[auto_1fr] gap-x-8">
            <p className="t-eyebrow pt-1 text-ink-400">Key<br />highlights</p>
            <div key={current.id}>
              <Highlights items={current.content} />
              <TextLink to="/contact" className="mt-8">Discuss this service</TextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CapabilityExplorer
