import { cn } from "@/lib/utils"
import { BadgeCheck } from "lucide-react"
import { RevealItem } from "./Reveal"
import TiltCard from "./TiltCard"

// "Dr. N. Chandrasekar" → "NC", "Mr. Jebastin Daniel" → "JD"
const initials = (name) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s*/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("")

/** Professional profile: portrait (or monogram), role, credential, experience and areas of expertise. */
const TeamCard = ({ person, className }) => (
  <RevealItem as="li" className={cn("h-full", className)}>
    <TiltCard max={4} className="h-full" innerClassName="rounded-2xl">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
        <div className="relative aspect-[5/4] overflow-hidden bg-ink-100">
          {person.photo ? (
            <img
              src={person.photo}
              alt={`Portrait of ${person.name}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[center_22%] grayscale-[25%] transition-[transform,filter] duration-700 ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
            />
          ) : (
            <div className="relative flex h-full w-full items-center justify-center bg-ink-950" aria-hidden="true">
              <div className="absolute inset-0 bg-grid-dark opacity-60 mask-fade-edges" />
              <div className="glow-brand absolute inset-0" />
              <span className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] font-display text-4xl font-bold tracking-tight text-white transition-transform duration-700 ease-out-expo group-hover:scale-105">
                {initials(person.name)}
              </span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/35 to-transparent" />
          {person.experience && (
            <span className="glass-dark absolute left-4 top-4 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white">
              {person.experience}
            </span>
          )}
        </div>

        <div className="relative flex flex-1 flex-col p-6 sm:p-7">
          <span className="absolute left-6 top-0 h-0.5 w-10 bg-brand-500 transition-[width] duration-500 ease-out-expo group-hover:w-24 sm:left-7" aria-hidden="true" />
          <p className="t-eyebrow text-brand-700">{person.role}</p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-0.015em] text-ink-900">{person.name}</h3>
          {person.credential && (
            <p className="mt-2 flex items-start gap-2 text-sm text-ink-600">
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
              {person.credential}
            </p>
          )}
          {person.summary && <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{person.summary}</p>}
          {person.expertise?.length > 0 && (
            <div className="mt-auto pt-6">
              <p className="sr-only">Expertise</p>
              <ul className="flex flex-wrap gap-2 border-t border-ink-900/[0.08] pt-5">
                {person.expertise.map((item) => (
                  <li key={item} className="rounded-full border border-ink-900/10 bg-ink-50 px-3 py-1 text-[12.5px] font-medium text-ink-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </TiltCard>
  </RevealItem>
)

export default TeamCard
