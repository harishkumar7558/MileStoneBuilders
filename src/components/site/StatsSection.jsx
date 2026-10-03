import { motion } from "framer-motion"
import AnimatedCounter from "./AnimatedCounter"
import { EASE_OUT } from "./motion"
import OverlapPanel from "./OverlapPanel"

const COUNT_DURATION = 1.8

/** Key figures in a layered panel over the hero. Counters run once, when first visible. */
const StatsSection = ({ figures, label = "Key figures" }) => (
  <OverlapPanel label={label}>
    <ul className="grid grid-cols-2 gap-px bg-ink-900/[0.06] lg:grid-cols-4">
      {figures.map((fig, i) => (
        <li key={fig.label} className="group relative flex flex-col bg-white p-5 transition-colors duration-300 hover:bg-ink-50/70 sm:p-8">
          <div className="flex items-center justify-between">
            {fig.icon && (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/70 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]">
                <fig.icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
              </span>
            )}
            <span className="t-eyebrow tabular text-ink-300" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <p className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-bold leading-none tracking-[-0.04em] text-ink-900">
            <AnimatedCounter value={fig.value} suffix={fig.suffix} duration={COUNT_DURATION} />
          </p>
          <p className="mt-3 hyphens-auto break-words text-[14px] font-semibold leading-snug text-ink-800 sm:text-[15px]">{fig.label}</p>
          {fig.detail && <p className="mt-1 hyphens-auto break-words text-[13px] leading-snug text-ink-500">{fig.detail}</p>}
          {/* Rule that fills while the counter runs */}
          <span className="mt-auto block pt-6" aria-hidden="true">
            <span className="block h-px w-full overflow-hidden bg-ink-900/[0.08]">
              <motion.span
                className="block h-full origin-left bg-brand-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: COUNT_DURATION, ease: EASE_OUT }}
              />
            </span>
          </span>
        </li>
      ))}
    </ul>
  </OverlapPanel>
)

export default StatsSection
