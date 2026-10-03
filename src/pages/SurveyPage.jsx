import client1 from "@/assets/client-1.jpg"
import client10 from "@/assets/client-10.jpg"
import client11 from "@/assets/client-11.jpg"
import client12 from "@/assets/client-12.jpg"
import client13 from "@/assets/client-13.jpg"
import client14 from "@/assets/client-14.jpg"
import client15 from "@/assets/client-15.jpg"
import client16 from "@/assets/client-16.jpg"
import client2 from "@/assets/client-2.jpg"
import client3 from "@/assets/client-3.jpg"
import client4 from "@/assets/client-4.jpg"
import client5 from "@/assets/client-5.jpg"
import client6 from "@/assets/client-6.jpg"
import client7 from "@/assets/client-7.jpg"
import client8 from "@/assets/client-8.jpg"
import client9 from "@/assets/client-9.jpg"
import heroImg from "@/assets/hero-survey.jpg"
import fieldImg from "@/assets/soli-investigation.jpg"
import ActionButton from "@/components/site/ActionButton"
import CTASection from "@/components/site/CTASection"
import { ChipPanel, ControlPointPanel, ListPanel } from "@/components/site/HeroPanels"
import OverlapPanel from "@/components/site/OverlapPanel"
import PageHero from "@/components/site/PageHero"
import ParallaxImage from "@/components/site/ParallaxImage"
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal"
import SectionHeading from "@/components/site/SectionHeading"
import { ServiceCard } from "@/components/site/ServiceCard"
import { CONTACT, PEOPLE, SURVEY_FLEET, SURVEY_SERVICES, SURVEY_TECHNOLOGY } from "@/data/site"
import Footer from "@/layouts/Footer"
import { Compass, Cpu, Drone, Phone, Users } from "lucide-react"

// Names read from the logo artwork, used as alt text.
const CLIENT_LOGOS = [
  { src: client1, name: "Bhoomi & Buildings" },
  { src: client2, name: "Shree Neel Construction Corporation (SNCC)" },
  { src: client3, name: "Indian Railways" },
  { src: client4, name: "LKS" },
  { src: client5, name: "RAMS" },
  { src: client6, name: "Ruhrpumpen" },
  { src: client7, name: "Swathi Group" },
  { src: client8, name: "Chennai Metro Rail Limited" },
  { src: client9, name: "Shapoorji Pallonji" },
  { src: client10, name: "Gammon" },
  { src: client11, name: "URS" },
  { src: client12, name: "Essel Group" },
  { src: client13, name: "Walton" },
  { src: client14, name: "L&T" },
  { src: client15, name: "Leitwind" },
  { src: client16, name: "DMICDC" },
]

const EXPERTISE = [
  { icon: Users, title: "Expert Team", desc: "Highly skilled engineers & surveyors with decades of field experience" },
  { icon: Cpu, title: "Advanced Technology", desc: "Latest tools including drones, GPR, LiDAR , DGPS & total stations" },
]

const HERO_PANELS = [
  { depth: 110, className: "-left-3 -bottom-8 origin-bottom-left scale-[0.9] sm:-left-10 sm:scale-100 lg:-left-14", content: <ControlPointPanel /> },
  { depth: 140, className: "left-[8%] -top-6 sm:left-[14%]", content: <ChipPanel icon={Drone}>Drone mapping &amp; LiDAR</ChipPanel> },
  { depth: 70, className: "-right-3 top-[14%] hidden sm:block sm:-right-8", content: <ListPanel title="Subsurface" items={["GPR", "Utility mapping", "Underground assets"]} /> },
  { depth: 90, className: "-bottom-5 right-[6%] hidden sm:block", content: <ChipPanel icon={Compass}>{`${SURVEY_SERVICES.length} survey disciplines`}</ChipPanel> },
]

const scrollToServices = () =>
  document.getElementById("ExploreProject")?.scrollIntoView({ behavior: "smooth", block: "start" })

const SurveyPage = () => (
  <div className="overflow-x-clip">
    <PageHero
      overlap
      eyebrow="Surveying & Construction Engineering"
      title={[{ text: "Milestone" }, { text: "Survey", className: "text-brand-400" }]}
      lead="Leading Surveying & Construction Engineering Services Across India — precise field data for planning, design and infrastructure delivery."
      image={heroImg}
      imageAlt="Illustration of a total station and survey drone capturing a terrain grid"
      imagePosition="center 45%"
      panels={HERO_PANELS}
      trust={{ label: "Instrument fleet", items: SURVEY_TECHNOLOGY }}
      actions={
        <>
          <ActionButton onClick={scrollToServices} magnetic>Get started</ActionButton>
          <ActionButton to="/contact" variant="outline-light" icon={null}>Talk to a surveyor</ActionButton>
        </>
      }
    />

    <OverlapPanel label="Survey technology">
      <ul className="grid grid-cols-2 gap-px bg-ink-900/[0.06] sm:grid-cols-3 lg:grid-cols-6">
        {SURVEY_FLEET.map((tool) => (
          <li key={tool.label} className="group flex flex-col items-start gap-4 bg-white p-5 transition-colors duration-300 hover:bg-ink-50/70 sm:p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-300 transition-[transform,background-color,color] duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:-rotate-6 group-hover:bg-brand-400 group-hover:text-ink-950">
              <tool.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              <span className="block font-display text-[15px] font-semibold text-ink-900">{tool.label}</span>
              <span className="mt-0.5 block text-[13px] text-ink-500">{tool.detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </OverlapPanel>

    {/* 01 — Services grid */}
    <section id="ExploreProject" className="section scroll-mt-16 bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading index="01" eyebrow="Survey services" title="Our Comprehensive Services" className="lg:col-span-7" />
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="t-lead text-ink-500">End-to-end solutions for infrastructure &amp; development — from control points to corridor mapping.</p>
          </Reveal>
        </div>
        <RevealGroup as="ul" gap={0.05} className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          {SURVEY_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.highlight}
              badge={service.badge}
              index={i}
              cta="Enquire"
            />
          ))}
        </RevealGroup>
      </div>
    </section>

    {/* 02 — Expertise */}
    <section className="section bg-ink-50">
      <div className="container grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SectionHeading index="02" eyebrow="Our expertise" title="Field experience, backed by precise instruments." />
          <RevealGroup as="ul" className="mt-12 space-y-4">
            {EXPERTISE.map((item) => (
              <RevealItem as="li" key={item.title} className="group flex gap-6 rounded-2xl border border-ink-900/[0.08] bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-brand-300 transition-transform duration-500 ease-out-expo group-hover:-rotate-6">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="t-h3 text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{item.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <div className="relative lg:col-span-6">
          <ParallaxImage
            src={fieldImg}
            alt="Field engineer testing soil on site with a handheld analyser"
            className="aspect-[4/5] rounded-3xl sm:aspect-[5/4] lg:aspect-[4/5]"
            overlay="bg-gradient-to-t from-ink-950/75 via-transparent to-transparent"
          >
            <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
              <p className="t-eyebrow text-white/65">Instrument fleet</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SURVEY_TECHNOLOGY.map((tool) => (
                  <li key={tool} className="glass-dark rounded-full px-3 py-1.5 text-[13px] font-medium text-white">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </ParallaxImage>
          <Reveal delay={0.3} className="absolute -top-6 right-4 sm:-right-6">
            <div className="glass-light flex items-center gap-3 rounded-2xl p-3 pr-5 shadow-lift">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400 text-ink-950">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold leading-none text-ink-900">13+ years</span>
                <span className="mt-1 block text-[12.5px] text-ink-500">{PEOPLE.mukesh.role} · field leadership</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* 03 — Clients */}
    <section className="section bg-white">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading index="03" eyebrow="Clients" title="Trusted by Leading Companies" className="lg:col-span-7" />
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="t-lead text-ink-500">A selection of the organisations we have worked with.</p>
          </Reveal>
        </div>
        <RevealGroup as="ul" gap={0.03} className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8 lg:gap-4" aria-label="Client logos">
          {CLIENT_LOGOS.map((logo) => (
            <RevealItem
              as="li"
              key={logo.src}
              className="group flex aspect-[3/2] items-center justify-center rounded-2xl border border-ink-900/[0.08] bg-white p-4 shadow-soft transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className="max-h-full w-auto object-contain grayscale transition-[filter,opacity] duration-500 group-hover:grayscale-0 [@media(hover:hover)]:opacity-75 [@media(hover:hover)]:group-hover:opacity-100"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>

    <CTASection
      eyebrow="Plan your survey"
      title="Accurate ground truth for your next project."
      lead="Tell us about your site and scope — our survey team will recommend the right method and deliverables."
      actions={
        <>
          <ActionButton to="/contact" magnetic>Request a survey</ActionButton>
          <ActionButton href={CONTACT.phones[0].href} variant="outline-light" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
            {CONTACT.phones[0].display}
          </ActionButton>
        </>
      }
    />

    <Footer />
  </div>
)

export default SurveyPage
