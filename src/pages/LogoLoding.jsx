import logo from "@/assets/logo-full.png"
import { EASE_OUT } from "@/components/site/motion"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const DURATION_MS = 1200
const SESSION_KEY = "ms-intro-seen"

const alreadySeen = () => {
  try { return sessionStorage.getItem(SESSION_KEY) === "1" } catch { return false }
}

/** Brand screen on the first visit of a session: logo, progress rule and a clip-reveal exit. */
const LogoLoading = () => {
  const [isLoading, setIsLoading] = useState(() => !alreadySeen())

  useEffect(() => {
    if (!isLoading) return
    const timer = setTimeout(() => {
      setIsLoading(false)
      try { sessionStorage.setItem(SESSION_KEY, "1") } catch { /* storage unavailable */ }
    }, DURATION_MS)
    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading Milestone Groups"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-50"
        >
          <div className="absolute inset-0 bg-grid-light mask-fade-edges" aria-hidden="true" />
          <motion.img
            src={logo}
            alt=""
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="relative w-[min(78vw,520px)] object-contain"
          />
          <div className="relative mt-10 h-px w-48 overflow-hidden bg-ink-900/10">
            <motion.div
              className="h-full origin-left bg-brand-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: DURATION_MS / 1000, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
          <p className="t-eyebrow relative mt-4 text-ink-400">Geo · Survey · Build</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LogoLoading
