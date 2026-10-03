import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, MapPin } from "lucide-react"
import AnimatedCounter from "./AnimatedCounter"
import { EASE_OUT } from "./motion"
import { RevealGroup, RevealItem } from "./Reveal"
import TiltCard from "./TiltCard"

// Bento placement per tile size (12-column grid on large screens).
const SPAN = {
  feature: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
  wide: "sm:col-span-2 lg:col-span-8",
  stat: "lg:col-span-5",
  info: "lg:col-span-4",
}

// Line-art schematics drawn on scroll. Paths share a 200×90 box.
const SCHEMATICS = {
  bridge: [
    "M0 58H200",
    "M12 58Q56 12 100 58Q144 12 188 58",
    "M12 58V88M100 58V88M188 58V88",
    "M34 40V58M56 35V58M78 40V58M122 40V58M144 35V58M166 40V58",
  ],
  tower: [
    "M84 88L96 10M116 88L104 10",
    "M86 76L114 62M114 76L86 62M89 58L111 44M111 58L89 44M92 40L108 28M108 40L92 28",
    "M100 10V2M92 18h16M88 30h24",
    "M70 88H130",
    "M126 22a14 14 0 0 1 0 18M132 16a22 22 0 0 1 0 30M74 22a14 14 0 0 0 0 18M68 16a22 22 0 0 0 0 30",
  ],
}

const Schematic = ({ type, className }) => {
  const reduce = useReducedMotion()
  return (
    <svg viewBox="0 0 200 90" fill="none" className={className} aria-hidden="true">
      {SCHEMATICS[type].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 + i * 0.15 }}
        />
      ))}
    </svg>
  )
}

const Location = ({ children, className }) =>
  children ? (
    <p className={cn("flex items-center gap-1.5 text-[13px]", className)}>
      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      {children}
    </p>
  ) : null

const Category = ({ children, dark = true }) => (
  <span className={cn(
    "inline-flex rounded-full px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em]",
    dark ? "glass-dark text-white/90" : "border border-ink-900/10 bg-ink-50 text-ink-600",
  )}>
    {children}
  </span>
)

/** Photo tile: zooms on hover; the description is revealed on hover for fine pointers, always shown on touch. */
const ImageTile = ({ project }) => {
  const feature = project.size === "feature"
  const tile = (
    <article className="group relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-2xl bg-ink-900 p-5 text-white shadow-soft sm:p-7 lg:min-h-0">
      <img
        src={project.img}
        alt={project.imgAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/10" />
      <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/20" />

      <div className="relative flex items-start justify-between gap-4">
        <Category>{project.category}</Category>
        <span className="glass-dark flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:bg-brand-400 group-hover:text-ink-950" aria-hidden="true">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="relative">
        <h3 className={cn("font-display font-semibold leading-tight tracking-[-0.02em]", feature ? "text-[clamp(1.5rem,2.6vw,2.25rem)]" : "text-xl sm:text-2xl")}>
          {project.title}
        </h3>
        <Location className="mt-2 text-white/70">{project.location}</Location>
        {project.description && (
          <div className="grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-hover:opacity-100">
            <p className="overflow-hidden text-[15px] leading-relaxed text-white/75">
              <span className="block pt-3">{project.description}</span>
            </p>
          </div>
        )}
      </div>
    </article>
  )
  return feature ? <TiltCard max={3} className="h-full" innerClassName="rounded-2xl">{tile}</TiltCard> : tile
}

/** Figure tile: dark, animated counter with a schematic that draws itself. */
const StatTile = ({ project }) => (
  <article className="group relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-2xl bg-ink-950 p-6 text-white shadow-soft sm:p-7">
    <div className="absolute inset-0 bg-grid-dark opacity-50 mask-fade-edges" aria-hidden="true" />
    <Schematic
      type={project.schematic}
      className="absolute right-5 top-5 w-[46%] max-w-[13rem] text-brand-400/50 transition-colors duration-500 group-hover:text-brand-300/80"
    />
    <div className="relative flex items-center justify-between">
      <Category>{project.category}</Category>
    </div>
    <div className="relative">
      <p className="font-display text-[clamp(2.75rem,5vw,4rem)] font-bold leading-none tracking-[-0.04em] text-brand-300">
        <AnimatedCounter value={project.value} suffix={project.suffix} />
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold tracking-[-0.01em]">{project.title}</h3>
      <Location className="mt-1 text-white/55">{project.location}</Location>
    </div>
  </article>
)

/** Icon tile for engagements without imagery. */
const InfoTile = ({ project }) => {
  const Icon = project.icon
  return (
    <article className="group relative flex h-full min-h-[13rem] flex-col justify-between overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out-expo hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lift sm:p-7">
      <span aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-100" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-300 transition-transform duration-300 ease-out-expo group-hover:-rotate-6">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <Category dark={false}>{project.category}</Category>
      </div>
      <div className="relative mt-8">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.01em] text-ink-900 sm:text-xl">{project.title}</h3>
        <Location className="mt-2 text-ink-500">{project.location}</Location>
      </div>
    </article>
  )
}

const TILES = { image: ImageTile, stat: StatTile, info: InfoTile }

/** Asymmetric bento grid of engagements. */
const ProjectShowcase = ({ projects, className }) => (
  <RevealGroup
    as="ul"
    gap={0.07}
    className={cn("grid grid-flow-dense gap-4 sm:grid-cols-2 lg:auto-rows-[13.5rem] lg:grid-cols-12 lg:gap-5", className)}
  >
    {projects.map((project) => {
      const Tile = TILES[project.kind]
      const span = project.kind === "image" ? SPAN[project.size] : SPAN[project.kind]
      return (
        <RevealItem as="li" key={project.id} className={span}>
          <Tile project={project} />
        </RevealItem>
      )
    })}
  </RevealGroup>
)

export default ProjectShowcase
