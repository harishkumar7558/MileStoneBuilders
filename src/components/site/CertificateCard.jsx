import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Award, CalendarDays, ExternalLink, Landmark, Maximize2, ShieldCheck, Timer } from "lucide-react"
import { SwapArrow } from "./ActionButton"
import CropMarks from "./CropMarks"
import { RevealItem } from "./Reveal"

/**
 * A team member's certificate: the document framed on a dark drafting mat, its key facts,
 * and a full-size viewer. The notch on top points back at the person's card above it.
 */
const CertificateCard = ({ person, className }) => {
  const cert = person.certificate
  const facts = [
    {
      icon: Landmark,
      label: "Conducted by",
      value: <>{cert.issuer}<span className="block font-normal text-ink-500">{cert.authority}</span></>,
      wide: true,
    },
    { icon: Timer, label: "Duration", value: cert.duration },
    { icon: CalendarDays, label: "Held", value: cert.held },
  ]

  return (
    <RevealItem as="li" className={cn("relative", className)}>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3px] border-l border-t border-ink-900/10 bg-ink-950 sm:left-[calc((100%-1.5rem)/4)]"
      />
      <Dialog>
        <article className="group/card relative overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
          <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            {/* Document on a dark drafting mat */}
            <div className="relative isolate flex items-center justify-center overflow-hidden bg-ink-950 px-10 py-12 sm:px-14">
              <div className="absolute inset-0 -z-10 bg-grid-dark opacity-60 mask-fade-edges" aria-hidden="true" />
              <div className="glow-brand absolute inset-0 -z-10" aria-hidden="true" />
              <CropMarks className="inset-5" />
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={`View the full certificate issued to ${person.name}`}
                  className="group/doc relative block w-full max-w-[15rem] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 rotate-[4deg] rounded-md bg-white/10 ring-1 ring-white/10 transition-transform duration-700 ease-out-expo group-hover/doc:rotate-[6deg]"
                  />
                  <span className="relative block -rotate-2 rounded-md bg-white p-1.5 shadow-float transition-transform duration-700 ease-out-expo group-hover/doc:-translate-y-1.5 group-hover/doc:rotate-0">
                    <img
                      src={cert.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={960}
                      height={1280}
                      className="block aspect-[3/4] w-full rounded-[3px] object-cover"
                    />
                  </span>
                  <span className="glass-dark absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[12.5px] font-semibold text-white shadow-lift transition-[opacity,transform] duration-300 ease-out-expo sm:translate-y-1 sm:opacity-0 sm:group-hover/doc:translate-y-0 sm:group-hover/doc:opacity-100 sm:group-focus-visible/doc:translate-y-0 sm:group-focus-visible/doc:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5 text-brand-300" aria-hidden="true" />
                    View full certificate
                  </span>
                </button>
              </DialogTrigger>
            </div>

            {/* Key facts */}
            <div className="relative flex flex-col p-7 sm:p-9">
              <span className="absolute left-7 top-0 h-0.5 w-10 bg-brand-500 transition-[width] duration-500 ease-out-expo group-hover/card:w-24 sm:left-9" aria-hidden="true" />
              <div className="flex items-center gap-4">
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-950 text-brand-300">
                  <span className="absolute -inset-[5px] rounded-full border border-dashed border-brand-500/45 transition-transform duration-700 ease-out-expo group-hover/card:rotate-90" aria-hidden="true" />
                  <Award className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="t-eyebrow text-brand-700">Training certificate</p>
                  <p className="mt-1 text-sm font-medium text-ink-600">Issued to {person.name}</p>
                </div>
              </div>

              <h3 className="mt-7 font-display text-[clamp(1.25rem,1.9vw,1.6rem)] font-semibold leading-snug tracking-[-0.02em] text-ink-900">
                {cert.title}
              </h3>
              <p className="mt-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-50 px-3 py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-brand-800">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  as per {cert.standard}
                </span>
              </p>

              <dl className="mt-7 grid gap-x-6 gap-y-5 border-t border-ink-900/[0.08] pt-6 sm:grid-cols-2">
                {facts.map(({ icon: Icon, label, value, wide }) => (
                  <div key={label} className={cn("flex gap-3", wide && "sm:col-span-2")}>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    <div>
                      <dt className="t-eyebrow text-ink-400">{label}</dt>
                      <dd className="mt-1.5 text-[14.5px] font-medium leading-snug text-ink-800">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-8">
                <p className="font-mono text-[11.5px] tracking-[0.02em] text-ink-400">Ref. {cert.reference}</p>
                <DialogTrigger asChild>
                  <button type="button" className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-900">
                    <span className="relative">
                      View certificate
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-500 transition-transform duration-300 ease-out-expo group-hover:scale-x-100" />
                    </span>
                    <SwapArrow className="text-brand-600" />
                  </button>
                </DialogTrigger>
              </div>
            </div>
          </div>
        </article>

        {/* Full-size viewer */}
        <DialogContent className="max-w-2xl gap-0 border-white/10 bg-ink-950 p-0 text-white" closeClassName="text-white/70 hover:bg-white/10 hover:text-white">
          <div className="border-b border-white/10 px-5 py-4 pr-14 sm:px-6">
            <DialogTitle className="text-base leading-snug text-white sm:text-lg">{cert.title}</DialogTitle>
            <DialogDescription className="mt-1 text-white/55">
              {person.name} · {cert.authority} · {cert.held}
            </DialogDescription>
          </div>
          <div className="bg-grid-dark p-3 sm:p-6">
            <img
              src={cert.image}
              alt={`${cert.title} certificate (${cert.standard}) issued to ${person.name} by the ${cert.issuer}, ${cert.authority}`}
              width={960}
              height={1280}
              className="mx-auto block h-auto max-h-[calc(100svh-15rem)] w-auto max-w-full rounded-md shadow-float"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/10 px-5 py-3.5 sm:px-6">
            <p className="font-mono text-[11px] tracking-[0.02em] text-white/45">Ref. {cert.reference}</p>
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-300 transition-colors hover:text-brand-200"
            >
              Open original
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </RevealItem>
  )
}

export default CertificateCard
