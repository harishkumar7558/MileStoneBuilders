import { cn } from "@/lib/utils"
import { PAUSED, useInViewport } from "./useInViewport"

/** Continuous CSS marquee. Content is duplicated once; the copy is hidden from assistive tech. */
const Marquee = ({ children, className, trackClassName, speed = "40s", reverse = false, pauseOnHover = true, label }) => {
  const [ref, inView] = useInViewport()
  return (
    <div
      ref={ref}
      className={cn("group relative flex overflow-hidden mask-fade-x", !inView && PAUSED, className)}
      role={label ? "region" : undefined}
      aria-label={label}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 ? "true" : undefined}
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around motion-safe:animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            trackClassName,
          )}
          style={{ animationDuration: speed, animationDirection: reverse ? "reverse" : "normal" }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

export default Marquee
