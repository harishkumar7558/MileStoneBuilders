import * as React from "react"

import { cn } from "@/lib/utils"

export const fieldBase =
  "w-full rounded-xl border border-ink-200 bg-ink-50/40 px-4 text-[16px] text-ink-900 placeholder:text-ink-300 sm:text-[15px] " +
  "transition-[border-color,box-shadow,background-color] duration-200 hover:border-ink-300 focus-visible:bg-white " +
  "focus-visible:outline-none focus-visible:border-brand-500 focus-visible:ring-4 focus-visible:ring-brand-400/20 focus-visible:ring-offset-0 " +
  "aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-500/15 " +
  "disabled:cursor-not-allowed disabled:opacity-50"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn("flex h-12", fieldBase, className)}
      ref={ref}
      {...props} />
  );
})
Input.displayName = "Input"

export { Input }
