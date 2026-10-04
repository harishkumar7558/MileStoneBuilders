import logo from "@/assets/logo-mark.png"
import Marquee from "@/components/site/Marquee"
import { CONTACT, DIVISIONS, whatsappLink } from "@/data/site"
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const DISCIPLINES = [
  "Geotechnical Investigation", "Soil Laboratory Testing", "Surveying & GIS",
  "Structural Design", "Architectural Planning", "Civil Construction",
]

const COMPANY_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const SOCIAL = [
  { label: "Instagram", href: CONTACT.instagram.href, icon: Instagram },
  { label: "WhatsApp", href: whatsappLink(), icon: MessageCircle },
  { label: "Email", href: `mailto:${CONTACT.emails[0]}`, icon: Mail },
]

const FooterHeading = ({ children }) => <p className="t-eyebrow mb-5 text-white/40">{children}</p>

const FooterLink = ({ to, children }) => (
  <Link to={to} className="group inline-flex items-center text-white/70 transition-colors hover:text-white">
    <span className="mr-0 h-px w-0 bg-brand-400 transition-[width,margin] duration-300 ease-out-expo group-hover:mr-2 group-hover:w-3" aria-hidden="true" />
    {children}
  </Link>
)

const Footer = () => (
  <footer className="relative overflow-hidden bg-ink-950 text-white">
    <div className="glow-brand absolute inset-0 opacity-60" aria-hidden="true" />
    <div className="relative border-b border-white/10 py-6">
      <Marquee speed="55s" trackClassName="gap-12 pr-12">
        {DISCIPLINES.map((item) => (
          <span key={item} className="flex items-center gap-12 whitespace-nowrap font-display text-2xl font-semibold tracking-[-0.02em] text-white/25 sm:text-3xl">
            {item}
            <span className="h-2 w-2 rotate-45 bg-brand-400/70" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </div>

    <div className="container relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
      <div className="sm:col-span-2 lg:col-span-4">
        <Link to="/" className="inline-flex items-center gap-3 rounded-lg" aria-label="Milestone Groups — home">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-[0.02em]">MILESTONE</span>
            <span className="mt-1 block font-mono text-[10px] tracking-[0.32em] text-brand-300">GROUPS</span>
          </span>
        </Link>
        <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
          Your trusted partner in modern construction & engineering solutions — geotechnical investigation, surveying, structural design and civil works.
        </p>
        <ul className="mt-7 flex gap-2">
          {SOCIAL.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/70 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-400 hover:text-ink-950"
              >
                <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav className="lg:col-span-2" aria-label="Services">
        <FooterHeading>Services</FooterHeading>
        <ul className="space-y-3 text-[15px]">
          {DIVISIONS.map((d) => <li key={d.href}><FooterLink to={d.href}>{d.label}</FooterLink></li>)}
        </ul>
      </nav>

      <nav className="lg:col-span-2" aria-label="Company">
        <FooterHeading>Company</FooterHeading>
        <ul className="space-y-3 text-[15px]">
          {COMPANY_LINKS.map((l) => <li key={l.href}><FooterLink to={l.href}>{l.label}</FooterLink></li>)}
        </ul>
      </nav>

      <div className="lg:col-span-4">
        <FooterHeading>Contact</FooterHeading>
        <ul className="space-y-3 text-[15px]">
          {CONTACT.phones.map((phone) => (
            <li key={phone.href}>
              <a href={phone.href} className="flex items-center gap-3 text-white/70 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-brand-300" aria-hidden="true" /> {phone.display}
              </a>
            </li>
          ))}
          {CONTACT.emails.map((email) => (
            <li key={email}>
              <a href={`mailto:${email}`} className="flex items-center gap-3 break-all text-white/70 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" /> {email}
              </a>
            </li>
          ))}
          <li>
            <a href={CONTACT.instagram.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 transition-colors hover:text-white">
              <Instagram className="h-4 w-4 text-brand-300" aria-hidden="true" /> {CONTACT.instagram.handle}
            </a>
          </li>
          <li className="flex gap-3 pt-2 leading-relaxed text-white/70">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" />
            {CONTACT.address}
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom padding keeps the floating WhatsApp / back-to-top buttons clear of this line at full scroll. */}
    <div className="relative border-t border-white/10">
      <div className="container flex flex-col gap-2 pb-24 pt-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p>Copyright © 2026 · All Rights Reserved · MilestoneGeoServices</p>
        <p>Powered by harishkumarsivaraman@gmail.com</p>
      </div>
    </div>
  </footer>
)

export default Footer
