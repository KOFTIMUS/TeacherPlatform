import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FIELD_CONTROL_BASE_CLASS, FIELD_ERROR_CLASS } from "./shared";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

function Select({ className, children, error, ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        data-slot="select"
        aria-invalid={error || props["aria-invalid"]}
        className={cn(
          "flex w-full touch-target appearance-none py-2 pr-10 pl-3",
          FIELD_CONTROL_BASE_CLASS,
          error && FIELD_ERROR_CLASS,
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-foreground-muted"
        aria-hidden="true"
      />
    </div>
  );
}

export { Select };
