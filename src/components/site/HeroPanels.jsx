import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { EASE_OUT } from "./motion"

// Floating panels placed at depth inside <HeroStage>. Purely presentational.
// Near-opaque rather than backdrop-blurred: these layers animate continuously, and re-blurring
// the backdrop every frame is the expensive part of "glass".
const panelBase = "panel-dark rounded-2xl text-white shadow-float"

/** Icon + short statement. */
export const ChipPanel = ({ icon: Icon, children, live = false, className }) => (
  <div className={cn(panelBase, "flex items-center gap-3 rounded-xl py-2.5 pl-2.5 pr-4", className)}>
    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-400 text-ink-950">
      {Icon && <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />}
      {live && <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-ink-900" />}
    </span>
    <span className="whitespace-nowrap text-[13px] font-semibold tracking-[-0.005em]">{children}</span>
  </div>
)

/** Titled list of short technical tags. */
export const ListPanel = ({ title, items, className }) => (
  <div className={cn(panelBase, "w-52 p-4 sm:w-56", className)}>
    <p className="t-eyebrow text-white/50">{title}</p>
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/85">
          {item}
        </li>
      ))}
    </ul>
  </div>
)

// Illustrative strata — heights are visual weights, not scaled depths.
const STRATA = [
  { label: "Topsoil", depth: "1.5 m", h: 16, fill: "#824311" },
  { label: "Silty clay", depth: "6 m", h: 24, fill: "#A0540C" },
  { label: "Dense sand", depth: "15 m", h: 30, fill: "#EB9110", texture: "radial-gradient(rgb(11 18 32 / 0.25) 1px, transparent 1.2px) 0 0 / 5px 5px" },
  { label: "Weathered rock", depth: "30 m", h: 34, fill: "#4B5873", texture: "repeating-linear-gradient(135deg, rgb(255 255 255 / 0.14) 0 1px, transparent 1px 6px)" },
  { label: "Hard rock", depth: "60 m", h: 40, fill: "#222D45", texture: "repeating-linear-gradient(45deg, rgb(255 255 255 / 0.12) 0 1px, transparent 1px 5px), repeating-linear-gradient(135deg, rgb(255 255 255 / 0.12) 0 1px, transparent 1px 5px)" },
]

/** Borehole log card — the strata column builds downward on load. */
export const BoreholePanel = ({ className, delay = 1 }) => (
  <div className={cn(panelBase, "w-56 p-4 sm:w-60", className)}>
    <div className="flex items-center justify-between">
      <p className="t-eyebrow text-white/55">Borehole log</p>
      <span className="rounded-full bg-brand-400/15 px-2 py-0.5 font-mono text-[10px] text-brand-300">0–60 m</span>
    </div>
    <div className="mt-3 flex gap-3" aria-hidden="true">
      <div className="w-9 shrink-0 overflow-hidden rounded-md ring-1 ring-white/10">
        {STRATA.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: EASE_OUT, delay: delay + i * 0.12 }}
            style={{ height: layer.h, background: layer.texture ? `${layer.texture}, ${layer.fill}` : layer.fill, transformOrigin: "top" }}
          />
        ))}
      </div>
      <ul className="flex-1">
        {STRATA.map((layer, i) => (
          <motion.li
            key={layer.label}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT, delay: delay + 0.1 + i * 0.12 }}
            style={{ height: layer.h }}
            className="flex items-center justify-between border-b border-white/[0.06] text-[11px] last:border-0"
          >
            <span className="text-white/80">{layer.label}</span>
            <span className="font-mono text-white/40">{layer.depth}</span>
          </motion.li>
        ))}
      </ul>
    </div>
    <p className="mt-3 text-[10.5px] text-white/40">Typical profile · SPT at intervals</p>
  </div>
)

/** Survey control point readout with a crosshair target. */
export const ControlPointPanel = ({ className, coordinates = ["08.71° N", "77.75° E"] }) => (
  <div className={cn(panelBase, "flex w-56 items-center gap-4 p-4 sm:w-60", className)}>
    <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-300/40" aria-hidden="true">
      <span className="absolute inset-2 rounded-full border border-dashed border-white/20" />
      <span className="absolute h-px w-full bg-brand-300/40" />
      <span className="absolute h-full w-px bg-brand-300/40" />
      <span className="relative h-2 w-2 rounded-full bg-brand-400 shadow-[0_0_12px_2px_rgba(247,169,40,0.6)]" />
    </span>
    <div className="min-w-0">
      <p className="t-eyebrow text-white/50">Control point</p>
      {coordinates.map((c) => (
        <p key={c} className="mt-1 font-mono text-[13px] leading-tight tabular text-white/90">{c}</p>
      ))}
      <p className="mt-1.5 text-[11px] text-brand-300">DGPS · GNSS fixed</p>
    </div>
  </div>
)
