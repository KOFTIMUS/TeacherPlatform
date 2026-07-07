import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FIELD_CONTROL_BASE_CLASS, FIELD_ERROR_CLASS } from "./shared";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      aria-invalid={error || props["aria-invalid"]}
      className={cn(
        "flex min-h-24 w-full px-3 py-2 placeholder:text-foreground-subtle",
        FIELD_CONTROL_BASE_CLASS,
        error && FIELD_ERROR_CLASS,
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
