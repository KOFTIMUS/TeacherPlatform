import { Check } from "lucide-react";
import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FIELD_LABEL_BASE_CLASS } from "./shared";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
}

function Checkbox({ className, label, id, ...props }: CheckboxProps) {
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
        id={inputId}
        data-slot="checkbox"
        className="peer sr-only"
        {...props}
      />
      <span
        className="flex size-5 shrink-0 items-center justify-center rounded-sm border border-border bg-background shadow-xs transition-[color,background-color,border-color] duration-150 peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-checked:[&_svg]:opacity-100"
        aria-hidden="true"
      >
        <Check className="size-3.5 text-primary-foreground opacity-0 transition-opacity duration-150" />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}

export { Checkbox };
