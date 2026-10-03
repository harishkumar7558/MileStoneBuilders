import heroImg from "@/assets/contact.jpg"
import ActionButton from "@/components/site/ActionButton"
import ContactForm from "@/components/site/ContactForm"
import OverlapPanel from "@/components/site/OverlapPanel"
import PageHero from "@/components/site/PageHero"
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal"
import SectionHeading from "@/components/site/SectionHeading"
import { CONTACT, whatsappLink } from "@/data/site"
import Footer from "@/layouts/Footer"
import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react"

const MAP_QUERY = encodeURIComponent(CONTACT.address)

const CHANNELS = [
  { icon: Phone, label: "Call us", value: CONTACT.phones[0].display, href: CONTACT.phones[0].href, extra: CONTACT.phones[1] && { value: CONTACT.phones[1].display, href: CONTACT.phones[1].href } },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: whatsappLink(), accent: true },
  { icon: Mail, label: "Email us", value: CONTACT.emails[0], href: `mailto:${CONTACT.emails[0]}`, extra: CONTACT.emails[1] && { value: CONTACT.emails[1], href: `mailto:${CONTACT.emails[1]}` } },
  { icon: Instagram, label: "Follow us", value: CONTACT.instagram.handle, href: CONTACT.instagram.href },
]

const NEXT_STEPS = [
  { title: "Share your project", desc: "Tell us about the site, the work and your timeline." },
  { title: "Continue on WhatsApp", desc: "Your enquiry opens in WhatsApp, ready to send." },
  { title: "Hear back from us", desc: "We typically respond within 24 hours." },
]

const external = (href) => href.startsWith("http")

const ChannelCard = ({ channel }) => (
  <li className="group relative flex flex-col bg-white p-5 transition-colors duration-300 hover:bg-ink-50/70 sm:p-6">
    <div className="flex items-center justify-between">
      <span className={channel.accent
        ? "flex h-11 w-11 items-center justify-center rounded-xl bg-[#1FAF55] text-white"
        : "flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-brand-300 transition-[transform,background-color,color] duration-300 ease-out-expo group-hover:-rotate-6 group-hover:bg-brand-400 group-hover:text-ink-950"}
      >
        <channel.icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" aria-hidden="true" />
    </div>
    <p className="t-eyebrow mt-6 text-ink-400">{channel.label}</p>
    {/* Primary link stretches over the whole card; a secondary number / address stays separately clickable. */}
    <a
      href={channel.href}
      target={external(channel.href) ? "_blank" : undefined}
      rel={external(channel.href) ? "noopener noreferrer" : undefined}
      className="mt-1.5 break-all font-display text-[15px] font-semibold text-ink-900 after:absolute after:inset-0 after:content-[''] sm:text-base"
    >
      {channel.value}
    </a>
    {channel.extra && (
      <a href={channel.extra.href} className="relative z-10 mt-1 w-fit break-all text-[13px] text-ink-500 underline-offset-4 hover:text-ink-900 hover:underline">
        {channel.extra.value}
      </a>
    )}
  </li>
)

const ContactPage = () => (
  <div className="overflow-x-clip">
    <PageHero
      layout="full"
      compact
      overlap
      eyebrow="Get in touch"
      title={[{ text: "Let's build" }, { text: "something great.", className: "text-brand-400" }]}
      lead="Ready to start your next project? Our engineers are just one message away."
      image={heroImg}
      imagePosition="center 40%"
      actions={
        <>
          <ActionButton href={CONTACT.phones[0].href} icon={<Phone className="h-4 w-4" aria-hidden="true" />} magnetic>
            Call now
          </ActionButton>
          <ActionButton href={whatsappLink()} variant="outline-light" icon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}>
            Chat on WhatsApp
          </ActionButton>
        </>
      }
    />

    <OverlapPanel label="Contact channels">
      <ul className="grid grid-cols-1 gap-px bg-ink-900/[0.06] sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map((channel) => <ChannelCard key={channel.label} channel={channel} />)}
      </ul>
    </OverlapPanel>

    <section className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>

        <div className="space-y-6 lg:col-span-5">
          <Reveal className="rounded-3xl border border-ink-900/[0.08] bg-ink-50 p-6 sm:p-8">
            <p className="t-eyebrow text-brand-700">What happens next</p>
            <ol className="mt-6 space-y-6">
              {NEXT_STEPS.map((step, i) => (
                <li key={step.title} className="relative flex gap-4">
                  {i < NEXT_STEPS.length - 1 && <span className="absolute left-4 top-9 h-[calc(100%-0.75rem)] w-px bg-ink-900/10" aria-hidden="true" />}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-500/50 bg-white font-mono text-[11px] tabular text-brand-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-semibold text-ink-900">{step.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-500">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white shadow-soft">
            <div className="relative h-56 bg-ink-100">
              <iframe
                title="Milestone Builders office location"
                src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`}
                className="absolute inset-0 h-full w-full border-0 grayscale-[40%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6">
              <p className="t-eyebrow text-ink-400">Head office</p>
              <p className="mt-2 flex gap-3 text-[15px] leading-relaxed text-ink-700">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                {CONTACT.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ink-900 hover:text-brand-700"
              >
                <Navigation className="h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" /> Get directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-ink-50 py-20 sm:py-24">
      <div className="container grid gap-10 lg:grid-cols-12 lg:items-center">
        <SectionHeading eyebrow="Where we work" title="Delivering projects across Tamil Nadu." className="lg:col-span-6" />
        <RevealGroup as="ul" className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end" gap={0.06}>
          {CONTACT.serviceAreas.map((area, i) => (
            <RevealItem as="li" key={area} className="flex items-center gap-2.5 rounded-full border border-ink-900/10 bg-white px-5 py-3 text-[15px] font-medium text-ink-800 shadow-soft">
              <span className={i === 0 ? "h-2 w-2 rounded-full bg-brand-500 ring-4 ring-brand-500/20" : "h-1.5 w-1.5 rotate-45 bg-brand-500"} aria-hidden="true" />
              {area}
              {i === 0 && <span className="text-[12px] font-normal text-ink-400">Head office</span>}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>

    <Footer />
  </div>
)

export default ContactPage
