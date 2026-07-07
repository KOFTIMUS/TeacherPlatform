import type { LabelHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

function Label({ className, children, required, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-normal text-foreground",
        className,
      )}
      {...props}
    >
      {children}
      {required ? (
        <span className="ml-1 text-danger" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}

export { Label };
