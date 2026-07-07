import type { FieldsetHTMLAttributes, InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { FIELD_LABEL_BASE_CLASS } from "./shared";

export interface RadioGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  label?: string;
}

function RadioGroup({ className, label, children, ...props }: RadioGroupProps) {
  return (
    <fieldset
      data-slot="radio-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      {label ? (
        <legend className="text-sm font-medium text-foreground">{label}</legend>
      ) : null}
      {children}
    </fieldset>
  );
}

export interface RadioGroupItemProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  itemLabel: string;
}

function RadioGroupItem({
  className,
  itemLabel,
  id,
  value,
  ...props
}: RadioGroupItemProps) {
  const inputId =
    id ??
    `${itemLabel.toLowerCase().replace(/\s+/g, "-")}-${String(value ?? "")}`;

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
        type="radio"
        id={inputId}
        value={value}
        data-slot="radio-group-item"
        className="peer sr-only"
        {...props}
      />
      <span
        className="flex size-5 shrink-0 items-center justify-center rounded-full border border-border bg-background shadow-xs transition-[border-color] duration-150 peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background peer-disabled:cursor-not-allowed peer-disabled:opacity-50 peer-checked:[&_span]:opacity-100"
        aria-hidden="true"
      >
        <span className="size-2.5 rounded-full bg-primary opacity-0 transition-opacity duration-150" />
      </span>
      <span>{itemLabel}</span>
    </label>
  );
}

export { RadioGroup, RadioGroupItem };
