import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

const RADIUS = 21

/** Back-to-top control with a scroll-progress ring. */
const ScrollToTopButton = () => {
    const { scrollY, scrollYProgress } = useScroll()
    const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })
    const [isVisible, setIsVisible] = useState(false)

    useMotionValueEvent(scrollY, "change", (y) => setIsVisible(y > 600))

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                    className="group fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-ink-950/90 text-white shadow-lg backdrop-blur transition-colors hover:bg-ink-900 sm:bottom-6 sm:left-6"
                >
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
                        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                        <motion.circle
                            cx="24" cy="24" r={RADIUS} fill="none" stroke="#F7A928" strokeWidth="2" strokeLinecap="round"
                            style={{ pathLength: progress }}
                        />
                    </svg>
                    <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTopButton
