import * as React from "react"

import { cn } from "@/lib/utils"
import { fieldBase } from "./input"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn("flex min-h-[120px] resize-none py-3 leading-relaxed", fieldBase, className)}
      ref={ref}
      {...props} />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
