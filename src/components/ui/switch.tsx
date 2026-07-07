import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FIELD_LABEL_BASE_CLASS } from "./shared";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
}

function Switch({ className, label, id, ...props }: SwitchProps) {
  const inputId =
    id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <label
      htmlFor={inputId}
      className={cn(
        FIELD_LABEL_BASE_CLASS,
        props.disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      <input
        type="checkbox"
        role="switch"
        id={inputId}
        data-slot="switch"
        className="peer sr-only"
        {...props}
      />
      <span
        className="relative block h-6 w-11 shrink-0 rounded-full border border-border bg-muted shadow-xs transition-[background-color,border-color] duration-150 peer-checked:border-primary peer-checked:bg-primary peer-checked:[&>span]:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
        aria-hidden="true"
      >
        <span className="absolute top-0.5 left-0.5 block size-5 rounded-full bg-background shadow-xs transition-transform duration-150" />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}

export { Switch };
