import { cn } from "@/lib/utils"
import { memo } from "react"
import { PAUSED, useInViewport } from "./useInViewport"

// Hand-drawn topographic rings (closed, smooth) — drift very slowly.
const CONTOURS = [
  "M420 300c90-70 230-40 250 50s-60 170-170 175-210-40-215-120 45-45 135-105z",
  "M430 290c70-50 180-30 195 40s-45 130-130 135-165-30-170-95 40-35 105-80z",
  "M440 285c50-35 130-20 140 30s-30 90-95 95-120-20-122-65 30-25 77-60z",
  "M450 282c30-20 80-12 88 18s-18 55-58 58-74-12-75-40 18-16 45-36z",
  "M120 520c60-50 170-40 190 20s-40 120-120 125-150-30-150-85 30-20 80-60z",
  "M135 515c40-32 115-26 128 14s-28 80-80 83-100-20-100-56 20-14 52-41z",
]

// Survey / data-network lines. pathLength normalises dash timing across paths.
const FLOWS = [
  { d: "M-20 420C160 380 260 250 430 280S700 420 820 360", dur: "11s", delay: "0s" },
  { d: "M-20 160C120 190 240 120 360 170S560 330 820 250", dur: "14s", delay: "-4s" },
  { d: "M140 620C180 470 300 420 450 390S650 250 700 -20", dur: "16s", delay: "-8s" },
  { d: "M-20 560C150 520 300 560 470 500S720 520 820 470", dur: "18s", delay: "-2s" },
]

const NODES = [
  [430, 280], [360, 170], [450, 390], [470, 500],
]

/**
 * Engineering backdrop: moving grid, topographic contours and data pulses.
 * All motion is transform / stroke-dashoffset based and disabled for reduced motion.
 */
const TechnicalBackdrop = memo(({ tone = "dark", flow = true, contours = true, grid = true, className }) => {
  const [ref, inView] = useInViewport()
  const dark = tone === "dark"
  const line = dark ? "rgba(255,255,255,0.07)" : "rgba(11,18,32,0.07)"
  const pulse = dark ? "#F7A928" : "#C9710A"

  return (
    <div ref={ref} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", !inView && PAUSED, className)}>
      {grid && (
        <div className="absolute inset-0 mask-fade-edges">
          <div className={cn("absolute -inset-16 motion-safe:animate-grid-pan", dark ? "bg-grid-dark" : "bg-grid-light")} />
        </div>
      )}

      {contours && (
        <svg className="absolute inset-0 h-full w-full motion-safe:animate-contour-drift" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
          {CONTOURS.map((d, i) => (
            <path key={i} d={d} stroke={line} strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      )}

      {flow && (
        <svg className="absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
          {FLOWS.map((f, i) => (
            <g key={i}>
              <path d={f.d} stroke={line} strokeWidth="1" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
              <path
                d={f.d}
                pathLength="1000"
                stroke={pulse}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="40 960"
                vectorEffect="non-scaling-stroke"
                className="motion-safe:animate-dash-flow"
                style={{ animationDuration: f.dur, animationDelay: f.delay, opacity: 0.8 }}
              />
            </g>
          ))}
          {NODES.map(([cx, cy], i) => (
            <g key={i}>
              <circle
                cx={cx} cy={cy} r="6" stroke={pulse} strokeOpacity="0.5"
                className="motion-safe:animate-pulse-ring"
                style={{ transformBox: "fill-box", transformOrigin: "center", animationDelay: `${i * 0.7}s` }}
              />
              <circle cx={cx} cy={cy} r="2.5" fill={pulse} />
            </g>
          ))}
        </svg>
      )}
    </div>
  )
})
TechnicalBackdrop.displayName = "TechnicalBackdrop"

export default TechnicalBackdrop
