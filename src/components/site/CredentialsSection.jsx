import { cn } from "@/lib/utils"
import { Reveal, RevealGroup, RevealItem } from "./Reveal"
import SectionHeading from "./SectionHeading"

/** Standards, compliance and empanelment — presented as seals. */
const CredentialsSection = ({
  index, credentials, className = "bg-white",
  title = "Standards we work to, bodies we work with.",
  lead = "Compliance and empanelment that let our reports and structures stand up to scrutiny.",
}) => (
  <section className={cn("section", className)}>
    <div className="container">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <SectionHeading index={index} eyebrow="Credentials" title={title} className="lg:col-span-7" />
        <Reveal className="lg:col-span-5" delay={0.1}>
          <p className="t-lead text-ink-500">{lead}</p>
        </Reveal>
      </div>

      <RevealGroup as="ul" gap={0.06} className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
        {credentials.map((item) => (
          <RevealItem
            as="li"
            key={item.title}
            className="group relative flex gap-5 rounded-2xl border border-ink-900/[0.08] bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out-expo hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-lift sm:p-7"
          >
            <span className="relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-950 text-brand-300">
              <span className="absolute -inset-[5px] rounded-full border border-dashed border-brand-500/45 transition-transform duration-700 ease-out-expo group-hover:rotate-90" aria-hidden="true" />
              <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-[17px] font-semibold leading-snug tracking-[-0.01em] text-ink-900">{item.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">{item.desc}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
)

export default CredentialsSection
