import heroImg from "@/assets/hero-builders.jpg"
import ActionButton, { TextLink } from "@/components/site/ActionButton"
import CredentialsSection from "@/components/site/CredentialsSection"
import CTASection from "@/components/site/CTASection"
import { ChipPanel, ListPanel } from "@/components/site/HeroPanels"
import PageHero from "@/components/site/PageHero"
import ProcessTimeline from "@/components/site/ProcessTimeline"
import ProjectShowcase from "@/components/site/ProjectShowcase"
import { Reveal, RevealGroup } from "@/components/site/Reveal"
import SectionHeading from "@/components/site/SectionHeading"
import { ServiceMediaCard } from "@/components/site/ServiceCard"
import StatsSection from "@/components/site/StatsSection"
import TeamCard from "@/components/site/TeamCard"
import TechnicalBackdrop from "@/components/site/TechnicalBackdrop"
import { BUILDER_FIGURES, BUILDER_SERVICES, CREDENTIALS, DELIVERY_PROCESS, GOVERNMENT_CLIENTS, PEOPLE, PROJECTS } from "@/data/site"
import Footer from "@/layouts/Footer"
import { cn } from "@/lib/utils"
import { Building2, Hammer, Wind } from "lucide-react"

const KEY_PERSONNEL = [PEOPLE.jebastin, PEOPLE.mukesh]
const FEATURED_COUNT = 2

const HERO_PANELS = [
  { depth: 110, className: "-left-3 -bottom-8 sm:-left-10 lg:-left-14", content: <ListPanel title="Empaneled with" items={["CPWD", "RITES", "NBCC", "MES"]} /> },
  { depth: 140, className: "left-[10%] -top-6 sm:left-[16%]", content: <ChipPanel icon={Wind}>Earthquake &amp; wind resistant</ChipPanel> },
  { depth: 70, className: "-right-3 top-[20%] hidden sm:block sm:-right-8", content: <ChipPanel icon={Hammer}>Piling · Foundation · RCC</ChipPanel> },
  { depth: 90, className: "-bottom-5 right-[6%] hidden sm:block", content: <ChipPanel icon={Building2}>IS 3370 water tanks</ChipPanel> },
]

const scrollToServices = () =>
  document.getElementById("ExploreProject")?.scrollIntoView({ behavior: "smooth", block: "start" })

const HomePage = () => (
  <div className="overflow-x-clip">
    <PageHero
      overlap
      eyebrow="Transform the future of construction"
      title={[{ text: "Milestone" }, { text: "Builders", className: "text-brand-400" }]}
      lead="Complete civil engineering works, structural design and architectural planning — delivered by one accountable team."
      image={heroImg}
      imageAlt="Illustration of tower cranes above buildings under construction"
      imagePosition="center 40%"
      panels={HERO_PANELS}
      trust={{ label: "Government contracts", items: GOVERNMENT_CLIENTS }}
      actions={
        <>
          <ActionButton onClick={scrollToServices} magnetic>Explore projects</ActionButton>
          <ActionButton to="/contact" variant="outline-light" icon={null}>Get quote</ActionButton>
        </>
      }
    />

    <StatsSection figures={BUILDER_FIGURES} />

    {/* 01 — Services */}
    <section id="ExploreProject" className="section scroll-mt-16 bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading index="01" eyebrow="What we build" title="Construction & engineering capabilities" className="lg:col-span-7" />
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="t-lead text-ink-500">From foundations and RCC frames to roads, bridges and industrial structures — planned, designed and executed in-house.</p>
          </Reveal>
        </div>
        <RevealGroup as="ul" gap={0.06} className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {BUILDER_SERVICES.map((service, i) => (
            <ServiceMediaCard
              key={service.id}
              service={service}
              index={i}
              featured={i < FEATURED_COUNT}
              className={cn(i < FEATURED_COUNT ? "lg:col-span-3" : "lg:col-span-2")}
            />
          ))}
        </RevealGroup>
      </div>
    </section>

    {/* 02 — Track record */}
    <section id="track-record" className="section scroll-mt-20 bg-ink-50">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading index="02" eyebrow="Track record" title="Groundwork for India’s major infrastructure." className="lg:col-span-7" />
          <Reveal className="flex flex-col gap-5 lg:col-span-5 lg:items-end lg:text-right" delay={0.1}>
            <p className="t-lead text-ink-500">Every structure starts with the soil beneath it — the investigations our team has delivered.</p>
            <TextLink to="/contact">Discuss your project</TextLink>
          </Reveal>
        </div>
        <ProjectShowcase projects={PROJECTS} className="mt-14 lg:mt-16" />
      </div>
    </section>

    {/* 03 — Delivery process */}
    <section className="section relative isolate overflow-hidden bg-ink-950 text-white">
      <TechnicalBackdrop tone="dark" contours={false} />
      <div className="container relative">
        <SectionHeading
          dark
          index="03"
          eyebrow="End-to-end ownership"
          title="One team from ground investigation to handover."
          lead="From site investigation → lab testing → design validation → construction QC. Zero handoff risks."
        />
        <div className="mt-16">
          <ProcessTimeline steps={DELIVERY_PROCESS} dark />
        </div>
      </div>
    </section>

    <CredentialsSection index="04" credentials={CREDENTIALS} />

    {/* 05 — Key personnel */}
    <section className="section bg-ink-50">
      <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="05" eyebrow="Key personnel" title="Led by engineers with 13 years of experience." />
          </div>
        </div>
        <RevealGroup as="ul" className="grid gap-6 sm:grid-cols-2 lg:col-span-8" gap={0.12}>
          {KEY_PERSONNEL.map((person) => <TeamCard key={person.name} person={person} />)}
        </RevealGroup>
      </div>
    </section>

    <CTASection
      title="Ready to Start Your Project?"
      lead="Share your plans with us — we’ll help you with planning, estimation and execution."
      actions={<ActionButton to="/contact" magnetic>Contact us today</ActionButton>}
    />

    <Footer />
  </div>
)

export default HomePage
