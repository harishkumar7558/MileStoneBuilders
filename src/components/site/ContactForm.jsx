import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DIVISIONS, whatsappLink } from "@/data/site"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Check, LoaderCircle, Mail, MessageCircle, Phone, RotateCcw, TriangleAlert, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { SwapArrow } from "./ActionButton"
import Field from "./Field"
import { EASE_OUT } from "./motion"
import { isValidEmail, isValidPhone } from "./validators"
import { openWhatsApp } from "./whatsapp"

const EMPTY_FORM = { firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }
const DEFAULT_MESSAGE = "Hi, I am interested in your construction services. Can you please contact me?"
const SERVICE_OPTIONS = [...DIVISIONS.map((d) => d.label), "Not sure yet"]
const FIELD_ORDER = ["firstName", "phone", "email"]
const SENDING_MS = 700

const buildWhatsappMessage = ({ firstName, lastName, email, phone, service, message }) => {
  const fullName = `${firstName} ${lastName}`.trim()
  return [
    "*New Inquiry from Website*",
    "",
    `*Name:* ${fullName}`,
    `*Phone:* ${phone}`,
    `*Email:* ${email || "Not provided"}`,
    `*Service:* ${service || "Not specified"}`,
    "*Message:*",
    message.trim() || DEFAULT_MESSAGE,
    "",
    "Looking forward to hearing from you!",
  ].join("\n")
}

const validateField = (name, value) => {
  const v = value.trim()
  switch (name) {
    case "firstName": return v ? undefined : "Please enter your first name."
    case "phone": return !v ? "Please enter your phone number." : isValidPhone(v) ? undefined : "Enter a valid phone number (10 digits)."
    case "email": return v && !isValidEmail(v) ? "Enter a valid email address." : undefined
    default: return undefined
  }
}

/** Service interest as a pill-style radio group. */
const ServicePicker = ({ value, onChange }) => (
  <fieldset className="sm:col-span-2">
    <legend className="mb-2 flex w-full items-baseline justify-between text-sm font-medium text-ink-800">
      What do you need help with?
      <span className="text-xs font-normal text-ink-400">Optional</span>
    </legend>
    <div className="flex flex-wrap gap-2">
      {SERVICE_OPTIONS.map((option) => {
        const checked = value === option
        return (
          <label key={option} className="relative cursor-pointer">
            <input
              type="radio"
              name="service"
              value={option}
              checked={checked}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span
              className={cn(
                "flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-sm font-medium transition-all duration-200",
                "peer-focus-visible:ring-4 peer-focus-visible:ring-brand-400/25",
                checked
                  ? "border-ink-900 bg-ink-900 text-white"
                  : "border-ink-200 bg-white text-ink-700 hover:border-ink-400 hover:text-ink-900",
              )}
            >
              <span className={cn("flex h-4 w-4 items-center justify-center rounded-full transition-colors", checked ? "bg-brand-400 text-ink-950" : "border border-ink-300")} aria-hidden="true">
                {checked && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
              {option}
            </span>
          </label>
        )
      })}
    </div>
  </fieldset>
)

const StatusPanel = ({ icon: Icon, tone, title, children, headingRef }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: EASE_OUT }}
    className="flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16"
    role="status"
  >
    <motion.span
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full ring-8",
        tone === "success" ? "bg-emerald-50 text-emerald-600 ring-emerald-50/60" : "bg-amber-50 text-amber-600 ring-amber-50/60",
      )}
    >
      <Icon className="h-8 w-8" strokeWidth={2.25} aria-hidden="true" />
    </motion.span>
    <h3 ref={headingRef} tabIndex={-1} className="mt-6 font-display text-2xl font-semibold text-ink-900 outline-none">{title}</h3>
    {children}
  </motion.div>
)

/**
 * Project enquiry form. Submitting composes the enquiry and continues the conversation on WhatsApp.
 * States: idle → sending → sent, or blocked (the browser stopped the new tab; a direct link is offered).
 */
const ContactForm = () => {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState("idle")
  const [sent, setSent] = useState(null) // { name, text }
  const timer = useRef()
  const statusHeading = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])
  useEffect(() => {
    if (status === "sent" || status === "blocked") statusHeading.current?.focus()
  }, [status])

  const update = (field) => (e) => {
    const value = e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
  }

  const blur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    if (form[field].trim()) setErrors((prev) => ({ ...prev, [field]: validateField(field, form[field]) }))
  }

  const isValid = (field) => touched[field] && form[field].trim() && !validateField(field, form[field])

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = Object.fromEntries(FIELD_ORDER.map((f) => [f, validateField(f, form[f])]))
    setErrors(next)
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])))
    const firstInvalid = FIELD_ORDER.find((f) => next[f])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const text = buildWhatsappMessage(form)
    setSent({ name: form.firstName.trim(), text })
    if (!openWhatsApp(text)) {
      setStatus("blocked")
      return
    }
    setStatus("sending")
    timer.current = setTimeout(() => {
      setStatus("sent")
      setForm(EMPTY_FORM)
      setTouched({})
    }, SENDING_MS)
  }

  const reset = () => {
    setStatus("idle")
    setSent(null)
  }

  const sending = status === "sending"

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white shadow-lift">
      <div className="flex items-center justify-between gap-4 border-b border-ink-900/[0.08] px-6 py-5 sm:px-8">
        <div>
          <p className="t-eyebrow text-brand-700">Project enquiry</p>
          <h2 className="mt-1 font-display text-xl font-semibold text-ink-900 sm:text-2xl">Send us a message</h2>
        </div>
        <span className="hidden shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:inline-flex">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> Continues on WhatsApp
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" && (
          <StatusPanel key="sent" icon={Check} tone="success" title={`Thanks, ${sent.name}.`} headingRef={statusHeading}>
            <p className="mt-2 max-w-sm text-ink-500">
              Your enquiry is ready in WhatsApp — press send there and we typically respond within 24 hours.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={whatsappLink(sent.text)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-ink-900 ring-1 ring-inset ring-ink-900/15 transition-colors hover:bg-ink-50"
              >
                Reopen WhatsApp <SwapArrow className="text-brand-600" />
              </a>
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-11 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-ink-600 transition-colors hover:text-ink-900"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Send another enquiry
              </button>
            </div>
          </StatusPanel>
        )}

        {status === "blocked" && (
          <StatusPanel key="blocked" icon={TriangleAlert} tone="warning" title="WhatsApp didn’t open" headingRef={statusHeading}>
            <p className="mt-2 max-w-sm text-ink-500">
              Your browser blocked the new tab. Your message is ready — continue with the button below.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href={whatsappLink(sent.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStatus("sent")}
                className="group inline-flex h-12 items-center gap-2.5 rounded-xl bg-[#1FAF55] px-6 font-semibold text-white transition-colors hover:bg-[#199448]"
              >
                Continue on WhatsApp <SwapArrow />
              </a>
              <button type="button" onClick={reset} className="h-11 px-4 text-sm font-semibold text-ink-600 hover:text-ink-900">
                Edit details
              </button>
            </div>
          </StatusPanel>
        )}

        {(status === "idle" || status === "sending") && (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit}
            aria-busy={sending}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 p-6 sm:grid-cols-2 sm:gap-6 sm:p-8"
          >
            <Field id="contact-firstName" label="First name" required error={errors.firstName} valid={isValid("firstName")} icon={User}>
              <Input value={form.firstName} onChange={update("firstName")} onBlur={blur("firstName")} placeholder="John" autoComplete="given-name" disabled={sending} />
            </Field>
            <Field id="contact-lastName" label="Last name" optional icon={User}>
              <Input value={form.lastName} onChange={update("lastName")} placeholder="Doe" autoComplete="family-name" disabled={sending} />
            </Field>
            <Field id="contact-phone" label="Phone" required error={errors.phone} valid={isValid("phone")} icon={Phone}>
              <Input type="tel" inputMode="tel" value={form.phone} onChange={update("phone")} onBlur={blur("phone")} placeholder="+91 98765 43210" autoComplete="tel" disabled={sending} />
            </Field>
            <Field id="contact-email" label="Email" optional error={errors.email} valid={isValid("email")} icon={Mail}>
              <Input type="email" inputMode="email" value={form.email} onChange={update("email")} onBlur={blur("email")} placeholder="you@example.com" autoComplete="email" disabled={sending} />
            </Field>

            <ServicePicker value={form.service} onChange={(service) => setForm((prev) => ({ ...prev, service }))} />

            <Field id="contact-message" label="Project details" optional className="sm:col-span-2" hint="Site location, type of work and timeline help us respond faster.">
              <Textarea value={form.message} onChange={update("message")} rows={5} placeholder="Tell us about your project…" disabled={sending} />
            </Field>

            <div className="flex flex-col-reverse gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-ink-400">Fields marked <span className="text-brand-600">*</span> are required.</p>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex h-12 min-w-[12rem] items-center justify-center gap-2.5 rounded-xl bg-ink-900 px-7 font-semibold text-white shadow-[0_14px_30px_-14px_rgba(11,18,32,0.7)] transition-[background-color,transform] duration-200 hover:bg-ink-800 active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 sm:h-14"
              >
                {sending ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin text-brand-300" aria-hidden="true" />
                    Opening WhatsApp…
                  </>
                ) : (
                  <>Send message <SwapArrow className="text-brand-300" /></>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactForm
