import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FIELD_CONTROL_BASE_CLASS, FIELD_ERROR_CLASS } from "./shared";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

function Input({ className, type = "text", error, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={error || props["aria-invalid"]}
      className={cn(
        "flex w-full touch-target px-3 py-2 placeholder:text-foreground-subtle",
        FIELD_CONTROL_BASE_CLASS,
        error && FIELD_ERROR_CLASS,
        className,
      )}
      {...props}
    />
  );
}

export { Input };
