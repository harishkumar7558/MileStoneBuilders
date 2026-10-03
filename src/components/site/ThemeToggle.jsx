import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"
import { flushSync } from "react-dom"

const STORAGE_KEY = "theme" // read by the inline script in index.html

const currentTheme = () => (document.documentElement.classList.contains("dark") ? "dark" : "light")

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark")
  try { localStorage.setItem(STORAGE_KEY, theme) } catch { /* storage blocked — theme still applies for this visit */ }
}

/**
 * Light / dark switch for the header. Light is the default; the choice is remembered.
 * `solid` matches the header state: false over the dark hero, true once the header turns into a bar.
 */
const ThemeToggle = ({ solid, className }) => {
  const [theme, setTheme] = useState(currentTheme)
  const dark = theme === "dark"

  const toggle = () => {
    const next = dark ? "light" : "dark"
    const run = () => flushSync(() => { applyTheme(next); setTheme(next) })
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    // Cross-fade the whole page where supported; otherwise switch instantly.
    if (document.startViewTransition && !reduce) document.startViewTransition(run)
    else run()
  }

  const idle = solid ? "text-ink-500 group-hover:text-ink-900" : "text-white/60 group-hover:text-white"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark theme"
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className={cn(
        "group relative flex h-9 w-[68px] shrink-0 items-center justify-between rounded-full px-1 ring-1 ring-inset transition-colors duration-300",
        solid ? "ring-ink-900/15 hover:bg-ink-900/5" : "ring-white/25 hover:bg-white/10",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-1 top-1 h-7 w-7 rounded-full bg-brand-400 shadow-[0_6px_14px_-6px_rgba(235,145,16,0.9)] transition-transform duration-500 ease-out-expo",
          dark && "translate-x-8",
        )}
      />
      <span className="relative flex h-7 w-7 items-center justify-center" aria-hidden="true">
        <Sun className={cn("h-4 w-4 transition-[color,transform] duration-500 ease-out-expo", dark ? cn(idle, "rotate-90") : "text-ink-950")} />
      </span>
      <span className="relative flex h-7 w-7 items-center justify-center" aria-hidden="true">
        <Moon className={cn("h-4 w-4 transition-[color,transform] duration-500 ease-out-expo", dark ? "text-ink-950" : cn(idle, "-rotate-12"))} />
      </span>
    </button>
  )
}

export default ThemeToggle
