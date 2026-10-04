import heroImg from "@/assets/hero-geo.jpg"
import soilInvestigationImg from "@/assets/soil-investigation-1.jpg"
import ActionButton, { TextLink } from "@/components/site/ActionButton"
import CapabilityExplorer from "@/components/site/CapabilityExplorer"
import CertificateCard from "@/components/site/CertificateCard"
import CTASection from "@/components/site/CTASection"
import FaqSection from "@/components/site/FaqSection"
import { BoreholePanel, ChipPanel, ListPanel } from "@/components/site/HeroPanels"
import Marquee from "@/components/site/Marquee"
import PageHero from "@/components/site/PageHero"
import ParallaxImage from "@/components/site/ParallaxImage"
import ProcessTimeline from "@/components/site/ProcessTimeline"
import ProjectShowcase from "@/components/site/ProjectShowcase"
import { DrawLine, Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal"
import SectionHeading from "@/components/site/SectionHeading"
import StatsSection from "@/components/site/StatsSection"
import TeamCard from "@/components/site/TeamCard"
import TechnicalBackdrop from "@/components/site/TechnicalBackdrop"
import TiltCard from "@/components/site/TiltCard"
import { CONTACT, DELIVERY_PROCESS, FAQS, GEO_SERVICES, KEY_FIGURES, PEOPLE, PROJECTS, TRUSTED_BY } from "@/data/site"
import Footer from "@/layouts/Footer"
import { cn } from "@/lib/utils"
import { Award, BadgeCheck, Clock3, Globe, Layers, Phone, Shield, ShieldCheck, TrendingUp, User, Users, Zap } from "lucide-react"

const scrollToServices = () =>
  document.getElementById("ExploreProject")?.scrollIntoView({ behavior: "smooth", block: "start" })

const COMPANY_STORY = [
  {
    label: "Company",
    statement: "Your trusted partner in geotechnical investigation, soil testing and surveying.",
    body: [
      "Milestone Geo Services delivers geotechnical soil investigation, soil and rock laboratory testing, and land surveying for infrastructure, industrial and residential projects. With ASTM- and IS-compliant field methods, ISO/IEC 17025-compliant testing, and experienced geologists and geotechnical engineers, we give designers and builders reliable ground data — and the confidence to build on solid ground.",
    ],
  },
  {
    label: "Vision",
    statement: "Our vision is to become a benchmark in the construction industry by creating sustainable, future-ready developments that inspire progress and elevate the built environment.",
    body: [
      "We aim to lead through innovation, uphold engineering excellence, and foster long-term relationships built on integrity, commitment, and performance.",
    ],
  },
  {
    label: "Quality Policy",
    statement: "Our commitment to quality is unwavering.",
    body: [
      "We are dedicated to delivering exceptional construction and engineering solutions that meet and exceed industry standards, ensuring the highest level of quality in every project we undertake.",
      "We are committed to delivering uncompromised quality through stringent standards, certified materials, skilled professionals, and continuous process improvement.",
    ],
  },
]

const WHY_MILESTONE = [
  { icon: Users, title: "Experienced Team", content: "Experience the power of construction and engineering with Milestone. Our team of skilled professionals and certified materials ensures that every project we undertake is delivered with the highest level of quality and safety." },
  { icon: Layers, title: "Comprehensive Services", content: "We offer a comprehensive range of services to support your construction and engineering requirements — from initial planning and site preparation to final project handover." },
  { icon: BadgeCheck, title: "Quality Assurance", content: "We are committed to delivering uncompromised quality through stringent standards, certified materials, skilled professionals, and continuous process improvement." },
  { icon: Globe, title: "Serving India", content: "We serve India with our comprehensive range of construction and engineering services, ensuring that every project we undertake is delivered with the highest level of quality and safety." },
]

const REASONS = [
  { icon: Users, title: "Clients", badge: "Client-centric", highlight: "Trusted by leading builders & businesses", description: "Our esteemed clients have been our backbone for years, trusting us with mission-critical projects and repeat engagements." },
  { icon: Award, title: "Quality", badge: "Quality first", highlight: "High-precision testing & reporting", description: "Standardised processes, well-equipped labs, and experienced professionals help us commit to uncompromised quality." },
]

const CORE_VALUES = [
  { icon: Shield, title: "Integrity First", desc: "Transparent reporting, ethical practices, and zero data manipulation." },
  { icon: Zap, title: "Speed & Precision", desc: "48-hour preliminary reports; <7-day full analysis. Accuracy >99.5%." },
  { icon: TrendingUp, title: "Sustainable Engineering", desc: "Eco-conscious site planning, soil stabilization, and low-impact methods." },
  { icon: User, title: "Client-Centric Approach", desc: "Dedicated project manager, weekly updates, and 24/7 technical support." },
]

const EXPERTISE = ["Civil Construction", "Soil Survey", "Geotechnical Investigation"]

const HERO_PANELS = [
  { depth: 110, className: "-left-2 -bottom-6 origin-bottom-left scale-[0.7] sm:-left-10 sm:bottom-[-12%] sm:scale-100 lg:-left-16", content: <BoreholePanel /> },
  { depth: 70, className: "-right-3 top-[6%] hidden sm:block sm:-right-8", content: <ListPanel title="In-situ testing" items={["SPT", "SCPT", "DCPT", "Plate load"]} /> },
  { depth: 140, className: "left-[10%] -top-6 sm:left-[14%]", content: <ChipPanel icon={ShieldCheck}>ASTM &amp; IS compliant</ChipPanel> },
  { depth: 90, className: "-bottom-5 right-[4%] hidden sm:block", content: <ChipPanel icon={Clock3} live>Preliminary report · 48 h</ChipPanel> },
]

const GeoService = () => (
  <div className="overflow-x-clip">
    <PageHero
      overlap
      eyebrow="Geo-Technical & Construction Engineering"
      title={[{ text: "Milestone" }, { text: "Geo Services", className: "text-brand-400" }]}
      lead="Leading Geo-Technical & Construction Engineering Services Across India — from ground investigation to structures built on solid ground."
      image={heroImg}
      imageAlt="Illustration of a drone, satellite and GNSS receiver mapping terrain"
      imagePosition="45% center"
      panels={HERO_PANELS}
      trust={{ label: "Soil investigation for India’s infrastructure leaders", items: TRUSTED_BY }}
      actions={
        <>
          <ActionButton onClick={scrollToServices} magnetic>Explore services</ActionButton>
          <ActionButton to="/contact" variant="outline-light" icon={null}>Book a consultation</ActionButton>
        </>
      }
    />

    <StatsSection figures={KEY_FIGURES} />

    {/* 01 — Company, Vision, Quality */}
    <section className="section bg-white">
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="01" eyebrow="Who we are" title="Engineering certainty from the ground up." />
            <div className="relative mt-10">
              <ParallaxImage
                src={soilInvestigationImg}
                alt="Soil investigation rig on site beside an elevated viaduct"
                className="aspect-[4/3] rounded-3xl"
                overlay="bg-gradient-to-t from-ink-950/45 to-transparent"
              />
              <Reveal delay={0.3} className="absolute -bottom-6 right-4 sm:-right-6">
                <div className="glass-light flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-300">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold leading-none text-ink-900">60 m</span>
                    <span className="mt-1 block text-[12.5px] text-ink-500">Deep soil exploration</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          {COMPANY_STORY.map((block, i) => (
            <article key={block.label} className={cn("relative", i > 0 && "mt-14 pt-14")}>
              {i > 0 && <DrawLine className="absolute left-0 right-0 top-0 bg-ink-900/10" />}
              <Reveal>
                <p className="t-eyebrow text-brand-700">
                  <span className="tabular text-ink-400">{`0${i + 1}`}</span>&nbsp;&nbsp;{block.label}
                </p>
                <h3 className="mt-5 font-display text-[clamp(1.35rem,2.2vw,1.9rem)] font-semibold leading-snug tracking-[-0.02em] text-ink-900">
                  {block.statement}
                </h3>
              </Reveal>
              {block.body.map((para) => (
                <Reveal key={para} delay={0.1}>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-500">{para}</p>
                </Reveal>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 02 — Why Milestone */}
    <section className="section bg-ink-50">
      <div className="container">
        <SectionHeading index="02" eyebrow="Why Milestone" title="Built on experience, breadth and uncompromised quality." />
        <RevealGroup as="ul" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {WHY_MILESTONE.map((card, i) => (
            <RevealItem as="li" key={card.title} className="h-full">
              <TiltCard max={5} className="h-full" innerClassName="rounded-2xl">
                <article className="group relative flex h-full flex-col rounded-2xl border border-ink-900/[0.08] bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift" style={{ transformStyle: "preserve-3d" }}>
                  <span className="absolute left-7 right-7 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-brand-500 transition-transform duration-500 ease-out-expo group-hover:scale-x-100" aria-hidden="true" />
                  <div className="flex items-center justify-between" style={{ transform: "translateZ(28px)" }}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-brand-300 transition-[transform,background-color,color] duration-300 ease-out-expo group-hover:-rotate-6 group-hover:bg-brand-400 group-hover:text-ink-950">
                      <card.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="t-eyebrow tabular text-ink-300" aria-hidden="true">{`0${i + 1}`}</span>
                  </div>
                  <h3 className="t-h3 mt-10 text-ink-900" style={{ transform: "translateZ(16px)" }}>{card.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{card.content}</p>
                </article>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>

    {/* Expertise band */}
    <section className="relative isolate overflow-hidden bg-ink-950 py-20 text-white sm:py-24">
      <TechnicalBackdrop tone="dark" flow={false} />
      <div className="container relative">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="t-h2 max-w-xl">Our Expertise in Action</h2>
          <p className="max-w-md text-white/60">Excellence in Civil Construction, Soil Survey &amp; Geotechnical Investigation.</p>
        </Reveal>
      </div>
      <div className="relative mt-14">
        <Marquee speed="38s" trackClassName="gap-10 pr-10" label="Areas of expertise">
          {EXPERTISE.map((item) => (
            <span key={item} className="flex items-center gap-10 whitespace-nowrap font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[-0.035em] text-white">
              {item}
              <span className="h-3 w-3 rotate-45 border border-brand-400" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
        <Marquee speed="46s" reverse className="mt-4" trackClassName="gap-10 pr-10">
          {EXPERTISE.map((item) => (
            <span key={item} className="flex items-center gap-10 whitespace-nowrap font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[-0.035em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]">
              {item}
              <span className="h-3 w-3 rotate-45 bg-brand-400/60" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>

    {/* 03 — Services */}
    <section id="ExploreProject" className="section scroll-mt-16 bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading index="03" eyebrow="Capabilities" title="Comprehensive Services" className="lg:col-span-7" />
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="t-lead text-ink-500">End-to-end solutions backed by cutting-edge technology, experienced engineers, and strict quality standards.</p>
          </Reveal>
        </div>
        <div className="mt-14 lg:mt-20">
          <CapabilityExplorer services={GEO_SERVICES} />
        </div>
      </div>
    </section>

    {/* 04 — Major projects */}
    <section id="projects" className="section scroll-mt-20 bg-ink-50">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="04"
            eyebrow="Soil investigation — major projects"
            title="Trusted by India’s top infrastructure giants."
            className="lg:col-span-7"
          />
          <Reveal className="flex flex-col gap-5 lg:col-span-5 lg:items-end lg:text-right" delay={0.1}>
            <p className="t-lead text-ink-500">Metro rail, aviation, highways, railways, bridges and telecom — investigated across Tamil Nadu and beyond.</p>
            <TextLink to="/contact">Discuss a similar project</TextLink>
          </Reveal>
        </div>
        <ProjectShowcase projects={PROJECTS} className="mt-14 lg:mt-16" />
      </div>
    </section>

    {/* 05 — Why choose us + delivery process */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <SectionHeading
            index="05"
            eyebrow="Why choose us"
            title="Why India trusts MilestoneGeoServices"
            lead="We don’t just test soil — we de-risk your entire project with science, experience, and integrity."
            className="lg:col-span-6"
          />
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
            {REASONS.map((reason) => (
              <RevealItem key={reason.title} className="group relative overflow-hidden rounded-2xl border border-ink-900/[0.08] bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <reason.icon className="h-6 w-6 text-brand-600 transition-transform duration-500 ease-out-expo group-hover:scale-110" aria-hidden="true" />
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-800">{reason.badge}</span>
                </div>
                <h3 className="t-h3 mt-8 text-ink-900">{reason.title}</h3>
                <p className="mt-1 text-sm font-medium text-ink-700">{reason.highlight}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{reason.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-3xl bg-ink-950 p-7 text-white shadow-float sm:p-10 lg:mt-24 lg:p-14">
          <TechnicalBackdrop tone="dark" flow={false} contours={false} />
          <div className="relative">
            <Reveal className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="t-eyebrow text-brand-300">End-to-End Ownership</p>
                <h3 className="t-h3 mt-3 max-w-xl text-white">From site investigation to construction QC. One team. Zero handoff risks.</h3>
              </div>
            </Reveal>
            <ProcessTimeline steps={DELIVERY_PROCESS} dark />
          </div>
        </div>
      </div>
    </section>

    {/* 06 — Engineering philosophy */}
    <section className="section bg-ink-50">
      <div className="container">
        <SectionHeading index="06" eyebrow="Our engineering philosophy" title="Built on 4 pillars that define every project we touch." />
        <RevealGroup as="ul" className="mt-14 grid gap-5 md:grid-cols-2">
          {CORE_VALUES.map((val, i) => (
            <RevealItem as="li" key={val.title} className="group flex gap-6 rounded-2xl border border-ink-900/[0.08] bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift sm:p-9">
              <span className="font-display text-5xl font-bold leading-none tracking-[-0.04em] text-ink-100 transition-colors duration-500 group-hover:text-brand-200" aria-hidden="true">{`0${i + 1}`}</span>
              <div>
                <val.icon className="h-5 w-5 text-brand-600 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5" aria-hidden="true" />
                <h3 className="t-h3 mt-4 text-ink-900">{val.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{val.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>

    {/* 07 — Key personnel */}
    <section className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="07" eyebrow="Key personnel" title="The specialists behind every report." />
            <Reveal delay={0.15}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
                A senior geologist and a geotechnical engineer lead our field and laboratory testing.
              </p>
            </Reveal>
          </div>
        </div>
        {/* The certificate sits directly under Chandrasekar on mobile and spans the row beneath both cards from sm up. */}
        <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:col-span-8" gap={0.12}>
          <TeamCard person={PEOPLE.chandrasekar} />
          <CertificateCard person={PEOPLE.chandrasekar} className="order-1 sm:order-2 sm:col-span-2" />
          <TeamCard person={PEOPLE.muthuraja} className="order-2 sm:order-1" />
        </RevealGroup>
      </div>
    </section>

    <FaqSection index="08" faqs={FAQS} className="bg-ink-50" />

    <CTASection
      eyebrow="Get started"
      title="Ready to build on solid ground?"
      lead="Get your free geotechnical consultation and preliminary soil report within 48 hours."
      actions={
        <>
          <ActionButton to="/contact" magnetic>Start your project now</ActionButton>
          <ActionButton href={CONTACT.phones[0].href} variant="outline-light" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
            {CONTACT.phones[0].display}
          </ActionButton>
        </>
      }
      footnote="No-obligation site visit • Free BOQ estimate • 100% confidential"
    />

    <Footer />
  </div>
)

export default GeoService
