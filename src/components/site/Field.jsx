import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { CircleAlert, CircleCheck } from "lucide-react"
import { Children, cloneElement, isValidElement } from "react"

/**
 * Labelled form control with an optional leading icon, a valid tick and an animated error message.
 * Wires id / aria-invalid / aria-describedby onto the child control.
 */
const Field = ({ id, label, required, optional, error, valid, hint, icon: Icon, className, children }) => {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined
  const control = Children.only(children)
  const enhanced = isValidElement(control)
    ? cloneElement(control, {
        id,
        "aria-invalid": error ? "true" : undefined,
        "aria-describedby": describedBy,
        "aria-required": required || undefined,
        className: cn(Icon && "pl-11", valid && !error && "pr-11", control.props.className),
      })
    : control

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-ink-800">
        <span>
          {label}
          {required && <span className="ml-0.5 text-brand-600" aria-hidden="true">*</span>}
        </span>
        {optional && <span className="text-xs font-normal text-ink-400">Optional</span>}
      </label>
      <div className="group/field relative">
        {Icon && (
          <Icon
            className={cn(
              "pointer-events-none absolute left-4 top-[15px] h-[18px] w-[18px] transition-colors duration-200 group-focus-within/field:text-brand-600",
              error ? "text-red-500" : "text-ink-300",
            )}
            aria-hidden="true"
          />
        )}
        {enhanced}
        <AnimatePresence>
          {valid && !error && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-none absolute right-4 top-[15px]"
              aria-hidden="true"
            >
              <CircleCheck className="h-[18px] w-[18px] text-emerald-600" />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-red-600"
          >
            <CircleAlert className="h-3.5 w-3.5" aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      {hint && !error && <p id={`${id}-hint`} className="mt-2 text-[13px] text-ink-400">{hint}</p>}
    </div>
  )
}

export default Field
