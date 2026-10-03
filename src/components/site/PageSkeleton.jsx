/** Placeholder shown while a route chunk loads — mirrors the hero layout to avoid layout shift. */
const PageSkeleton = () => (
  <div className="relative min-h-[100svh] overflow-hidden bg-ink-950" role="status" aria-label="Loading page">
    <div className="absolute inset-0 bg-grid-dark opacity-60 mask-fade-edges" aria-hidden="true" />
    <div className="container relative flex min-h-[100svh] flex-col justify-center gap-6 pb-28 pt-32" aria-hidden="true">
      <div className="skeleton h-3 w-48 rounded-full !bg-white/10" />
      <div className="skeleton h-16 w-3/4 max-w-2xl rounded-lg !bg-white/10 sm:h-24" />
      <div className="skeleton h-16 w-2/3 max-w-xl rounded-lg !bg-white/10 sm:h-24" />
      <div className="skeleton mt-4 h-4 w-full max-w-md rounded-full !bg-white/10" />
      <div className="mt-6 flex gap-3">
        <div className="skeleton h-14 w-44 rounded-lg !bg-white/10" />
        <div className="skeleton h-14 w-44 rounded-lg !bg-white/10" />
      </div>
    </div>
  </div>
)

export default PageSkeleton
