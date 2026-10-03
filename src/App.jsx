import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ScrollToTopButton from './components/ScrollUp'
import Whatsapp from './components/Whatsapp'
import { LeadDialogProvider } from './components/site/LeadDialogContext'
import PageSkeleton from './components/site/PageSkeleton'
import { EASE_OUT } from './components/site/motion'
import Navbar from './layouts/Navbar'
import LogoLoading from './pages/LogoLoding'

// Route-level code splitting: each page ships as its own chunk.
const GeoService = lazy(() => import('./pages/GeoService'))
const HomePage = lazy(() => import('./pages/HomePage'))
const SurveyPage = lazy(() => import('./pages/SurveyPage'))
const ContactPage = lazy(() => import('./pages/contactPage'))
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'))

const HASH_SCROLL_FRAMES = 150 // ~2.5s — covers the page transition and a lazy route chunk

/**
 * Scrolls to `#id` links (e.g. "/#projects"). The target may not exist yet — the previous page is
 * still exiting or the route chunk is loading — so poll a few frames until it mounts.
 */
const HashScroller = () => {
  const { hash, key } = useLocation()
  useEffect(() => {
    if (!hash) return
    let frame
    let tries = 0
    const seek = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" })
      else if (tries++ < HASH_SCROLL_FRAMES) frame = requestAnimationFrame(seek)
    }
    frame = requestAnimationFrame(seek)
    return () => cancelAnimationFrame(frame)
  }, [hash, key])
  return null
}

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: "instant" })}>
      <motion.main
        key={location.pathname}
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.45, ease: EASE_OUT } }}
        exit={{ opacity: 0, transition: { duration: 0.25, ease: "easeIn" } }}
      >
        <Suspense fallback={<PageSkeleton />}>
          <Routes location={location}>
            <Route path="/" element={<GeoService />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/survey" element={<SurveyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <LeadDialogProvider>
          <a
            href="#main"
            className="sr-only z-[100] rounded-lg bg-white px-4 py-2 font-semibold text-ink-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <LogoLoading />
          <Navbar />
          <HashScroller />
          <AnimatedRoutes />
          <Whatsapp />
          <ScrollToTopButton />
        </LeadDialogProvider>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
