import { cn } from "@/lib/utils"

/** Corner crop marks — a surveying / drafting reference used on framed imagery. */
const CropMarks = ({ className }) => (
  <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
    {["left-0 top-0 border-l border-t", "right-0 top-0 border-r border-t", "left-0 bottom-0 border-l border-b", "right-0 bottom-0 border-r border-b"].map((pos) => (
      <span key={pos} className={cn("absolute h-4 w-4 border-brand-300/80", pos)} />
    ))}
  </span>
)

export default CropMarks
