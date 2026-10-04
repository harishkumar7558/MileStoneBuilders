import heroImg from "@/assets/soil-investigation-1.jpg"
import mukeshImg from "@/assets/portrait-mukesh.jpg"
import muthuRajaImg from "@/assets/portrait-muthuraja.jpg"
import ActionButton from "@/components/site/ActionButton"
import CredentialsSection from "@/components/site/CredentialsSection"
import CTASection from "@/components/site/CTASection"
import { EASE_OUT } from "@/components/site/motion"
import PageHero from "@/components/site/PageHero"
import { RevealGroup, RevealItem } from "@/components/site/Reveal"
import SectionHeading from "@/components/site/SectionHeading"
import StatsSection from "@/components/site/StatsSection"
import TechnicalBackdrop from "@/components/site/TechnicalBackdrop"
import TiltCard from "@/components/site/TiltCard"
import { CREDENTIALS, KEY_FIGURES } from "@/data/site"
import Footer from "@/layouts/Footer"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"
import { Award, Compass, Layers, Lightbulb, Shield, Target, Users, Zap } from "lucide-react"
import { useRef } from "react"

const DIRECTORS = [
  { img: mukeshImg, name: "Mukesh", title: "Director", detail: "B.E · Surveyor · 13+ years in surveying" },
  { img: muthuRajaImg, name: "MuthuRaja Thivakar", title: "Director", detail: "M.E · Geo-Technical · 4 years of expertise" },
]

// Founding story, as told in the company description.
const STORY = [
  { label: "Surveying roots", text: "Mukesh B.E (Surveyor) brings 13+ years of field surveying — boundary, topographic and infrastructure surveys." },
  { label: "Geotechnical depth", text: "Muthuraja M.E (Geo-Technical) adds 4 years of Geo-Technical expertise in soil investigation and testing." },
  { label: "MilestoneBuilders", text: "Two passionate professionals combine experience and innovation to deliver precise engineering solutions." },
  { label: "Trust & integrity", text: "Reliable, innovative, and value-driven construction solutions — delivered across India." },
]

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "Highest ethical standards & transparency" },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge tech & modern methods" },
  { icon: Award, title: "Excellence", desc: "Quality beyond industry standards" },
  { icon: Users, title: "Collaboration", desc: "Strong partnerships for shared success" },
]

// The clip-path wipe lives on an inner layer: IntersectionObserver measures the target's clipped area,
// so observing a fully clipped element would never report it as visible.
const wipe = {
  hidden: { clipPath: "inset(100% 0 0 0 round 24px)" },
  show: { clipPath: "inset(0% 0 0 0 round 24px)", transition: { duration: 1.1, ease: EASE_OUT } },
}

const DirectorPortrait = ({ person, className }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className={cn("group relative self-start rounded-3xl shadow-lift", className)}
  >
    <motion.figure variants={wipe} className="relative overflow-hidden rounded-3xl bg-ink-100">
      <img
        src={person.img}
        alt={`${person.name} — ${person.title}`}
        loading="lazy"
        decoding="async"
        className="aspect-[4/5] w-full object-cover object-top grayscale-[25%] transition-[transform,filter] duration-700 ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent p-4 pt-16 text-white sm:p-5 sm:pt-20">
        <p className="t-eyebrow text-brand-300">{person.title}</p>
        <p className="mt-1 font-display text-lg font-semibold sm:text-xl">{person.name}</p>
        <p className="mt-1 text-[13px] leading-snug text-white/70 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:overflow-hidden [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:transition-all [@media(hover:hover)]:duration-500 [@media(hover:hover)]:group-hover:max-h-12 [@media(hover:hover)]:group-hover:opacity-100">
          {person.detail}
        </p>
      </figcaption>
    </motion.figure>
  </motion.div>
)

/** Glass fact card that floats in front of the portraits. */
const FloatingFact = ({ icon: Icon, value, label, className, z = 60 }) => (
  <div className={cn("absolute z-10", className)} style={{ transform: `translateZ(${z}px)` }}>
    <div className="glass-light flex items-center gap-3 rounded-2xl p-2.5 pr-4 shadow-lift">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-brand-300">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <span>
        <span className="block font-display text-base font-bold leading-none text-ink-900">{value}</span>
        <span className="mt-1 block text-[12px] text-ink-500">{label}</span>
      </span>
    </div>
  </div>
)

const StoryTimeline = () => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <div ref={ref} className="relative">
      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-ink-900/10" />
      <motion.div className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-brand-500" style={{ scaleY: reduce ? 1 : progress }} />
      <RevealGroup as="ol" className="space-y-10" gap={0.14}>
        {STORY.map((step, i) => (
          <RevealItem as="li" key={step.label} className="relative pl-12">
            <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-brand-500 bg-white" />
            <p className="t-eyebrow text-ink-400"><span className="tabular text-brand-700">{`0${i + 1}`}</span> — {step.label}</p>
            <p className="mt-3 text-[16px] leading-relaxed text-ink-600">{step.text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}

const AboutUsPage = () => (
  <div className="overflow-x-clip">
    <PageHero
      layout="full"
      compact
      overlap
      eyebrow="About us"
      title={[{ text: "Building Dreams," }, { text: "Creating Legacies", className: "text-brand-400" }]}
      lead="Delivering reliable, innovative, and value-driven construction solutions across India."
      image={heroImg}
      imagePosition="center 45%"
      actions={<ActionButton to="/contact" magnetic>Contact us</ActionButton>}
    />

    <StatsSection figures={KEY_FIGURES} />

    {/* 01 — Leadership */}
    <section className="section bg-white">
      <div className="container grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            index="01"
            eyebrow="Leadership"
            title="Leadership that inspires excellence."
            lead="MilestoneGeoServices was established by two passionate professionals — Mukesh B.E(Surveyor), with 13+ years in surveying, and Muthuraja M.E(Geo-Technical), with 4 years of Geo-Technical expertise. Together, they combine experience and innovation to deliver precise engineering solutions with trust and integrity."
          />
          <div className="mt-14">
            <StoryTimeline />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="lg:sticky lg:top-28">
            <TiltCard max={4}>
              <div className="preserve-3d relative grid grid-cols-2 gap-4 pb-6 pt-2 sm:gap-6">
                <DirectorPortrait person={DIRECTORS[0]} />
                <DirectorPortrait person={DIRECTORS[1]} className="mt-14 sm:mt-24" />
                <FloatingFact icon={Compass} value="13+ years" label="Surveying" className="-left-2 top-[46%] sm:-left-6" z={70} />
                <FloatingFact icon={Layers} value="M.E" label="Geo-Technical" className="-right-2 top-2 sm:-right-4" z={90} />
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>

    {/* 02 — Vision & Mission */}
    <section className="section bg-ink-50">
      <div className="container">
        <SectionHeading index="02" eyebrow="Purpose" title="What drives every project we take on." />
        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
          <RevealItem className="h-full">
            <TiltCard max={4} className="h-full" innerClassName="rounded-3xl">
              <div className="relative isolate h-full overflow-hidden rounded-3xl bg-ink-950 p-8 text-white shadow-float sm:p-10">
                <TechnicalBackdrop tone="dark" flow={false} />
                <div className="glow-brand absolute inset-0 -z-10" aria-hidden="true" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400 text-ink-950">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="t-eyebrow mt-10 text-white/50">Our vision</p>
                  <p className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em]">
                    To set the benchmark in sustainable construction through innovation, excellence, and integrity.
                  </p>
                </div>
              </div>
            </TiltCard>
          </RevealItem>
          <RevealItem className="h-full">
            <TiltCard max={4} className="h-full" innerClassName="rounded-3xl">
              <div className="h-full rounded-3xl border border-ink-900/[0.08] bg-white p-8 shadow-soft sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-brand-300">
                  <Zap className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="t-eyebrow mt-10 text-ink-400">Our mission</p>
                <p className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold leading-snug tracking-[-0.02em] text-ink-900">
                  Deliver exceptional engineering solutions with superior craftsmanship, safety, and value for every stakeholder.
                </p>
              </div>
            </TiltCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>

    {/* 03 — Core values */}
    <section className="section bg-white">
      <div className="container">
        <SectionHeading index="03" eyebrow="Core values" title="The foundation of everything we do." />
        <RevealGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {VALUES.map((value, i) => (
            <RevealItem
              as="li"
              key={value.title}
              className="group relative overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift sm:p-8"
            >
              <span className="absolute left-7 right-7 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-500 transition-transform duration-500 ease-out-expo group-hover:scale-x-100" aria-hidden="true" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200/70 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:-rotate-6">
                  <value.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="t-eyebrow tabular text-ink-300" aria-hidden="true">{`0${i + 1}`}</span>
              </div>
              <h3 className="t-h3 mt-12 text-ink-900">{value.title}</h3>
              <p className="mt-2 text-[15px] text-ink-500">{value.desc}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>

    <CredentialsSection index="04" credentials={CREDENTIALS} className="bg-ink-50" />

    <CTASection
      eyebrow="Work with us"
      title="Ready to Build Together?"
      lead="Let's turn your vision into reality with excellence and trust."
      actions={<ActionButton to="/contact" magnetic>Get started now</ActionButton>}
    />

    <Footer />
  </div>
)

export default AboutUsPage
