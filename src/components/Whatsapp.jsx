import whatsappLogo from '@/assets/whatsapp.png'
import { useLeadDialog } from '@/components/site/LeadDialogContext'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { SwapArrow } from '@/components/site/ActionButton'
import { CONTACT, whatsappLink } from '@/data/site'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AUTO_OPEN_DELAY = 8000
const SESSION_KEY = "ms-lead-prompted"

const WhatsApp = () => {
    const { openLeadDialog } = useLeadDialog()
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [customMessage, setCustomMessage] = useState(CONTACT.defaultWhatsappMessage)

    // Lead form prompt — once per session, after visitors have seen the page.
    useEffect(() => {
        let prompted = false
        try { prompted = sessionStorage.getItem(SESSION_KEY) === "1" } catch { /* storage unavailable */ }
        if (prompted) return
        const timer = setTimeout(() => {
            openLeadDialog()
            try { sessionStorage.setItem(SESSION_KEY, "1") } catch { /* storage unavailable */ }
        }, AUTO_OPEN_DELAY)
        return () => clearTimeout(timer)
    }, [openLeadDialog])

    const handleWhatsAppClick = () => {
        window.open(whatsappLink(customMessage), "_blank")
        setIsPopupOpen(false)
    }

    return (
        <>
            {/* Floating WhatsApp button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
                className="group fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
            >
                <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-lg bg-ink-950 px-3 py-2 text-[13px] font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
                    Need help? Chat now
                </span>
                {/* A few pulses to draw the eye, then still — no endless attention-seeking loop. */}
                <span className="absolute inset-0 rounded-full bg-[#25D366]/40 motion-safe:animate-pulse-ring [animation-iteration-count:4]" aria-hidden="true" />
                <button
                    type="button"
                    onClick={() => setIsPopupOpen(true)}
                    aria-label="Chat with us on WhatsApp"
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_30px_-10px_rgba(37,211,102,0.8)] transition-transform duration-300 ease-out-expo hover:scale-105 active:scale-95"
                >
                    <img src={whatsappLogo} alt="" className="h-8 w-8" />
                </button>
            </motion.div>

            {/* Chat dialog */}
            <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
                <DialogContent className="max-w-md gap-0 p-0" closeClassName="text-white/70 hover:bg-white/10 hover:text-white">
                    <div className="flex items-center gap-4 bg-ink-950 px-6 py-6 text-white">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                            <img src={whatsappLogo} alt="" className="h-7 w-7" />
                        </span>
                        <div>
                            <DialogTitle className="text-lg text-white">Chat on WhatsApp</DialogTitle>
                            <DialogDescription className="text-white/60">We usually reply within minutes</DialogDescription>
                        </div>
                    </div>

                    <div className="space-y-5 p-6">
                        <div className="flex items-center justify-between rounded-lg border border-ink-900/10 bg-ink-50 px-4 py-3">
                            <div>
                                <p className="font-semibold text-ink-900">Milestone Builders</p>
                                <p className="font-mono text-[13px] text-ink-500">+91 {CONTACT.whatsappNumber.slice(-10)}</p>
                            </div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                                Online
                            </span>
                        </div>
                        <div>
                            <label htmlFor="wa-message" className="mb-2 block text-sm font-medium text-ink-800">Your message</label>
                            <Textarea
                                id="wa-message"
                                value={customMessage}
                                onChange={(e) => setCustomMessage(e.target.value)}
                                rows={4}
                                placeholder="Type your message here…"
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 border-t border-ink-900/10 bg-ink-50/60 p-5">
                        <button
                            type="button"
                            className="h-11 flex-1 rounded-lg font-semibold text-ink-700 ring-1 ring-inset ring-ink-900/15 transition-colors hover:bg-white"
                            onClick={() => setIsPopupOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#1FAF55] font-semibold text-white transition-colors hover:bg-[#199448]"
                            onClick={handleWhatsAppClick}
                        >
                            Open WhatsApp <SwapArrow />
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default WhatsApp
