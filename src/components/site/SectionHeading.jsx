import { cn } from "@/lib/utils"
import { DrawLine, Reveal, SplitReveal } from "./Reveal"

/** Eyebrow row: index number, drawn rule and label. */
export const Eyebrow = ({ index, children, dark = false, className }) => (
  <div className={cn("flex items-center gap-3", dark ? "text-brand-300" : "text-brand-700", className)}>
    {index && <span className="t-eyebrow tabular">{index}</span>}
    <DrawLine className={cn("w-10", dark ? "bg-brand-300/60" : "bg-brand-600/50")} />
    <span className={cn("t-eyebrow", dark ? "text-white/70" : "text-ink-500")}>{children}</span>
  </div>
)

const SectionHeading = ({ index, eyebrow, title, lead, align = "left", dark = false, className, titleClassName, children }) => (
  <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
    {eyebrow && (
      <Eyebrow index={index} dark={dark} className={align === "center" ? "justify-center" : undefined}>
        {eyebrow}
      </Eyebrow>
    )}
    <SplitReveal
      as="h2"
      text={title}
      className={cn("t-h2 mt-5", dark ? "text-white" : "text-ink-900", titleClassName)}
    />
    {lead && (
      <Reveal delay={0.15}>
        <p className={cn("t-lead mt-5", dark ? "text-white/65" : "text-ink-500", align === "center" && "mx-auto max-w-2xl")}>{lead}</p>
      </Reveal>
    )}
    {children}
  </div>
)

export default SectionHeading
