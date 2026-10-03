import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { RevealItem } from "./Reveal"
import TiltCard from "./TiltCard"

const pad = (n) => String(n).padStart(2, "0")
const depth = (z) => ({ transform: `translateZ(${z}px)` })

/** Circular arrow that slides and turns on card hover. */
const ActionCue = ({ label, className }) => (
  <span className={cn("flex items-center justify-between gap-4 text-sm font-semibold text-ink-900", className)}>
    <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">{label}</span>
    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 transition-all duration-300 ease-out-expo group-hover:translate-x-1 group-hover:border-brand-400 group-hover:bg-brand-400 group-hover:text-ink-950" aria-hidden="true">
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:rotate-45" />
    </span>
  </span>
)

/**
 * Icon service card. The whole card links to the enquiry page; the icon and title sit on
 * raised 3D layers so they separate from the surface as the card tilts.
 */
export const ServiceCard = ({ icon: Icon, title, description, badge, index, to = "/contact", cta = "Enquire", className }) => (
  <RevealItem as="li" className={cn("h-full", className)}>
    <TiltCard max={6} className="h-full" innerClassName="rounded-2xl">
      <Link
        to={to}
        className="group relative flex h-full flex-col rounded-2xl border border-ink-900/[0.08] bg-white p-6 shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-ink-900/15 hover:shadow-lift sm:p-7"
        style={{ transformStyle: "preserve-3d" }}
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(110%_70%_at_100%_0%,rgb(247_169_40/0.12),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="relative flex items-start justify-between" style={depth(32)}>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-brand-300 shadow-[0_12px_24px_-12px_rgba(6,10,19,0.7)] transition-[transform,background-color,color] duration-300 ease-out-expo group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-brand-400 group-hover:text-ink-950">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="flex items-center gap-2.5">
            {badge && (
              <span className="rounded-full border border-ink-900/10 bg-ink-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-600">
                {badge}
              </span>
            )}
            {index != null && <span className="t-eyebrow tabular text-ink-300" aria-hidden="true">{pad(index + 1)}</span>}
          </span>
        </span>

        <span className="t-h3 relative mt-8 block text-ink-900" style={depth(20)}>{title}</span>
        <span className="relative mt-2 block flex-1 text-[15px] leading-relaxed text-ink-500">{description}</span>
        <ActionCue label={cta} className="relative mt-7 border-t border-ink-900/[0.08] pt-5" />
      </Link>
    </TiltCard>
  </RevealItem>
)

/**
 * Image-led service card for capability grids. `featured` spans wider and shows more detail.
 */
export const ServiceMediaCard = ({ service, index, featured = false, to = "/contact", className }) => {
  const Icon = service.icon
  const points = service.content.slice(0, featured ? 4 : 3)
  return (
    <RevealItem as="li" className={cn("h-full", className)}>
      <TiltCard max={featured ? 3.5 : 5} className="h-full" innerClassName="rounded-2xl">
        <Link
          to={to}
          className="group relative flex h-full flex-col rounded-2xl border border-ink-900/[0.08] bg-white p-2.5 shadow-soft transition-[box-shadow,border-color] duration-300 hover:border-ink-900/15 hover:shadow-lift"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className={cn("relative block overflow-hidden rounded-xl bg-ink-900", featured ? "aspect-[16/9]" : "aspect-[16/10]")}>
            <img
              src={service.img}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
            <span className="glass-dark t-eyebrow tabular absolute left-3 top-3 rounded-full px-2.5 py-1 text-white/85" aria-hidden="true">
              {pad(index + 1)}
            </span>
          </span>

          <span
            className="relative -mt-7 ml-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-400 text-ink-950 shadow-glow transition-transform duration-300 ease-out-expo group-hover:-rotate-6"
            style={depth(40)}
          >
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>

          <span className="flex flex-1 flex-col px-3.5 pb-3.5 pt-5 sm:px-4">
            <span className={cn("block font-display font-semibold leading-snug tracking-[-0.015em] text-ink-900", featured ? "text-2xl" : "text-xl")} style={depth(16)}>
              {service.title}
            </span>
            {service.subtitle && <span className="mt-1.5 block text-sm text-ink-500">{service.subtitle}</span>}
            <span className="mt-5 block flex-1 space-y-2.5">
              {points.map((point) => (
                <span key={point} className="flex gap-3 text-[14.5px] leading-snug text-ink-600">
                  <span className="mt-[0.55em] h-px w-3.5 shrink-0 bg-brand-500" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </span>
            <ActionCue label="Discuss this service" className="mt-6 border-t border-ink-900/[0.08] pt-4" />
          </span>
        </Link>
      </TiltCard>
    </RevealItem>
  )
}
