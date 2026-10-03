import whatsappLogo from "@/assets/whatsapp.png"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT, whatsappLink } from "@/data/site"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Check, Phone, TriangleAlert, User } from "lucide-react"
import { useState } from "react"
import { SwapArrow } from "./ActionButton"
import Field from "./Field"
import { EASE_OUT } from "./motion"
import { isValidPhone } from "./validators"
import { openWhatsApp } from "./whatsapp"

const initialForm = () => ({ name: "", phone: "", message: CONTACT.defaultWhatsappMessage, consent: false })
const FIELD_ORDER = ["name", "phone", "message", "consent"]

const buildMessage = (form) => `Hi, my name is ${form.name}. ${form.message}\n\nContact Info:\nPhone: ${form.phone}`

/**
 * "Let's start your project" lead form — hands the enquiry off to WhatsApp.
 * WhatsApp opens synchronously on submit (a delayed window.open is blocked by most browsers).
 */
const LeadFormDialog = ({ open, onOpenChange }) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle · sent · blocked

  const handleOpenChange = (next) => {
    if (!next) {
      // Reset after the close animation so the form is fresh next time.
      setTimeout(() => { setStatus("idle"); setErrors({}); setForm(initialForm()) }, 300)
    }
    onOpenChange(next)
  }

  const update = (field) => (e) => {
    const value = e?.target ? e.target.value : e
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = "Please enter your name."
    if (!isValidPhone(form.phone)) next.phone = "Enter a valid phone number (10 digits)."
    if (!form.message.trim()) next.message = "Tell us briefly about your project."
    if (!form.consent) next.consent = "Please confirm to continue."
    setErrors(next)
    const first = FIELD_ORDER.find((f) => next[f])
    if (first) document.getElementById(`lead-${first}`)?.focus()
    return !first
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus(openWhatsApp(buildMessage(form)) ? "sent" : "blocked")
  }

  const firstName = form.name.trim().split(" ")[0]

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl gap-0 p-0" closeClassName="text-white/70 hover:bg-white/10 hover:text-white">
        <div className="relative overflow-hidden bg-ink-950 px-6 pb-7 pt-8 text-white sm:px-8">
          <div className="absolute inset-0 bg-grid-dark opacity-50 mask-fade-edges" aria-hidden="true" />
          <div className="glow-brand absolute inset-0" aria-hidden="true" />
          <div className="relative flex items-start gap-4 pr-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 ring-1 ring-[#25D366]/40">
              <img src={whatsappLogo} alt="" className="h-6 w-6" />
            </span>
            <div>
              <DialogTitle className="text-white">Let's start your project</DialogTitle>
              <DialogDescription className="mt-1 text-white/60">
                Share a few details for a personalised consultation. We'll continue on WhatsApp.
              </DialogDescription>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" ? (
            <motion.form
              key="form"
              noValidate
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8"
            >
              <Field id="lead-name" label="Full name" required error={errors.name} icon={User}>
                <Input value={form.name} onChange={update("name")} placeholder="Your name" autoComplete="name" />
              </Field>
              <Field id="lead-phone" label="Phone number" required error={errors.phone} icon={Phone}>
                <Input type="tel" inputMode="tel" value={form.phone} onChange={update("phone")} placeholder="+91 98765 43210" autoComplete="tel" />
              </Field>
              <Field id="lead-message" label="Message" required error={errors.message} className="sm:col-span-2">
                <Textarea value={form.message} onChange={update("message")} rows={3} placeholder="Tell us about your project…" />
              </Field>

              <div className="sm:col-span-2">
                <label htmlFor="lead-consent" className="flex cursor-pointer items-start gap-3 text-sm text-ink-600">
                  <Checkbox
                    id="lead-consent"
                    checked={form.consent}
                    onCheckedChange={(checked) => update("consent")(checked === true)}
                    aria-invalid={errors.consent ? "true" : undefined}
                    aria-describedby={errors.consent ? "lead-consent-error" : undefined}
                    className="mt-0.5"
                  />
                  I agree to receive updates and offers from Milestone Builders
                </label>
                {errors.consent && <p id="lead-consent-error" role="alert" className="mt-2 pl-8 text-[13px] font-medium text-red-600">{errors.consent}</p>}
              </div>

              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[#1FAF55] px-6 font-semibold text-white shadow-[0_14px_30px_-14px_rgba(31,175,85,0.9)] transition-colors hover:bg-[#199448] active:scale-[0.99] sm:col-span-2"
              >
                Submit &amp; connect on WhatsApp
                <SwapArrow />
              </button>
            </motion.form>
          ) : (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="flex flex-col items-center px-6 py-12 text-center sm:px-10"
              role="status"
            >
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full ring-8",
                  status === "sent" ? "bg-emerald-50 text-emerald-600 ring-emerald-50/60" : "bg-amber-50 text-amber-600 ring-amber-50/60",
                )}
              >
                {status === "sent"
                  ? <Check className="h-8 w-8" strokeWidth={2.5} aria-hidden="true" />
                  : <TriangleAlert className="h-8 w-8" strokeWidth={2.25} aria-hidden="true" />}
              </motion.span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
                {status === "sent" ? `Thank you, ${firstName}.` : "WhatsApp didn’t open"}
              </h3>
              <p className="mt-2 max-w-sm text-ink-500">
                {status === "sent"
                  ? "WhatsApp has opened in a new tab with your details — press send there to reach our team."
                  : "Your browser blocked the new tab. Your message is ready — continue with the button below."}
              </p>
              <a
                href={whatsappLink(buildMessage(form))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setStatus("sent")}
                className={cn(
                  "group mt-8 inline-flex h-12 items-center gap-2.5 rounded-xl px-6 font-semibold transition-colors",
                  status === "sent" ? "text-ink-900 ring-1 ring-inset ring-ink-900/15 hover:bg-ink-50" : "bg-[#1FAF55] text-white hover:bg-[#199448]",
                )}
              >
                {status === "sent" ? "Reopen WhatsApp" : "Continue on WhatsApp"} <SwapArrow />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}

export default LeadFormDialog
