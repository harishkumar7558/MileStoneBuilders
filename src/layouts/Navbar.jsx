import logo from "@/assets/logo-mark.png"
import ActionButton, { SwapArrow } from "@/components/site/ActionButton"
import { useLeadDialog } from "@/components/site/LeadDialogContext"
import { EASE_OUT } from "@/components/site/motion"
import ThemeToggle from "@/components/site/ThemeToggle"
import { CONTACT, DIVISIONS, PRIMARY_NAV } from "@/data/site"
import { cn } from "@/lib/utils"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, Phone, X } from "lucide-react"
import { useEffect, useId, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"

const DIVISION_PATHS = DIVISIONS.map((d) => d.href)
const HOVER_CLOSE_DELAY = 140

const Brand = ({ solid }) => (
  <Link to="/" className="group flex items-center gap-3 rounded-lg" aria-label="Milestone Groups — home">
    <span className="theme-locked relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-ink-900/5 transition-transform duration-500 ease-out-expo group-hover:rotate-[-8deg] group-hover:scale-105">
      <img src={logo} alt="" className="h-9 w-9 object-contain" />
    </span>
    <span className="leading-none">
      <span className={cn("block font-display text-[17px] font-bold tracking-[0.02em] transition-colors duration-300", solid ? "text-ink-900" : "text-white")}>
        MILESTONE
      </span>
      <span className={cn("mt-1 block font-mono text-[10px] font-medium tracking-[0.32em] transition-colors duration-300", solid ? "text-brand-600" : "text-brand-300")}>
        GROUPS
      </span>
    </span>
  </Link>
)

const MenuIcon = ({ open }) => (
  <span className="relative block h-3.5 w-5" aria-hidden="true">
    {[0, 1].map((i) => (
      <span
        key={i}
        className={cn(
          "absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-all duration-300 ease-out-expo",
          i === 0 ? (open ? "top-1.5 rotate-45" : "top-0") : (open ? "top-1.5 -rotate-45" : "top-3 w-3.5"),
        )}
      />
    ))}
  </span>
)

const linkTone = (solid, active) =>
  solid
    ? (active ? "text-ink-900" : "text-ink-500 hover:text-ink-900")
    : (active ? "text-white" : "text-white/70 hover:text-white")

const ActiveBar = () => (
  <motion.span
    layoutId="nav-active"
    className="absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-brand-400"
    transition={{ type: "spring", stiffness: 380, damping: 32 }}
  />
)

/** Desktop "Services" mega-menu — a disclosure (button + panel of links), opened by hover, click or keyboard. */
const ServicesMenu = ({ solid, active, onQuote }) => {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef()
  const buttonRef = useRef(null)
  const wrapperRef = useRef(null)
  const panelId = useId()
  const location = useLocation()

  // Close when the route changes (render-phase adjustment).
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setOpen(false)
  }

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); buttonRef.current?.focus() }
    }
    const onDown = (e) => { if (!wrapperRef.current?.contains(e.target)) setOpen(false) }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onDown)
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onDown) }
  }, [open])

  const hoverOpen = (e) => {
    if (e.pointerType !== "mouse") return
    clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const hoverClose = (e) => {
    if (e.pointerType !== "mouse") return
    closeTimer.current = setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY)
  }

  return (
    <li
      ref={wrapperRef}
      className="static"
      onPointerEnter={hoverOpen}
      onPointerLeave={hoverClose}
      onBlur={(e) => { if (!wrapperRef.current?.contains(e.relatedTarget)) setOpen(false) }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn("group relative flex items-center gap-1.5 rounded-lg px-4 py-2 text-[14px] font-medium transition-colors duration-200", linkTone(solid, active || open))}
      >
        Services
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300 ease-out-expo", open && "rotate-180")} aria-hidden="true" />
        {active && <ActiveBar />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="absolute inset-x-0 top-full mx-auto w-[min(780px,calc(100vw-2rem))] origin-top pt-3"
          >
            <div className="rounded-2xl border border-ink-900/[0.08] bg-white p-2 shadow-lift">
              <ul className="grid grid-cols-3 gap-1">
                {DIVISIONS.map((division) => (
                  <li key={division.href}>
                    <NavLink
                      to={division.href}
                      end
                      className={({ isActive }) => cn(
                        "group/item flex h-full flex-col rounded-xl p-4 transition-colors duration-200 hover:bg-ink-900/[0.04] focus-visible:bg-ink-900/[0.04]",
                        isActive && "bg-ink-900/[0.035]",
                      )}
                    >
                      <span className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-950 text-brand-300 transition-[transform,background-color,color] duration-300 ease-out-expo group-hover/item:-rotate-6 group-hover/item:bg-brand-400 group-hover/item:text-ink-950">
                          <division.icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                        </span>
                        <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-ink-400 opacity-0 transition-all duration-300 ease-out-expo group-hover/item:translate-x-0 group-hover/item:translate-y-0 group-hover/item:opacity-100" aria-hidden="true" />
                      </span>
                      <span className="mt-4 font-display text-[15px] font-semibold text-ink-900">{division.label}</span>
                      <span className="mt-1.5 text-[13px] leading-relaxed text-ink-500">{division.description}</span>
                      <span className="mt-4 space-y-1.5 border-t border-ink-900/[0.06] pt-3">
                        {division.highlights.map((h) => (
                          <span key={h} className="flex items-center gap-2 text-[12.5px] text-ink-600">
                            <span className="h-1 w-1 shrink-0 rotate-45 bg-brand-500" aria-hidden="true" />
                            {h}
                          </span>
                        ))}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-1 flex items-center justify-between gap-4 rounded-xl bg-ink-950 px-4 py-3 text-white">
                <p className="text-[13px] text-white/65">
                  Not sure which service fits? <span className="font-medium text-white">Talk to an engineer.</span>
                </p>
                <button
                  type="button"
                  onClick={() => { setOpen(false); onQuote() }}
                  className="group inline-flex shrink-0 items-center gap-2 rounded-lg px-2 py-1 text-[13px] font-semibold text-brand-300 transition-colors hover:text-brand-200"
                >
                  Get a quote <SwapArrow className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

const Navbar = () => {
  const { openLeadDialog } = useLeadDialog()
  const location = useLocation()
  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 24)
    setHidden(y > 480 && y > prev + 4)
    if (y < prev - 4) setHidden(false)
  })

  // Close the mobile menu on navigation and reset the header state (render-phase adjustment).
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    setMenuOpen(false)
    setHidden(false)
  }

  const isSolid = solid && !menuOpen
  const onDivision = DIVISION_PATHS.includes(location.pathname)

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden && !menuOpen ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
        className="fixed inset-x-0 top-0 z-50 pt-3"
      >
        <div className="container">
          <nav
            aria-label="Main"
            className={cn(
              "relative -mx-3 flex h-16 items-center justify-between gap-6 rounded-2xl border px-3 transition-[background-color,border-color,box-shadow] duration-500 sm:-mx-4 sm:px-4",
              isSolid ? "glass-light shadow-soft" : "border-transparent",
            )}
          >
            <Brand solid={isSolid} />

            <ul className="hidden items-center lg:flex">
              {PRIMARY_NAV.map((item) =>
                item.children ? (
                  <ServicesMenu key={item.label} solid={isSolid} active={onDivision} onQuote={openLeadDialog} />
                ) : item.href.includes("#") ? (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn("relative block rounded-lg px-4 py-2 text-[14px] font-medium transition-colors duration-200", linkTone(isSolid, false))}
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end
                      className={({ isActive }) => cn("relative block rounded-lg px-4 py-2 text-[14px] font-medium transition-colors duration-200", linkTone(isSolid, isActive))}
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          {isActive && <ActiveBar />}
                        </>
                      )}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href={CONTACT.phones[0].href}
                className={cn(
                  "hidden items-center gap-2 rounded-lg font-mono text-[12px] tracking-wide transition-colors xl:flex",
                  isSolid ? "text-ink-500 hover:text-ink-900" : "text-white/60 hover:text-white",
                )}
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {CONTACT.phones[0].display}
              </a>
              <ThemeToggle solid={isSolid} />
              <ActionButton size="md" onClick={openLeadDialog} magnetic className="hidden sm:inline-flex">
                Get Quote
              </ActionButton>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset transition-colors lg:hidden",
                  isSolid ? "text-ink-900 ring-ink-900/15 hover:bg-ink-900/5" : "text-white ring-white/25 hover:bg-white/10",
                )}
              >
                <MenuIcon open={menuOpen} />
              </button>
            </div>

            {/* Scroll progress */}
            <span className="pointer-events-none absolute inset-x-4 bottom-0 h-[2px] overflow-hidden rounded-full" aria-hidden="true">
              <motion.span
                className="block h-full origin-left bg-brand-400"
                style={{ scaleX: progress, opacity: isSolid ? 1 : 0 }}
              />
            </span>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu — Radix dialog for focus trapping + Esc to close */}
      <DialogPrimitive.Root open={menuOpen} onOpenChange={setMenuOpen}>
        <AnimatePresence>
          {menuOpen && (
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Content
                forceMount
                id="mobile-menu"
                aria-describedby={undefined}
                className="fixed inset-0 z-[55] lg:hidden"
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <DialogPrimitive.Title className="sr-only">Site navigation</DialogPrimitive.Title>
                <motion.div
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  animate={{ clipPath: "inset(0 0 0% 0)" }}
                  exit={{ clipPath: "inset(0 0 100% 0)" }}
                  transition={{ duration: 0.55, ease: EASE_OUT }}
                  className="flex h-full flex-col overflow-y-auto overscroll-contain bg-ink-950 px-5 pb-8 text-white sm:px-8"
                >
                  <div className="absolute inset-0 bg-grid-dark opacity-40 mask-fade-edges" aria-hidden="true" />
                  <div className="glow-brand absolute inset-0" aria-hidden="true" />
                  <div className="relative flex h-[76px] shrink-0 items-center justify-between pt-3">
                    <Brand solid={false} />
                    <DialogPrimitive.Close className="flex h-11 w-11 items-center justify-center rounded-xl text-white ring-1 ring-inset ring-white/25 hover:bg-white/10">
                      <X className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Close menu</span>
                    </DialogPrimitive.Close>
                  </div>

                  <motion.div
                    className="relative mt-6"
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.18 } } }}
                  >
                    <motion.p variants={mobileItem} className="t-eyebrow text-white/40">Services</motion.p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                      {DIVISIONS.map((division) => (
                        <motion.li key={division.href} variants={mobileItem}>
                          <NavLink
                            to={division.href}
                            end
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => cn(
                              "group flex h-full items-start gap-4 rounded-2xl border p-4 transition-colors sm:flex-col",
                              isActive ? "border-brand-400/40 bg-white/[0.06]" : "border-white/10 hover:bg-white/[0.04]",
                            )}
                          >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-ink-950">
                              <division.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="flex items-center justify-between font-display text-lg font-semibold">
                                {division.label}
                                <ArrowRight className="h-4 w-4 text-white/40 sm:hidden" aria-hidden="true" />
                              </span>
                              <span className="mt-1 block text-[13px] leading-relaxed text-white/55">{division.description}</span>
                            </span>
                          </NavLink>
                        </motion.li>
                      ))}
                    </ul>

                    <ul className="mt-8">
                      {PRIMARY_NAV.filter((item) => !item.children).map((item, i) => (
                        <motion.li key={item.href} variants={mobileItem} className="border-b border-white/10">
                          <NavLink
                            to={item.href}
                            end
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => cn(
                              "flex items-baseline gap-5 py-4 font-display text-[28px] font-semibold tracking-[-0.02em] transition-colors sm:text-4xl",
                              isActive && !item.href.includes("#") ? "text-white" : "text-white/60 hover:text-white",
                            )}
                          >
                            <span className="t-eyebrow tabular text-white/35">{String(i + 1).padStart(2, "0")}</span>
                            {item.label}
                          </NavLink>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.45 }}
                    className="relative mt-auto space-y-6 pt-10"
                  >
                    <ActionButton onClick={() => { setMenuOpen(false); openLeadDialog() }} className="w-full">
                      Get Quote
                    </ActionButton>
                    <div className="grid gap-3 text-sm text-white/65 sm:grid-cols-2">
                      <a href={CONTACT.phones[0].href} className="flex min-h-[44px] items-center gap-3 hover:text-white">
                        <Phone className="h-4 w-4 text-brand-300" aria-hidden="true" /> {CONTACT.phones[0].display}
                      </a>
                      <a href={`mailto:${CONTACT.emails[0]}`} className="flex min-h-[44px] items-center gap-3 break-all hover:text-white">
                        <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden="true" /> {CONTACT.emails[0]}
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          )}
        </AnimatePresence>
      </DialogPrimitive.Root>
    </>
  )
}

const mobileItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

export default Navbar
